import React from "react";
import Icon from './Icon'
import Icon2 from "./Icon2";
import Icon3 from './Icon3'

export default function IConsMpDesktop () {
    return(
        <div>
           
        <div className='icons-mp-desktop-index icons-violet'>
        
             <div class="page-section features ">
             <div class="text-center wow fadeInUp">
                <div class="subhead">Why Choose Us</div>
                <h2 class="title-section">Your <span class="marked">Comfort</span> is Our Priority</h2>
                <div class="divider mx-auto"></div>
            </div>
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
        </div>
        </div>
    )
}