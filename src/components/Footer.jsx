import React from "react";
import '../styles/nav.css'
import '../assets/css/maicons.css'
import '../assets/css/theme.css'
import "../assets/css/bootstrap.css"
import "../assets/vendor/animate/animate.css"
import { useState } from "react";
import { subscribirse } from "../tools/peticiones";
import {useNavigate} from 'react-router'


export default function Footer (){
  const [subscribe, setSubscribe] = useState({})
  const navigate = useNavigate()
    return(
        <footer class="page-footer" style={{zIndex: '99999'}}>
        <div class="container">
          <div class="row justify-content-center mb-5">
            <div class="col-lg-3 py-3">
              <h3>Get<span style={{color: 'rgb(108, 85, 249)'}}>Cell</span></h3>
              <p>Reparación, accesorios, compra y venta de celulares</p>
    
              <p><a style={{color: 'rgb(108, 85, 249)'}} >getcell.original@gmail.com</a></p>
              <p><a style={{color: 'rgb(108, 85, 249)'}}>+54 9 11 5644 9259</a></p>
            </div>
            <div class="col-lg-3 py-3">
              <h5>Links</h5>
              <ul class="footer-menu">
                <li onClick={() => navigate('/registro')}><a href="#">Registrarse</a></li>
                <li onClick={() => navigate('/condiciones-del-servicio')}><a href="#">condiciones de servicio</a></li>
                <li onClick={() => navigate('/politicas-de-privacidad')}><a href="#">politicas de privacidad</a></li>
                <li onClick={() => navigate('/faq')}><a href="#">faqs</a></li>
                <li onClick={() => navigate('/contacto')}><a href="#">Reportar error</a></li>
              </ul>
            </div>
            <div class="col-lg-3 py-3">
              <h5>Categoria</h5>
              <ul class="footer-menu">
                <li onClick={() => navigate('/tienda')}><a href="">Tienda</a></li>
                <li onClick={() => navigate('/tienda?categoria=celulares+reacondicionados')}><a href="">celulares reacondicionados</a></li>
                <li onClick={() => navigate('/tienda?categoria=celulares+nuevos')}><a href="">celulares nuevos</a></li>
                <li onClick={() => navigate('/tienda?categoria=otros+accesorios')}><a href="">accesorios</a></li>
              </ul>
            </div>
            <div class="col-lg-3 py-3">
              <h5>Subscribe</h5>
              <form onSubmit={() => subscribirse(subscribe)}>
                <input type="text" class="form-control" placeholder="ingresa tu nombre" onChange={(e) => setSubscribe({...subscribe, nombre: e.target.value})}/>
                <input style={{marginTop: '10px'}} type="text" class="form-control" placeholder="ingresa tu email" onChange={(e) => setSubscribe({...subscribe, email: e.target.value})}/>
                <button style={{marginTop: '10px', width: '100%'}} className="btn boton_carrito ">subcribirse</button>
              </form>
    
              <div class="sosmed-button mt-4">
                <a href="https://www.facebook.com/profile.php?id=100094468287331" target="_blank" style={{marginLeft: '5px'}}><span class="mai-logo-facebook-f"></span></a>
                <a href="https://wa.link/rbkqp6" style={{marginLeft: '5px'}}><span class="mai-logo-whatsapp"></span></a>
                <a href="#" style={{marginLeft: '5px'}}><span class="mai-logo-instagram"></span></a>
                {/* <a href="#" style={{marginLeft: '5px'}}><span class="mai-logo-linkedin"></span></a> */}
              </div>
            </div>
          </div>
    
          <div class="row">
            <div class="col-sm-6 py-2">
              <p id="copyright"> Desarrollado por <a href="https://portfolio-laia-perez.vercel.app">Laia Pérez</a> &copy; 2023 </p>
            </div>
            <div class="col-sm-6 py-2 text-right">
             
              <div class="d-inline-block px-3">
                <a onClick={() => navigate('/contacto')} href="#">contactanos</a>
              </div>
            </div>
          </div>
        </div> 
      </footer> 
    )
}