"use client";

import { useState } from "react";

export default function LoginForm() {
  const [username, setUserName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [dui, setDui] = useState("");




  return (
    
    <div className="grid grid-cols-3 gap-4">

        <div className="col-span-3">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 tracking-wide">
         Agregar empleado
             </h2>
             </div>
      
      {/* Nombre */}
      <div className="col-span-2">
        <label className="text-sm font-bold">Nombre del Empleado </label>
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

      {/* fecha de contratacion */}
      <div className="col-span-2">
        <label className="text-sm font-bold">Fecha de Contratación</label>
        <input
          className="mt-1 w-full border border-gray-300 text-sm font-semibold pl-2 py-1 rounded"
          type="date"
          placeholder="Fecha de Contratación"
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

      {/* Sueldo base*/}
      <div className="col-span-2">
        <label className="text-sm font-bold">Sueldo Base</label>
        <input
          className="mt-1 w-full border border-gray-300 text-sm font-semibold pl-2 py-1 rounded"
          type="number"
          placeholder="Sueldo Base"
        />
      </div>

      {/* Porcentaje de ganancia*/}
      <div className="col-span-1">
        <label className="text-sm font-bold">Porcentaje de Ganancia</label>
        <input
          className="mt-1 w-full border border-gray-300 text-sm font-semibold pl-2 py-1 rounded"
          type="number"
          placeholder="Porcentaje de Ganancia"
        />
      </div>

<div className="col-span-3 flex items-center gap-2">
  <input
    type="checkbox"
    id="licencia"
    className="h-4 w-4 accent-red-600 cursor-pointer"
  />
  <label
    htmlFor="licencia"
    className="text-sm font-semibold text-gray-700 cursor-pointer"
  >
    Licencia
  </label>
</div>




      {/* Botón */}
      <div className="col-span-3">
        <button className="bg-red-600 w-full py-2 rounded text-white text-sm font-semibold hover:bg-red-700 shadow-md">
          Agregar Empleado
        </button>
      </div>

    </div>
  );
}
