"use client";

import Filtro from "../../components/Filtro/Filtro";
import Busqueda from "../../components/Busqueda/Busqueda";

interface Props {
  textoBusqueda: string;
  setTextoBusqueda: (value: string) => void;
  filtro: string;
  setFiltro: (value: string) => void;
}

export default function ClientesHeader({
  textoBusqueda,
  setTextoBusqueda,
  filtro,
  setFiltro,
}: Props) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>

      <div className="flex items-center gap-4">
        <Busqueda
          value={textoBusqueda}
          onChange={setTextoBusqueda}
        />

        <Filtro
          opciones={["Todos", "Activos", "Inactivos"]}
          value={filtro}
          onChange={setFiltro}
        />
      </div>
    </div>
  );
}
