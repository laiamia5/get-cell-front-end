import React from "react";
import '../../styles/nav.css'
import '../../assets/css/maicons.css'
import '../../assets/css/theme.css'
import "../../assets/css/bootstrap.css"
import "../../assets/vendor/animate/animate.css"
import imagen from '../../tools/transparente.png'
import imagen2 from '../../tools/imagen.png'
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { agregar_al_carrito, eliminar_del_carrito, disminuir_cantidad } from "../../redux/actions";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card ({props}){
  const dispatch = useDispatch()
  const selector = useSelector(state => state.carrito)

  const showToastMessage = (status, mensaje) => {
    status == 'success'
    ? toast.success(mensaje, {
        position: toast.POSITION.TOP_RIGHT
    })
    : toast.error(mensaje, {
        position: toast.POSITION.TOP_RIGHT
    });
  }

  useEffect(() => {
    console.log(selector)
  }, [selector])

    return(
          <div class="col-md-6 col-lg-3 py-3 wow fadeInUp">
            <div class="card-blog">
              <Link to={`/detalle/${props.id}`} style={{textDecoration: 'none'}}>
                <img src={imagen2} style={{maxWidth: '200px'}} alt="" />
                <div class="body" style={{paddingTop: '10px'}}>
                  <div class="post-title"><a href="blog-single.html">{props.nombre}</a></div>
                  <div class="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
              </Link>
              <div style={{display: 'grid', gridTemplateColumns: '40% 1fr'}}>
                <p class="post-title" style={{color: '#2D2B3A', fontSize: '23px'}}>$ {props.precio}</p>
                <p class="post-title" style={{textDecoration: 'line-through'}}>$ {props.precioAnterior ? props.precioAnterior : 20000 }</p>
              </div>
              <button className="boton_carrito" style={{width: '100%', borderRadius: '5px', outline: 'none',fontSize: '14px', padding: '2px 0px 2px 0px'}}
               onClick={() =>{ 
                dispatch(agregar_al_carrito(props))
                showToastMessage('success', 'su producto se ha agregado al carrito')
                }}>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{marginRight: '5px'}} />
              agregar al carrito
              </button>
             
             
            </div>

            {/* es para probar despues sacar ----------
            <button >. + .</button>
            <button onClick={() => dispatch(eliminar_del_carrito(props.id))}>eliminar</button>
            <button onClick={() => dispatch(disminuir_cantidad(props.id))}>. - .</button> */}
          </div>
        
    )
}