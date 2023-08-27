import React from "react";
import Icon from './Icon'
import Icon2 from "./Icon2";
import Icon3 from './Icon3'

export default function IConsMpMobile () {
    return(
        <div className='icons-mp-responsive-index icons-violet'>
             <div class="page-section features ">
             <div class="text-center wow fadeInUp">
                <div class="subhead">Why Choose Us</div>
                <h2 class="title-section">Your <span class="marked">Comfort</span> is Our Priority</h2>
                <div class="divider mx-auto"></div>
            </div>
                <div class="container">
                    <div class="justify-content-center" style={{display: 'block', width: '100%'}} >
                        <div class="col-md-12 col-lg-12 py-3 wow fadeInUp" >
                            <div class="d-flex flex-row responsive-icons-mp">       {/*  flex-wrap: wrap; justify-content: center; */}
                            <div class="img-fluid mr-3">
                            <Icon2></Icon2>
                            </div>
                            <div>
                                <h5>Elegí los productos que vas a comprar</h5>
                                <p>Si querés más de uno, sumalos a tu carrito. A partir de $20.000 en tu compra el envio es gratis</p>
                            </div>
                            </div>
                        </div>
                
                        <div class="col-md-12 col-lg-12 py-3 wow fadeInUp">
                            <div class="d-flex flex-row responsive-icons-mp">
                                <div class="img-fluid mr-3">
                                    <Icon></Icon>
                                </div>
                                <div >
                                    <h5>Paga con el medio de pago más cómodo para vos</h5>
                                    <p>Comprá con seguridad: usamos la tecnología de Mercado Pago.</p>
                                </div>
                            </div>
                        </div>
                
                        <div class="col-md-12 col-lg-12 py-3 wow fadeInUp">
                            <div class="d-flex flex-row responsive-icons-mp">
                            <div class="img-fluid mr-3">
                            <Icon3></Icon3>
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
    )
}