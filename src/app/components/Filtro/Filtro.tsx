import { useState } from "react";

interface FiltroProps {
  opciones: string[];
  value: string;
  onChange: (opcion: string) => void;
}

export default function Filtro({ opciones, value, onChange }: FiltroProps) {
  const [abierto, setAbierto] = useState(false);

  const seleccionar = (opcion: string) => {
    setAbierto(false);
    onChange(opcion);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setAbierto(!abierto)}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow"
      >
        Filtrar por: {value}
        <span className="text-sm">▼</span>
      </button>

      {abierto && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-10">
          {opciones.map((opcion) => (
            <button
              key={opcion}
              onClick={() => seleccionar(opcion)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {opcion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
