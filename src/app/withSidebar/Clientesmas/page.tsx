import LoginForm from "./Clientesmas"

export default function LoginPage(){
    return(
        
        <main className="grid h-screen place-items-center bg-taller-fondo">
            <div className="py-12 px-11 w-90 rounded-2xl bg-gray-50 shadow-2xl border-0 border-gray-400 sm">
                <div className="flex flex-col place-items-center ">
                    <img src="/logo_taller.png" alt="" width={120} height={120} className="mb-5"/>
                    <h2 className="font-sans font-bold text-2xl mb-5">Agregar Cliente</h2>
                </div>
                <LoginForm/>
            </div>
        </main>
    )
}