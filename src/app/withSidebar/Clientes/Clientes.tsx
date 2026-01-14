"use client";

import { useState } from "react";
import ClientesHeader from "./ClientesHeader";
//import ClientesList from "./ClientesList";//

export default function Clientes() {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [filtro, setFiltro] = useState("Todos");

return (
  <div className="p-6">
    <ClientesHeader
      textoBusqueda={textoBusqueda}
      setTextoBusqueda={setTextoBusqueda}
      filtro={filtro}
      setFiltro={setFiltro}
    />

    {/* 
    <ClientesList
      textoBusqueda={textoBusqueda}
      filtro={filtro}
    />
    */}
  </div>
);
}
