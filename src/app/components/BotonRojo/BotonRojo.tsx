
type BotonRojoProps = {
  texto: string;
  className?: string; // ← permitir overrides desde fuera
  // onClick?: () => void; // ← cuando lo necesites
};

export default function BotonRojo({ texto, className = "" }: BotonRojoProps) {
  return (
    <button
      className={[
        // Estilos base:
        "bg-red-600 hover:bg-red-700 text-white font-semibold",
        "rounded-md shadow-md shadow-red-400",
        "transition-colors",
        // Tamaño base pequeño (puedes ajustar):
        "px-3 py-1.5 text-xs",
        // Sin forzar ancho/alto:
        "w-auto h-auto",
        className, // ← permite personalizar desde el uso
      ].join(" ")}
    >
      {texto}
    </button>
  );
}
