import React from "react";
import '../styles/fondo.css'
import {prueba} from '../tools/peticiones'
import Productos from './sections/Productos'
// import { useEffect, useState } from "react";
import Contacto from './Contacto'
import Footer from './Footer'
import '../styles/responsive.css'

import PhoneAnimation from "./sections/PhoneAnimation";
import pic from '../tools/imgs/picback.png'
import Fidelizar from './sections/Fidelizar'
import NavCategorias from "./sections/NavCategorias";
import Carousel from "./sections/Carousel";
import Catalogo from "./sections/Catalogo";
import UncontrolledExample from './Carrusel2'
import IConsMpDesktop from "./sections/IconsMpDesktop";
import IConsMpMobile from "./sections/IconsMpMobile";


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
{/* <Catalogo/> */}

        <UncontrolledExample/>

       <IConsMpDesktop />
       <IConsMpMobile />

        <Productos/>
        {/* <div style={{marginTop: '5%'}}>jf</div> */}
        <Carousel />
        <Fidelizar/>
    </div>
    )
}