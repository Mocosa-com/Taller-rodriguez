"use client";

import { useState } from "react";
import ClientesHeader from "./ClientesHeader";
import Table from "../../components/Tabla/Table";
import BotonRojo from "../../components/BotonRojo/BotonRojo";

const clientesData = [
  { nombre: "Juan", edad: 30, rol: "Activo" },
  { nombre: "Ana", edad: 25, rol: "Inactivo" },
];

export default function Clientes() {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const clientesFiltrados = clientesData.filter((cliente) => {
    const coincideTexto = cliente.nombre
      .toLowerCase()
      .includes(textoBusqueda.toLowerCase());

    const coincideFiltro =
      filtro === "Todos" || cliente.rol === filtro;

    return coincideTexto && coincideFiltro;
  });

return (
  <div className="flex flex-col w-full p-6">
    <ClientesHeader
      textoBusqueda={textoBusqueda}
      setTextoBusqueda={setTextoBusqueda}
      filtro={filtro}
      setFiltro={setFiltro}
    />

    <Table
      columns={[
        { header: "Nombre", accessor: "nombre" },
        { header: "Edad", accessor: "edad" },
        { header: "Estado", accessor: "rol" },
      ]}
      data={clientesFiltrados}
    />




<div className="fixed inset-x-0 bottom-0 z-50 px-4 py-3">
  <div className="max-w-screen-xl mx-auto">
    <BotonRojo texto="Agregar cliente" className="px-2 py-1 text-xs rounded" />
  </div>
</div>




  </div>
);


}
