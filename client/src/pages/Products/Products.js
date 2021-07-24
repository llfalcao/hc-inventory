import React, { useState } from "react";
import { ProductList } from "../../components/ProductList/ProductList";
import { ProductEdit } from "./ProductEdit";
import * as S from "./styled";

export default function Home() {
    const [productId, setProductId] = useState(null);

    return (
        <S.Main className="container">
            <S.Header>
                <h1>Products</h1>
            </S.Header>
            <S.ProductContainer>
                <ProductList onSelectProduct={setProductId} />
                <ProductEdit productId={productId} />
            </S.ProductContainer>
        </S.Main>
    );
}
