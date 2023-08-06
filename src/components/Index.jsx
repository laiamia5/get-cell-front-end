import React from "react";
import '../styles/fondo.css'
import {prueba} from '../tools/peticiones'
import Productos from './sections/Productos'
// import { useEffect, useState } from "react";
import Contacto from './Contacto'
import Footer from './Footer'
import Icon from '../components/sections/Icon'
import Icon2 from "./sections/Icon2";
import Icon3 from './sections/Icon3'
import PhoneAnimation from "./sections/PhoneAnimation";
import pic from '../tools/imgs/picback.png'
import Fidelizar from './sections/Fidelizar'
import NavCategorias from "./sections/NavCategorias";
import Carousel from "./sections/Carousel";


export default function Index () {
    
    return(
    <div className="fondo icons-violet" >
        
        <NavCategorias/>


        <div class="page-banner home-banner fondo">
            <div class="container h-100">
                <div class="row align-items-center h-100">
                <div class="col-lg-6 py-3 wow fadeInUp">
                    <h1 class="mb-4">Las grandes empresas se basan en grandes productos</h1>
                    <p class="text-lg mb-5">Get Cell: Tu mejor aliado tecnológico. Compra, vende y renueva, siempre un paso hacia el futuro</p>

                    <a href="#" class="btn btn-outline border text-secondary">More Info</a>
                </div>
                <div class="col-lg-6 py-3 wow zoomIn">
                    {/* arreglar responsive de la animacion */}
                    <img src={pic} alt="" style={{position: "absolute", transform: 'translate(-70px)'}}/>

                    <PhoneAnimation />
                </div>
                </div>
            </div>
        </div>
{/* arreglar el responsive de los iconos */}
<Carousel/>
<Productos/>

        <div class="page-section features">
            <div class="container">
                    <div class="row justify-content-around">
                    <Icon2></Icon2>
                    <Icon></Icon>
                    <Icon3></Icon3>
                    </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4 py-3 wow fadeInUp">
                        <div class="d-flex flex-row">
                        <div class="img-fluid mr-3">
                            {/* <img src="../assets/img/icon_pattern.svg" alt=""> */}
                        </div>
                        <div>
                            <h5>Elegí los productos que vas a comprar</h5>
                            <p>Si querés más de uno, sumalos a tu carrito. A partir de $20.000 en tu compra el envio es gratis</p>
                        </div>
                        </div>
                    </div>
            
                    <div class="col-md-6 col-lg-4 py-3 wow fadeInUp">
                        <div class="d-flex flex-row">
                        <div class="img-fluid mr-3">
                            {/* <img src="../assets/img/icon_pattern.svg" alt=""> */}
                        </div>
                        <div>
                            <h5>Paga con el medio de pago más cómodo para vos</h5>
                            <p>Comprá con seguridad: usamos la tecnología de Mercado Pago.</p>
                        </div>
                        </div>
                    </div>
            
                    <div class="col-md-6 col-lg-4 py-3 wow fadeInUp">
                        <div class="d-flex flex-row">
                        <div class="img-fluid mr-3">
                            {/* <img src="../assets/img/icon_pattern.svg" alt=""> */}
                        </div>
                        <div>
                            <h5>Recibí el producto que esperabas</h5>
                            <p>Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>   
       
        {/* <PhoneAnimation/> */}
        <Fidelizar/>
    </div>
    )
}