import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { verificarToken } from "../tools/peticiones";
import { generarToken } from "../redux/actions";
import { useNavigate } from "react-router";
import ProfileTable from './sections/ProfileTable'
import '../../src/styles/profile.css'
import salir from '../../src/tools/sal.svg'

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
    }, [token])

    const cerrarSesion = () => {
        sessionStorage.removeItem("usuario");
        dispatch(generarToken(''))
        navigate('/inicio-sesion')
    }

    return(
		<div>
        <div style={{marginTop: '80px', display: 'grid', gridTemplateColumns: '35% 1fr'}} > 

			{ usuario.access == false
            ? <div>acceso no autorizado</div>
            :       
			<div id="user">
			<img id="avatar" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'"/>
				
				<i class="fa fa-gear"></i>
				
				<div id="main">
						<h3>{usuario?.nombre} {usuario?.apellido}</h3>
						<p> {usuario?.email}</p>
				</div>
				
				<div id="level">
					<p>Lvl. 42</p>
				</div>
				
				<div id="information">
					<p id="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
					</p>
					
					<div id="actions">
						<button  onClick={() => cerrarSesion()}><img src={salir} style={{filter: 'invert(0.99999999999999999999)  hue-rotate(20deg) saturate(1000%)', width: '20px'}}/> Salir</button>
						<button style={{color: '#788192'}}>
						<svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" class="svg-inline--fa fa-cart-shopping " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
						 compras</button>
					</div>
				</div>
			</div>
            }

			<div class="app-header-navigation justify-center justify-items-center grid" style={{width: '100%'}}>
				<div class="tabs">
					<a href="#">
						Overview
					</a>
					<a href="#" class="active">
						Payments
					</a>
					<a href="#">
						Cards
					</a>
					<a href="#">
						Account
					</a>
					<a href="#">
						System
					</a>
					<a href="#">
						Business
					</a>
				</div>

        <ProfileTable/>

			</div>

            
  
        </div>
	</div>
    )
}