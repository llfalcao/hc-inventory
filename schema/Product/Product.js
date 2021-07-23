import { gql } from "apollo-server-express";
import * as uuid from "uuid";
import createRepository from "../../io/Database/createRepository";
import { ListSortmentEnum } from "../List/List";

const productRepository = createRepository("product");

export const typeDefs = gql`
    type Product implements Node {
        id: ID!
        name: String!
        price: Float!
        quantity: Int!
        disabled: Boolean!
    }

    type ProductList implements List {
        items: [Product!]!
        totalItems: Int!
    }

    input ProductListFilter {
        name: String
        price: Float
        quantity: Int
        disabled: Boolean
    }

    input ProductListOptions {
        take: Int
        skip: Int
        sort: ListSort
        filter: ProductListFilter
    }

    extend type Query {
        product(id: ID!): Product
        products(options: ProductListOptions): ProductList
    }

    input CreateProductInput {
        name: String!
        price: Float!
        quantity: Int!
    }

    input UpdateProductInput {
        id: ID!
        name: String!
        price: Float!
        quantity: Int!
    }

    extend type Mutation {
        createProduct(input: CreateProductInput!): Product!
        updateProduct(input: UpdateProductInput!): Product!
        deleteProduct(id: ID!): Product!
        enableProduct(id: ID!): Product!
        disableProduct(id: ID!): Product!
    }
`;

export const resolvers = {
    Query: {
        product: async (_, { id }) => {
            const products = await productRepository.read();
            return products.find((product) => product.id === id);
        },

        products: async (_, args) => {
            const { skip = 0, take = 10, sort, filter } = args.options || {};

            /**
             * @type {Array.<*>}
             */
            const products = await productRepository.read();

            if (sort) {
                products.sort((productA, productB) => {
                    if (
                        !["name", "price", "quantity", "disabled"].includes(
                            sort.sorter
                        )
                    ) {
                        throw new Error(`Cannot sort by field ${sort.sorter}`);
                    }

                    const fieldA = productA[sort.sorter];
                    const fieldB = productB[sort.sorter];

                    if (typeof fieldA === "string") {
                        if (sort.sortment === ListSortmentEnum.ASC) {
                            return fieldA.localeCompare(fieldB);
                        } else {
                            return fieldB.localeCompare(fieldA);
                        }
                    }

                    if (sort.sortment === ListSortmentEnum.ASC) {
                        return Number(fieldA) - Number(fieldB);
                    } else {
                        return Number(fieldB) - Number(fieldA);
                    }
                });
            }

            const filteredProducts = products.filter((product) => {
                if (!filter || Object.keys(filter).length === 0) {
                    return true;
                }

                return Object.entries(filter).every(([field, value]) => {
                    if (
                        product[field] === null ||
                        product[field] === undefined
                    ) {
                        return false;
                    }

                    if (typeof value === "string") {
                        if (value.startsWith("%") && value.endsWith("%")) {
                            return product[field].includes(
                                value.substr(1, value.length - 2)
                            );
                        }

                        if (value.startsWith("%")) {
                            return product[field].endsWith(value.substr(1));
                        }

                        if (value.endsWith("%")) {
                            return product[field].startsWith(
                                value.substr(0, value.length - 1)
                            );
                        }

                        return product[field] === value;
                    }
                    return product[field] === value;
                });
            });

            return {
                items: filteredProducts.slice(skip, skip + take),
                totalItems: filteredProducts.length,
            };
        },
    },

    Mutation: {
        createProduct: async (_, { input }) => {
            const products = await productRepository.read();

            const product = {
                id: uuid.v4(),
                name: input.name,
                price: input.price,
                quantity: input.quantity,
                disabled: false,
            };

            await productRepository.write([...products, product]);

            return product;
        },

        updateProduct: async (_, { input }) => {
            const products = await productRepository.read();

            const currentProduct = products.find(
                (product) => product.id === input.id
            );

            if (!currentProduct) {
                throw new Error(`No product with this id "${input.id}"`);
            }

            const updatedProduct = {
                ...currentProduct,
                name: input.name,
                price: input.price,
                quantity: input.quantity,
            };

            const updatedProducts = products.map((product) => {
                if (product.id === updatedProduct.id) {
                    return updatedProduct;
                } else {
                    return product;
                }
            });

            await productRepository.write(updatedProducts);

            return updatedProduct;
        },

        deleteProduct: async (_, { id }) => {
            const products = await productRepository.read();

            const product = products.find((product) => product.id === id);

            if (!product) {
                throw new Error(`No product with this id "${input.id}"`);
            }

            const updatedProducts = products.filter(
                (product) => product.id !== id
            );

            await productRepository.write(updatedProducts);

            return product;
        },

        enableProduct: async (_, { id }) => {
            const products = await productRepository.read();

            const currentProduct = products.find(
                (product) => product.id === id
            );

            if (!currentProduct) {
                throw new Error(`No product with this id "${id}"`);
            }

            if (!currentProduct.disabled) {
                throw new Error(`Product "${id}" is already enabled.`);
            }

            const updatedProduct = {
                ...currentProduct,
                disabled: false,
            };

            const updatedProducts = products.map((product) => {
                if (product.id === updatedProduct.id) {
                    return updatedProduct;
                } else {
                    return product;
                }
            });

            await productRepository.write(updatedProducts);

            return updatedProduct;
        },

        disableProduct: async (_, { id }) => {
            const products = await productRepository.read();

            const currentProduct = products.find(
                (product) => product.id === id
            );

            if (!currentProduct) {
                throw new Error(`No product with this id "${id}"`);
            }

            if (currentProduct.disabled) {
                throw new Error(`Product "${id}" is already disabled.`);
            }

            const updatedProduct = {
                ...currentProduct,
                disabled: true,
            };

            const updatedProducts = products.map((product) => {
                if (product.id === updatedProduct.id) {
                    return updatedProduct;
                } else {
                    return product;
                }
            });

            await productRepository.write(updatedProducts);

            return updatedProduct;
        },
    },
};
