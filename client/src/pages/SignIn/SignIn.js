import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styled";

export default function SignIn() {
    const history = useHistory("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem("user", JSON.stringify([{ email, password }]));
        history.push("/home");
    };

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    return (
        <S.Container>
            <S.Form onSubmit={handleSubmit}>
                <p>Sign in</p>
                <S.Fieldset>
                    <S.Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </S.Fieldset>

                <S.Fieldset>
                    <S.Input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </S.Fieldset>

                <S.Button type="submit">Sign in</S.Button>
            </S.Form>
        </S.Container>
    );
}
