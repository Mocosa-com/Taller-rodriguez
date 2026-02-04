"use client";

import { useState } from "react";
import Table from "../../components/Tabla/Table";
import BotonRojo from "../../components/BotonRojo/BotonRojo";
import Modal from "../../withSidebar/Clientesmas/Modal";
import Empleadosheader from "../../withSidebar/Empleados/Empleadosheader";
import EmpleadosMas from "../../withSidebar/Empleadosmas/Empleadosmas"; 


type Empleado = {
  id: number;
  nombre: string;
  telefono: string;
  correo: string;
};



export default function Empleados() {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [filtro, setFiltro] = useState("Todos");
  const [modalOpen, setModalOpen] = useState(false);

  const columns = [
  { header: "ID", accessor: "id" },
  { header: "Nombre", accessor: "nombre" },
  { header: "Teléfono", accessor: "telefono" },
  { header: "Correo", accessor: "correo" },
] as const;


 
  const data: Empleado[] = [
    { id: 1, nombre: "Juan Pérez", telefono: "7890-1234", correo: "juan@gmail.com" },
    { id: 2, nombre: "Ana López", telefono: "7012-5678", correo: "ana@gmail.com" },
  ];

  return (
    <div className="flex flex-col w-full p-6">

      < Empleadosheader
        textoBusqueda={textoBusqueda}
        setTextoBusqueda={setTextoBusqueda}
        filtro={filtro}
        setFiltro={setFiltro}
      />

      {/* TABLA */}
      <div className="mt-6 bg-white rounded-xl p-4">
        <Table<Empleadosheader> columns={columns} data={data} />
      </div>

      {/* Botón fijo centrado abajo */}
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
  <BotonRojo
    texto="Agregar Empleado"
    className="px-6 py-3 text-lg font-semibold rounded-xl shadow-2xl"
    onClick={() => setModalOpen(true)}
  />
</div>


      {/* MODAL */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <EmpleadosMas />
      </Modal>

    </div>
  );
}
