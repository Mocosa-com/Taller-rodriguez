type BotonRojoProps = {
  texto: string;
  className?: string;
  onClick?: () => void;
};

export default function BotonRojo({
  texto,
  className = "",
  onClick,
}: BotonRojoProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "bg-red-600 hover:bg-red-700 text-white font-semibold",
        "rounded-md shadow-md shadow-red-400 transition-colors",
        className,
      ].join(" ")}
    >
      {texto}
    </button>
  );
}
