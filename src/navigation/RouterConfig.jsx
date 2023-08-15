import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeTab } from "../pages/tabs/HomeTab";
import { ComandaTab } from "../pages/tabs/ComandasTab";
import { PerfilTab } from "../pages/tabs/PerfilTab";
import { PedidoPage } from "../pages/PedidoPage";

export const RouterConfig = () => {
    return (
      <div className="App">
        <Routes>
          <Route index element={<HomeTab />} />
          <Route path="comandas" element={<ComandaTab />} />
          <Route path="perfil" element={<PerfilTab />} />
          <Route path="pedido" element={<PedidoPage />} />
          <Route path="*" element={<div>Rota não encontrada</div>} />
        </Routes>
      </div>
    );
  };