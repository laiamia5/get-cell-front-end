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

export default function Card ({props}){
  const dispatch = useDispatch()
  const selector = useSelector(state => state.carrito)

  useEffect(() => {
    console.log(selector)
  }, [selector])

    return(
          <div class="col-md-6 col-lg-3 py-3 wow fadeInUp">
            <div class="card-blog">
              <img src={imagen2} style={{maxWidth: '200px'}} alt="" />
              <div class="body" style={{paddingTop: '10px'}}>
                <div class="post-title"><a href="blog-single.html">{props.nombre}</a></div>
                <div class="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <p class="post-title" style={{color: '#2D2B3A'}}>$ {props.precio}</p>
              <div class="footer">
                <a style={{color: '#007bff'}}>Read More <span class="mai-chevron-forward text-sm"></span></a>
              </div>
            </div>

            {/* es para probar despues sacar ----------
            <button onClick={() => dispatch(agregar_al_carrito(props))}>. + .</button>
            <button onClick={() => dispatch(eliminar_del_carrito(props.id))}>eliminar</button>
            <button onClick={() => dispatch(disminuir_cantidad(props.id))}>. - .</button> */}
          </div>
        
    )
}