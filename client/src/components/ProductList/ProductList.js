import React from "react";
import { gql, useQuery } from "@apollo/client";
import * as S from "./styled";

const GET_PRODUCT_LIST = gql`
    query GET_PRODUCT_LIST($skip: Int!, $take: Int!) {
        products(options: { skip: $skip, take: $take }) {
            items {
                id
                name
                price
                quantity
            }

            totalItems
        }
    }
`;

const PAGE_SIZE = 10;

export function ProductList({ onSelectProduct }) {
    const { data, error, loading, fetchMore } = useQuery(GET_PRODUCT_LIST, {
        fetchPolicy: "cache-and-network",
        variables: {
            skip: 0,
            take: PAGE_SIZE,
        },
    });

    const products = data?.products.items ?? [];

    const handleSelectProduct = (product) => () => {
        onSelectProduct?.(product.id);
    };

    const handleLoadMore = () => {
        fetchMore({
            variables: {
                skip: data.products.items.length,
                take: PAGE_SIZE,
            },

            updateQuery: (result, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return result;
                }

                return {
                    ...result,
                    products: {
                        ...result.products,
                        items: result.products.items.concat(
                            fetchMoreResult.products.items
                        ),
                        totalItems: fetchMoreResult.products.totalItems,
                    },
                };
            },
        });
    };

    if (error) {
        return (
            <S.Section>
                <strong>Error while retrieving products</strong>
            </S.Section>
        );
    }

    if (loading && !data) {
        return (
            <S.Section>
                <p>Loading...</p>
            </S.Section>
        );
    }

    return (
        <S.Section>
            <S.List>
                {products.map((product) => (
                    <S.ListItem
                        key={product.id}
                        onClick={handleSelectProduct(product)}
                    >
                        <p>{product.name}</p>
                        <p>Price: ${product.price}</p>
                        <p>Stock: {product.quantity} units</p>
                    </S.ListItem>
                ))}
            </S.List>
            <S.Button type="button" disabled={loading} onClick={handleLoadMore}>
                Load more
            </S.Button>
        </S.Section>
    );
}
