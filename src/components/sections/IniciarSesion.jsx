import React, { useEffect } from "react";
import { iniciarSesionCon } from "../../tools/peticiones";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import { generarToken } from "../../redux/actions";
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import Icon from '../sections/IconUser'
import IconUSer from "../sections/IconUser";
import svgg from '../../tools/4.svg'

export default function IniciarSesion (){
    const dispatch = useDispatch()
    const [loguearUsuario, setLoguear] = useState({})
    const [response, setResponse] = useState({})
    const navigate = useNavigate()

    const setear = (name, value) => {
        loguearUsuario[`${name}`] = value
        console.log(loguearUsuario)
    }

    useEffect(() => {
      Object.keys(response).length !== 0  && navigate('/perfil')
    }, [response])
    return(
      <div style={{display: 'flex', justifyContent: 'center' }} className="fondo">
        <div className="align-items-center justify-content-center">
            <div className=" py-5">
              <div className="subhead">Cuentas</div>
              <h2 className="title-section">Iniciar sesión</h2>
              <div className="divider"></div>
              
              <form action="#">
                <div className="py-2">
                  <input type="text" className="form-control input-inicio-sesion"  placeholder="Email" name='email'  onChange={(e) => setear(e.target.name, e.target.value)}/>
                </div>
                <div className="py-2">
                  <input className="form-control" type='password' placeholder="🔒︎ Contraseña"  name='contraseña' onChange={(e) => setear(e.target.name, e.target.value)}/>
                </div>
                <button onClick={() => 
                loguearUsuario.email && loguearUsuario.contraseña
                ?  iniciarSesionCon(loguearUsuario).then((res) => {
                  if(typeof res === 'object'){
                    dispatch(generarToken(res.token))
                    setResponse(res)
                  }else{
                    alert('usuario o contraseña incorrecto')
                  }
                  })
                : alert('debe ingresar usuario y contraseña')
                }
                className="btn mt-4 boton_carrito"
                style={{ width: '80%', marginRight:'10%', marginLeft: '10%' }}
                type='button'>
                iniciar    
                </button>
              </form>
            </div>

            <p>aun no tienes una cuenta? <Link to='/registro'> Registrate !</Link></p>
        </div>
        </div>
    )
}
