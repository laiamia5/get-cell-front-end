import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { verificarToken } from "../tools/peticiones";

export default function Profile (){
    const token = useSelector(state => state.token)
    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        verificarToken(token).then((res) => {
            if(res == null) setUsuario({access: false})
            else setUsuario(res)
        })
    }, [])

    return(
        <div style={{marginLeft: '5%'}}> 
        <h1>Perfil ! </h1>
            { usuario.access == false
            ? <div>acceso no autorizado</div>
            : <div>  nombre : {usuario?.nombre} <br />
                    email : {usuario?.email} <br />
                    dni : {usuario?.dni} <br />
            </div>
            
            }
      
        </div>
    )
}