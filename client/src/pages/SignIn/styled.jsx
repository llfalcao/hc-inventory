import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: block;
    background: #19191a;
    padding: 3rem;
    border-radius: 0.5rem;

    & p {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem 0;
    }
`;

export const Fieldset = styled.fieldset`
    border: none;
    margin: 0.5rem 0;
`;

export const Input = styled.input`
    width: 20rem;
    border: 1px solid #82a9c9;
    border-right: transparent;
    height: 2.5rem;
    margin: 0 0 0.25rem 0;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    width: 100%;
    margin: 1rem auto;
    padding: 0.5rem 2rem;
    background: #0f377c;
    color: #eee;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
