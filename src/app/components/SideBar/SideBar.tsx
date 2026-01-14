"use client";

import SideBarItem from "./SideBarItem";
import { usePathname } from "next/navigation";
import { ChevronLast } from 'lucide-react';
import Link from "next/link";

export default function SideBar(){
    const rol = "admin"; // De uso temporal
    const rutaActual = usePathname(); //Ruta actual para comparar y colocar su actividad

    const items = [
        {
        nombre:"Vehiculos taller",
        imagen:"carro.png",
        ruta:"/vehiculos",
        roles: ["admin", "empleado"]
        },
        {
        nombre:"Caja",
        imagen:"caja-registradora.png",
        ruta:"/caja",
        roles: ["admin", "empleado"]
        },
        {
        nombre:"Clientes",
        imagen:"cliente.png",
        ruta:"/clientes",
        roles: ["admin", "empleado"]
        },
        {
        nombre:"Ofertas",
        imagen:"etiqueta.png",
        ruta:"/ofertas",
        roles: ["admin"]
        },
        {
        nombre:"Facturación",
        imagen:"factura_1.png",
        ruta:"/facturacion",
        roles: ["admin", "empleado"]
        },
        {
        nombre:"Inventario",
        imagen:"inventario.png",
        ruta:"/inventario",
        roles: ["admin"]
        },
        {
        nombre:"Proveedores",
        imagen:"proveedor.png",
        ruta:"/proveedores",
        roles: ["admin"]
        },
        {
        nombre:"Empleados",
        imagen:"equipo.png",
        ruta:"/empleados",
        roles: ["admin"]
        },
]

    return(
        <aside className="h-screen max-xl:w-10">
            <div className="h-full  w-50 flex flex-col ml-2 mt-2">
            <div className="ml-1 xl:hidden ">
                <img src="logo_taller.png" alt="" width={40} className="ml-1"/>
            </div>
                <div className="flex flex-col justify-center ml-6 max-xl:hidden">
                    <Link href="/dashboard">
                    <img src="logo_taller.png" alt="" width={100} className="ml-2"/>
                    </Link>
                    <h1 className="font-bold comic-neue-regular mt-2">Taller Rodriguez</h1>
                </div>

                <div className="mt-3">
                    {items
                    .filter(items => items.roles.includes(rol))
                    .map(items => 
                        <SideBarItem key={items.ruta} nombre={items.nombre} imagen={items.imagen} ruta={items.ruta} activo={usePathname() === items.ruta} />
                    )}
                </div>

                    <div className="item-usuario mb-3">
                        <SideBarItem nombre="Perfil" imagen="usuario_1.png" ruta="/usuario" activo={rutaActual === "/usuario"}/>
                    </div>
            </div>
        </aside>
    )
}