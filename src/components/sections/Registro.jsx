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
            <div style={{display: 'flex', justifyContent: 'center' }} className="fondo responsive-registro-contenedor">
                <div className="align-items-center justify-content-center">
                    <div className=" py-5">
                    <div className="subhead">Cuentas</div>
                    <h2 className="title-section">Registrarse</h2>
                    <div className="divider"></div>
                    
                    <form action="#">
                        <div className="py-2 " style={{display: 'grid', gridTemplateColumns: '49% 49%'}}>
                            <input type="text" className="form-control input-inicio-sesion"  placeholder="Nombre *" name='nombre' onChange={(e) => setear(e.target.name, e.target.value)}/>
                            <input type="text" className="form-control input-inicio-sesion ml-2"  placeholder="Apellido *" name='apellido' onChange={(e) => setear(e.target.name, e.target.value) }/>
                        </div>
                        <div className="py-2" style={{display: 'grid', gridTemplateColumns: '49% 49%'}}>
                            <input type="text" className="form-control" placeholder="Email *"  name='email' onChange={(e) => setear(e.target.name, e.target.value) }/>
                            <input type="text" className="form-control ml-2" placeholder="Dni"  name='dni' onChange={(e) => setear(e.target.name,Number(e.target.value) ) }/>
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" placeholder="Contraseña *"  name='contraseña' onChange={(e) => setear(e.target.name, e.target.value)}/>
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" placeholder="repita su contraseña *"  name='contraseña' />
                        </div>
                        <button 
                        className="btn mt-4 boton_carrito"
                        style={{ width: '80%', marginRight:'10%', marginLeft: '10%' }}
                        type='button'
                        onClick={() => crear_usuario(crearUsuario).then((res) => setRespuesta(res))}>
                        iniciar    
                        </button>
                    </form>
                    </div>

                    {  typeof respuesta === 'object' 
                        ? (<p>su perfil fue creado con exito,
                        <Link to='/inicio-sesion'> click aqui para ingresar</Link>
                            </p> )
                        : <p>Ya tienes una cuenta activa? <Link to='/inicio-sesion'> Iniciar sesión </Link></p>
                    }

                    
                </div>
            </div>
    )
}