import Link from "next/link";

type itemProps = {
    nombre: string;
    imagen: string;
    ruta: string;
    activo: boolean;
}

export default function SideBarItem({nombre, imagen, ruta, activo}: itemProps) {
    return(
        <Link href={ruta}>
        <div className={activo ? "flex w-45 max-xl:w-15 max-xl:rounded-full items-center mt-3 item-hover item tracking-wide item-activo" : "flex w-45 max-xl:w-15 max-xl:rounded-full items-center mt-3 item-hover item hover:cursor-pointer tracking-wide"}>
            <img src={imagen} alt={nombre} width={30} className="mr-3 max-xl:pl-0.5"/>
            <p className="comic-neue-regular text-sm max-xl:hidden">{nombre}</p>
        </div>
        </Link>
    )
}