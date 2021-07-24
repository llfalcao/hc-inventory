import styled from "styled-components";

export const Main = styled.main`
    display: block;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    background: rgba(10, 14, 27, 0.5);
    box-shadow: 0px 2px 5px #000;
    color: #d6d6d6;

    & h1 {
        font-weight: 600;
    }
`;

export const ClientContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 10rem;
    margin: 3rem auto;
`;

export const Form = styled.form`
    display: block;
    height: fit-content;
    background: #0a0e1b;
    padding: 3rem;
    border-radius: 0.5rem;

    & p {
        font-size: 1.2rem;
        font-weight: 700;
        padding-bottom: 1rem;
    }
`;

export const Fieldset = styled.fieldset`
    border: none;
`;

export const Input = styled.input`
    width: 20rem;
    border: 1px solid #3c434eed;
    height: 2.5rem;
    margin: 0.3rem 0;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    width: 100%;
    margin-top: 2rem;
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
