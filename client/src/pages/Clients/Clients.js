import React, { useState } from "react";
import { ClientList } from "../../components/ClientList/ClientList";
import { ClientEdit } from "./ClientEdit";
import * as S from "./styled";

export default function Clients() {
    const [clientId, setClientId] = useState(null);

    return (
        <S.Main className="container">
            <S.Header>
                <h1>Clients</h1>
            </S.Header>
            <S.ClientContainer className="container client-container">
                <ClientList onSelectClient={setClientId} />
                <ClientEdit clientId={clientId} />
            </S.ClientContainer>
        </S.Main>
    );
}
