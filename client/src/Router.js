import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Clients from "./pages/Clients/Clients";
import Products from "./pages/Products/Products";

export default function Router() {
    return (
        <Switch>
            <Route exact path={["", "/"]} component={SignIn} />
            <Route exact path={["", "/home"]} component={Home} />
            <Route exact path={["", "/clients"]} component={Clients} />
            <Route exact path={["", "/products"]} component={Products} />
        </Switch>
    );
}
