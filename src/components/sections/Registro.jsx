import React from "react";
import { useState, useEffect } from "react";
import { crear_usuario } from "../../tools/peticiones";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Registro (){
    const [crearUsuario, setCrearUsuario] = useState({})
    const [respuesta, setRespuesta] = useState()
    const navigate = useNavigate()

    const setear = (name, value) => {
        crearUsuario[`${name}`] = value
        console.log(crearUsuario)
    }

    return (
        <div>
            <div style={{marginLeft: '5%'}}> 
            <h1>Registrarse!</h1>
            <label >nombre</label>  <input type="text" name='nombre' onChange={(e) => setear(e.target.name, e.target.value) }/> <br />
            <label >apellido:</label>  <input type="text" name='apellido' onChange={(e) => setear(e.target.name, e.target.value) }/> <br />
            <label >email</label> <input type="text" name='email' onChange={(e) => setear(e.target.name, e.target.value) }/> <br />
            <label >contraseña</label> <input type="text" name='contraseña' onChange={(e) => setear(e.target.name, e.target.value) }/> <br />
            <label >dni</label> <input type="number" name='dni' onChange={(e) => setear(e.target.name,Number(e.target.value) ) }/> <br />
            <button onClick={() => crear_usuario(crearUsuario).then((res) => setRespuesta(res))}>enviar</button>
            </div>

           {  typeof respuesta === 'object' 
           ? (<p>su perfil fue creado con exito,
           <Link to='/inicio-sesion'>click aqui para ingresar</Link>
            </p> )
            : <p></p>
            }

            <button onClick={() => navigate('/inicio-sesion')}>
                inciar sesion
            </button>
            
        </div>
        

    )
}