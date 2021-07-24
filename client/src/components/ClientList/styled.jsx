import styled from "styled-components";

export const Section = styled.div`
    width: 500px;
    max-width: 991px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: 0 0 0.5rem 0;
    background: #0a0e1b;
    color: #dadada;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    cursor: pointer;

    &:hover {
        background: #0a0f1bc7;
    }
`;

export const Button = styled.button`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    display: block;
    width: 6rem;
    padding: 0.5rem 0;
    margin: 2rem auto;
    background: #0a0e1b;
    color: #dadada;
    border-style: none;
    border-radius: 0.25rem;
    cursor: pointer;
`;
