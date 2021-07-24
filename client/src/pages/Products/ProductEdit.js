import React, { useState, useMemo, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import * as S from "./styled";

const PRODUCT = gql`
    query PRODUCT($productId: ID!) {
        product(id: $productId) {
            id
            name
            price
            quantity
        }
    }
`;

const UPDATE_PRODUCT = gql`
    mutation UPDATE_PRODUCT(
        $id: ID!
        $name: String!
        $price: Float!
        $quantity: Int!
    ) {
        updateProduct(
            input: { id: $id, name: $name, price: $price, quantity: $quantity }
        ) {
            id
            name
            price
            quantity
        }
    }
`;

export function ProductEdit({ productId }) {
    const { data } = useQuery(PRODUCT, {
        variables: {
            productId,
        },
        skip: !productId,
        fetchPolicy: "cache-first",
    });

    const [updateProduct] = useMutation(UPDATE_PRODUCT);

    const initialValues = useMemo(
        () => ({
            name: data?.product.name ?? "",
            price: data?.product.price ?? "",
            quantity: data?.product.quantity ?? "",
        }),
        [data]
    );

    const [values, setValues] = useState(initialValues);

    useEffect(() => setValues(initialValues), [initialValues]);

    const handleNameChange = (event) => {
        event.persist();

        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };

    const handlePriceChange = (event) => {
        event.persist();

        setValues((values) => ({
            ...values,
            price: event.target.value,
        }));
    };

    const handleQuantityChange = (event) => {
        event.persist();

        setValues((values) => ({
            ...values,
            quantity: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        updateProduct({
            variables: {
                id: productId,
                name: values.name,
                price: parseFloat(values.price),
                quantity: parseInt(values.quantity),
            },
        }).then(console.log());
    };

    return (
        <S.Form onSubmit={handleSubmit}>
            <p>Select an item to edit:</p>
            <S.Fieldset>
                <S.Input
                    type="text"
                    value={values.name}
                    onChange={handleNameChange}
                />
            </S.Fieldset>
            <S.Fieldset>
                <S.Input
                    type="text"
                    value={values.price}
                    onChange={handlePriceChange}
                />
            </S.Fieldset>
            <S.Fieldset>
                <S.Input
                    type="text"
                    value={values.quantity}
                    onChange={handleQuantityChange}
                />
            </S.Fieldset>
            <S.Button type="submit">Save</S.Button>
        </S.Form>
    );
}
