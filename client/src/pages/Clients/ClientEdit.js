import React, { useState, useMemo, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import * as S from "./styled";

const CLIENT = gql`
    query CLIENT($clientId: ID!) {
        client(id: $clientId) {
            id
            name
            email
            address
        }
    }
`;

const UPDATE_CLIENT = gql`
    mutation UPDATE_CLIENT(
        $id: ID!
        $name: String!
        $email: String!
        $address: String!
    ) {
        updateClient(
            input: { id: $id, name: $name, email: $email, address: $address }
        ) {
            id
            name
            email
            address
        }
    }
`;

export function ClientEdit({ clientId }) {
    const { data } = useQuery(CLIENT, {
        variables: {
            clientId,
        },
        skip: !clientId,
        fetchPolicy: "cache-first",
    });

    const [updateClient] = useMutation(UPDATE_CLIENT);

    const initialValues = useMemo(
        () => ({
            name: data?.client.name ?? "",
            email: data?.client.email ?? "",
            address: data?.client.address ?? "",
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

    const handleEmailChange = (event) => {
        event.persist();

        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handleAddressChange = (event) => {
        event.persist();

        setValues((values) => ({
            ...values,
            address: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        updateClient({
            variables: {
                id: clientId,
                name: values.name,
                email: values.email,
                address: values.address,
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
                    value={values.email}
                    onChange={handleEmailChange}
                />
            </S.Fieldset>
            <S.Fieldset>
                <S.Input
                    type="text"
                    value={values.address}
                    onChange={handleAddressChange}
                />
            </S.Fieldset>
            <S.Button type="submit">Save</S.Button>
        </S.Form>
    );
}
