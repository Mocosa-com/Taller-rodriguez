"use client";

import DashboardCard from "../../components/Dashboard/DashboardCard";

export default function DashboardGrid(){
    return(
        <div className="grid grid-cols-4 gap-14 max-sm:flex max-sm:flex-col max-md:grid max-md:grid-cols-3">
        <DashboardCard nombre="Caja" imagen="caja-registradora.png" ruta=""/>
        <DashboardCard nombre="Clientes" imagen="cliente.png" ruta="/Clientes"/>
        <DashboardCard nombre="Empleados" imagen="equipo.png" ruta=""/>
        <DashboardCard nombre="Ofertas" imagen="etiqueta.png" ruta=""/>
        <DashboardCard nombre="Inventario" imagen="inventario.png" ruta=""/>
        <DashboardCard nombre="Facturación" imagen="factura_1.png" ruta=""/>
        <DashboardCard nombre="Vehiculos" imagen="carro.png" ruta=""/>
        <DashboardCard nombre="Reportes" imagen="analitica.png" ruta=""/>
        <DashboardCard nombre="Proveedores" imagen="proveedor.png" ruta=""/>
        <DashboardCard nombre="Usuario" imagen="usuario_1.png" ruta=""/>
        </div>
    )
}