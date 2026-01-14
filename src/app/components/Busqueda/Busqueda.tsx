interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function Busqueda({ value, onChange }: Props) {
  return (
    <div className="relative flex-1">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar algo"
        className="w-full pl-4 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-red-500"
      />
    </div>
  );
}
