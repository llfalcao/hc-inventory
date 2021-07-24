import React from "react";
import * as S from "./styled";
import clientIcon from "../../assets/images/client.png";
import productIcon from "../../assets/images/product.png";

export default function Home() {
    return (
        <S.Main>
            <S.Header>
                <h1>Welcome back!</h1>
            </S.Header>

            <S.Section>
                <S.InventoryContainer>
                    <S.InventoryType to={"/clients"}>
                        <img src={clientIcon} alt="Client List" />
                        <p>Clients</p>
                    </S.InventoryType>

                    <S.InventoryType to={"/products"}>
                        <img src={productIcon} alt="Product List" />
                        <p>Products</p>
                    </S.InventoryType>
                </S.InventoryContainer>
            </S.Section>
        </S.Main>
    );
}
