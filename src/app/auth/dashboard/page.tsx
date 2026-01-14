import DashboardCard from "../../components/Dashboard/DashboardCard";
import DashboardGrid from "./DashboardGrid";


export default function dashboardPage(){
    return(
        <main>
            <div className="grid w-screen mt-3 justify-center">
                <div className="flex items-center">
                    <img src="logo_taller.png" alt="" className="w-18 mr-3"/>
                    <h1 className="font-semibold text-2xl">Taller Rodriguez</h1>
                </div>
            </div>
        <div className="grid h-screen items-center justify-center">
            <DashboardGrid/>
        </div>
        </main>
    )
}