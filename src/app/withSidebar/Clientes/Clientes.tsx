"use client";

import { useState } from "react";
import ClientesHeader from "./ClientesHeader";
import Table from "../../components/Tabla/Table";
import BotonRojo from "../../components/BotonRojo/BotonRojo";
import Modal from "../../withSidebar/Clientesmas/Modal";
import ClientesMas from "../../withSidebar/Clientesmas/Clientesmas";

export default function Clientes() {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [filtro, setFiltro] = useState("Todos");
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div className="flex flex-col w-full p-6">

      <ClientesHeader
        textoBusqueda={textoBusqueda}
        setTextoBusqueda={setTextoBusqueda}
        filtro={filtro}
        setFiltro={setFiltro}
      />

      
      {/* Botón fijo */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-4 py-3">
        <div className="max-w-screen-xl mx-auto">
          <BotonRojo
            texto="Agregar cliente"
            className="px-2 py-1 text-xs rounded"
            onClick={() => setModalOpen(true)}
          />
        </div>
      </div>

      {/* MODAL */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ClientesMas />
      </Modal>

    </div>
  );
}
