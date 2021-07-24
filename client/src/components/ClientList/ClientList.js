import React from "react";
import { gql, useQuery } from "@apollo/client";
import * as S from "./styled";

const GET_CLIENT_LIST = gql`
    query GET_CLIENT_LIST($skip: Int!, $take: Int!) {
        clients(options: { skip: $skip, take: $take }) {
            items {
                id
                name
                email
                address
            }

            totalItems
        }
    }
`;

const PAGE_SIZE = 10;

export function ClientList({ onSelectClient }) {
    const { data, error, loading, fetchMore } = useQuery(GET_CLIENT_LIST, {
        fetchPolicy: "cache-and-network",
        variables: {
            skip: 0,
            take: PAGE_SIZE,
        },
    });

    const clients = data?.clients.items ?? [];

    const handleSelectClient = (client) => () => {
        onSelectClient?.(client.id);
    };

    const handleLoadMore = () => {
        fetchMore({
            variables: {
                skip: data.clients.items.length,
                take: PAGE_SIZE,
            },

            updateQuery: (result, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return result;
                }

                return {
                    ...result,
                    clients: {
                        ...result.clients,
                        items: result.clients.items.concat(
                            fetchMoreResult.clients.items
                        ),
                        totalItems: fetchMoreResult.clients.totalItems,
                    },
                };
            },
        });
    };

    if (error) {
        return (
            <S.Section>
                <strong>Error while retrieving clients</strong>
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
                {clients.map((client) => (
                    <S.ListItem
                        key={client.id}
                        onClick={handleSelectClient(client)}
                    >
                        <p>{client.name}</p>
                        <p>{client.email}</p>
                        <p>{client.address}</p>
                    </S.ListItem>
                ))}
            </S.List>
            <S.Button type="button" disabled={loading} onClick={handleLoadMore}>
                Load more
            </S.Button>
        </S.Section>
    );
}
