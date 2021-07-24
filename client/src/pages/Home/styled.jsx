import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
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

export const Section = styled.section`
    display: flex;
    width: 100%;
    height: 80vh;
    justify-content: center;
    align-items: center;
`;

export const InventoryContainer = styled.section`
    display: flex;
    gap: 5rem;
`;

export const InventoryType = styled(Link)`
    display: inline-block;
    width: 25rem;
    height: auto;
    border: 1px solid gray;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 0.3rem;
    background: #0a0e1b;
    color: inherit;
    text-decoration: inherit;

    & img {
        width: 100%;
        height: auto;
        padding: 5rem;
    }

    & p {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.1);
    }
`;
