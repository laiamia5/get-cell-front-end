import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { verificarToken } from "../tools/peticiones";
import { generarToken } from "../redux/actions";
import { useNavigate } from "react-router";
import ProfileTable from './sections/ProfileTable'
import '../../src/styles/profile.css'
import salir from '../../src/tools/imgs/sal.svg'
import { asegurarAdmin } from "../tools/peticiones";
import ProfileTableAdmin from './sections/ProfileTableAdmin'

export default function Profile (){
    const token = useSelector(state => state.token)
    const [usuario, setUsuario] = useState({})
	const [admin, setAdmin] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        verificarToken(token).then((res) => {
            if(res == null) setUsuario({access: false})
            else{ 
				setUsuario(res)//el obj con toda la info del usuario lo pongo en un estado
				asegurarAdmin(res.id)
				.then((response) => {
					setAdmin(response)
					console.log(response)
				})
				.catch((err) => console.log(err))
			}
        })
    }, [token])

    const cerrarSesion = () => {
        sessionStorage.removeItem("usuario");
        dispatch(generarToken(''))
        navigate('/inicio-sesion')
    }

	if(usuario.access == false) return <div>acceso no autorizado</div>
	else{
    return(
	<div>
        <div style={{marginTop: '80px', display: 'grid', gridTemplateColumns: '35% 1fr'}} >       
			<div id="user">
				<img id="avatar" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'"/>
				<i class="fa fa-gear"></i>
				<div id="main">
					<h3>{usuario?.nombre} {usuario?.apellido}</h3>
					<p> {usuario?.email}</p>
				</div>
				<div id="level">
					{admin === true? <p>administrador</p> : <p> cliente </p>}
				</div>
				<div id="information">
					<p id="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
					</p>
					<div id="actions">
						<button  onClick={() => cerrarSesion()}><img src={salir} style={{filter: 'invert(0.99999999999999999999)  hue-rotate(20deg) saturate(1000%)', width: '20px'}}/> Salir</button>
					</div>
				</div>
			</div>

			<div class="app-header-navigation justify-center justify-items-center grid" style={{width: '100%'}}>
				<div class="tabs">
					<a >
						mis datos
					</a>
					<a  class="active">
						compras
					</a>
					<a >
						reparaciones
					</a>
					<a >
						favoritos
					</a>
					<a >
						ajustes
					</a>
				</div>
        	{/* <ProfileTable/> */}
				<ProfileTableAdmin/>
			</div>
        </div>
	</div>
    )}
}