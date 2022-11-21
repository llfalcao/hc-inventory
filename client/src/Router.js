import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Clients from "./pages/Clients/Clients";
import Products from "./pages/Products/Products";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/">
        <Route index element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route path="clients" element={<Clients />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
