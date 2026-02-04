"use client";

import { useState } from "react";
import Table from "../../components/Tabla/Table";
import BotonRojo from "../../components/BotonRojo/BotonRojo";
import Modal from "../Clientesmas/Modal";
import VehiculosTallerHeader from "../VehiculosTaller/VehiculosTallerHeader";
{/*import VehiculosMas from "./VehiculosMas";*/}

/* Tipo según lo que debe mostrar la tabla */
type Vehiculo = {
  id: number;
  placa: string;
  clienteModelo: string;
  estado: string;
  ingreso: string;
  acciones: string;
};

export default function VehiculosTaller() {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [filtro, setFiltro] = useState("Todos");
  const [modalOpen, setModalOpen] = useState(false);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Placa", accessor: "placa" },
    { header: "Cliente / Modelo", accessor: "clienteModelo" },
    { header: "Estado", accessor: "estado" },
    { header: "Ingreso", accessor: "ingreso" },
    { header: "Acciones", accessor: "acciones" },
  ] as const;

  const data: Vehiculo[] = [
    {
      id: 1,
      placa: "P123-456",
      clienteModelo: "Juan Pérez · Toyota Corolla",
      estado: "En reparación",
      ingreso: "01/02/2026",
      acciones: "Ver",
    },
    {
      id: 2,
      placa: "M789-321",
      clienteModelo: "Ana López · Honda Civic",
      estado: "Listo",
      ingreso: "30/01/2026",
      acciones: "Ver",
    },
  ];

  return (
    <div className="flex flex-col w-full p-6">

      {/* HEADER */}
      <VehiculosTallerHeader
        textoBusqueda={textoBusqueda}
        setTextoBusqueda={setTextoBusqueda}
        filtro={filtro}
        setFiltro={setFiltro}
      />

      {/* TABLA */}
      <div className="mt-6 bg-white rounded-xl p-4 shadow">
        <Table<Vehiculo> columns={columns} data={data} />
      </div>

      {/* BOTÓN AGREGAR */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <BotonRojo
          texto="Agregar Vehículo"
          className="px-6 py-3 text-lg font-semibold rounded-xl shadow-2xl"
          onClick={() => setModalOpen(true)}
        />
      </div>

      {/* MODAL */}
      {/* <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      
        <VehiculosMas />
      </Modal>*/}

    </div>
  );
}
