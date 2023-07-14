import React from "react";
import { iniciarSesionCon } from "../../tools/peticiones";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import { generarToken } from "../../redux/actions";
import {useDispatch} from 'react-redux'

export default function IniciarSesion (){
    const dispatch = useDispatch()
    const [loguearUsuario, setLoguear] = useState({})
    const [response, setResponse] = useState({})
    const navigate = useNavigate()

    const setear = (name, value) => {
        loguearUsuario[`${name}`] = value
        console.log(loguearUsuario)
    }
    return(
        <>
        iniciar sesion 
        <input type="text" name='email' onChange={(e) => setear(e.target.name, e.target.value)} placeholder="email"/>
        <input type="text" name='contraseña' onChange={(e) => setear(e.target.name, e.target.value)} placeholder="contraseña"/>
        <button onClick={() => iniciarSesionCon(loguearUsuario).then((res) => {
            setResponse(res)
            dispatch(generarToken(res.token))
            })}>
            inciar sesion
        </button>


        {Object.keys(response).length !== 0  && navigate('/perfil')}
        </>
    )
}