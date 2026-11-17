import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AgencyLanding from "./AgencyLanding";
import "./index.css";

const isHome = window.location.pathname === "/";

// Preserva a página comercial do ERP em /erp e as rotas legadas.
if (window.location.pathname === "/erp") {
  document.title = "Santya ERP | Plataforma de Gestão Empresarial";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Conheça o Santya ERP: CRM, contratos, clientes, financeiro e automações para gestão empresarial."
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {isHome ? <AgencyLanding /> : <App />}
  </React.StrictMode>
);
