import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import Carrinho from "./Pages/Carrinho";
import Login from "./Pages/Login";
import Sobrenos from "./Pages/Sobrenos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/sobrenos" element={<Sobrenos />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
