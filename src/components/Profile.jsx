import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { verificarToken } from "../tools/peticiones";
import { generarToken } from "../redux/actions";
import { useNavigate } from "react-router";

export default function Profile (){
    const token = useSelector(state => state.token)
    const [usuario, setUsuario] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        verificarToken(token).then((res) => {
            if(res == null) setUsuario({access: false})
            else setUsuario(res)
        })
    }, [])

    const cerrarSesion = () => {
        sessionStorage.removeItem("usuario");
        dispatch(generarToken(''))
        navigate('/inicio-sesion')
    }

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
        <button onClick={() => cerrarSesion()}>cerrar sesion</button>
        </div>
    )
}