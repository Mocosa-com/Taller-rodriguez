type DashboardCardProps = {
    nombre: string;
    imagen: string;
    ruta: string;
}

export default function DashboardCard ({nombre, imagen, ruta}: DashboardCardProps) {
    return(
        <a href={ruta} className="p-4 shadow-2xl bg-white w-45 rounded-2xl flex flex-col items-center justify-center hover:bg-gray-100 hover:shadow-red-200 hover:font-bold">
        <div className="flex flex-col items-center justify-center">
            <img src={imagen} alt={nombre} width={100} />
            <h1 className="font-semibold text-lg leading-9 tracking-wider">{nombre}</h1>
        </div>
    </a>
    )
}