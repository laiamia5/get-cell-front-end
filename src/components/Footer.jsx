import React from "react";
import '../styles/nav.css'
import '../assets/css/maicons.css'
import '../assets/css/theme.css'
import "../assets/css/bootstrap.css"
import "../assets/vendor/animate/animate.css"

export default function Footer (){
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
                <li><a href="#">Registrarse</a></li>
                <li><a href="#">condiciones de servicio</a></li>
                <li><a href="#">politicas de privacidad</a></li>
                <li><a href="#">faqs</a></li>
                <li><a href="#">Reportar error</a></li>
              </ul>
            </div>
            <div class="col-lg-3 py-3">
              <h5>Navegar</h5>
              <ul class="footer-menu">
                <li><a href="#">Tienda</a></li>
                <li><a href="#">celulares reacondicionados</a></li>
                <li><a href="#">celulares nuevos</a></li>
                <li><a href="#">accesorios</a></li>
                <li><a href="#">Reparación</a></li>
              </ul>
            </div>
            <div class="col-lg-3 py-3">
              <h5>Subscribe</h5>
              <form action="#">
                <input type="text" class="form-control" placeholder="ingresa tu email..."/>
              </form>
    
              <div class="sosmed-button mt-4">
                <a href="#" style={{marginLeft: '5px'}}><span class="mai-logo-facebook-f"></span></a>
                <a href="#" style={{marginLeft: '5px'}}><span class="mai-logo-twitter"></span></a>
                <a href="#" style={{marginLeft: '5px'}}><span class="mai-logo-google"></span></a>
                <a href="#" style={{marginLeft: '5px'}}><span class="mai-logo-linkedin"></span></a>
              </div>
            </div>
          </div>
    
          <div class="row">
            <div class="col-sm-6 py-2">
              <p id="copyright"> Desarrollado por <a href="https://portfolio-laia-perez.vercel.app">Laia Pérez</a> &copy; 2023 </p>
            </div>
            <div class="col-sm-6 py-2 text-right">
             
              <div class="d-inline-block px-3">
                <a href="#">contactanos</a>
              </div>
            </div>
          </div>
        </div> 
      </footer> 
    )
}