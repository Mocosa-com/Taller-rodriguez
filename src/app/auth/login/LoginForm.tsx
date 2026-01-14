"use client";

import { useState } from "react";
import { login } from "../../services/auth.service";


export default function LoginForm(){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e:React.FormEvent){
        e.preventDefault();

        try{
            await login(username, password);
            alert("Sesión iniciada con rotundo éxito");
        } catch {
            setError("Usuario o contraseña equivocados");
        }
    }

    return(
        <div>
            <div>
                <div className="mb-0.5">
                <label htmlFor="" className="text-sm font-bold">Nombre de usuario</label> <br />
                <input className="mt-1 w-full border-0 border-gray-300 text-gray-600 text-sm font-semibold border-1 pl-1 py-1 rounded" type="text" placeholder="Escriba su usuario" value={username} onChange={e => setUserName(e.target.value)}/>
                </div>
                <br />
                <div className="mb-1">
                <label htmlFor="" className="text-sm font-bold">Contraseña</label> <br />
                <input className="mt-1 w-full border-0  border-gray-300 text-sm font-semibold border-1 pl-1 py-1 rounded"  type="password" placeholder="Escriba su contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>

                {error && <p style={{color: "red"}}>{error}</p>}
                <br />
                <div className="flex justify-center">
                    <button type="submit" className="btn bg-red-600 w-full py-1 rounded text-white text-sm font-semibold hover:bg-red-700 hover:cursor-pointer shadow-red-400 shadow-md">Ingresar</button>
                </div>
            </div>
        </div>
    )

    
}