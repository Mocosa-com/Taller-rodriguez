"use client";

import { useState } from "react";

export default function LoginForm() {
  const [username, setUserName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [dui, setDui] = useState("");

  return (
    <div className="grid grid-cols-3 gap-4">
      
      {/* Nombre */}
      <div className="col-span-2">
        <label className="text-sm font-bold">Nombre de Cliente</label>
        <input
          className="mt-1 w-full border border-gray-300 text-sm font-semibold pl-2 py-1 rounded"
          type="text"
          placeholder="Escriba el nombre"
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
      </div>

      {/* Teléfono */}
      <div className="col-span-1">
        <label className="text-sm font-bold">Teléfono</label>
        <input
          className="mt-1 w-full border border-gray-300 text-sm font-semibold pl-2 py-1 rounded"
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
        />
      </div>

      {/* Dirección*/}
      <div className="col-span-2">
        <label className="text-sm font-bold">Dirección</label>
        <input
          className="mt-1 w-full border border-gray-300 text-sm font-semibold pl-2 py-1 rounded"
          type="text"
          placeholder="Dirección"
        />
      </div>

      {/* DUI */}
      <div className="col-span-1">
        <label className="text-sm font-bold">DUI</label>
        <input
          className="mt-1 w-full border border-gray-300 text-sm font-semibold pl-2 py-1 rounded"
          type="text"
          placeholder="DUI"
          value={dui}
          onChange={e => setDui(e.target.value)}
        />
      </div>

      {/* Correo*/}
      <div className="col-span-3">
        <label className="text-sm font-bold">Correo electrónico</label>
        <input
          className="mt-1 w-full border border-gray-300 text-sm font-semibold pl-2 py-1 rounded"
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
        />
      </div>


<div className="col-span-3">
        <button className="bg-red-600 w-full py-2 rounded text-white text-sm font-semibold hover:bg-red-700 shadow-md">
          Agregar tarjeta de circulacion
        </button>
      </div>
      {/* Botón */}
      <div className="col-span-3">
        <button className="bg-red-600 w-full py-2 rounded text-white text-sm font-semibold hover:bg-red-700 shadow-md">
          Agregar cliente
        </button>
      </div>

    </div>
  );
}
