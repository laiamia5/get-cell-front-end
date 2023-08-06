import React from "react";
import imagen2 from '../../tools/imgs/rum.png'
import '../../styles/carousek.css'

export default function Carousel () {
    return(
        <div style={{background: 'white'}}>
            <div class="container" >
                <div class="text-center wow fadeInUp">
                <div class="subhead">Nuestra Tienda</div>
                <h2 class="title-section">Nuestras <span class="marked">categorias</span></h2>
                <div class="divider mx-auto"></div>
                </div>
            </div>

        <div style={{width: '100%', background: 'white'}}>
        <div className="carrusel2" style={{overflowX: 'scroll', overflowY: 'hidden' ,height: '160px',  marginLeft: '10%', marginRight: '10%', display: 'flex', backgroundColor:'white',  justifyContent: 'center'}}>
            <div style={{backgroundColor:'#f9f9f9', width: '160px', minWidth: '160px', borderRadius: '25px', marginLeft: '20px'}}>
                <img src={imagen2} alt="" style={{width: '80%'}}/>
                <p style={{backgroundColor: 'white',justifyContent: 'center', display: 'flex'}}>celulares</p>
            </div>

            <div style={{backgroundColor:'#f9f9f9', width: '160px', minWidth: '160px', borderRadius: '25px', marginLeft: '20px'}}>
                <img src={imagen2} alt="" style={{width: '80%'}}/>
                <p style={{backgroundColor: 'white',justifyContent: 'center', display: 'flex'}}>celulares</p>
            </div>
            <div style={{backgroundColor:'#f9f9f9', width: '160px', minWidth: '160px', borderRadius: '25px', marginLeft: '20px'}}>
                <img src={imagen2} alt="" style={{width: '80%'}}/>
                <p style={{backgroundColor: 'white',justifyContent: 'center', display: 'flex'}}>celulares</p>
            </div>
            <div style={{backgroundColor:'#f9f9f9', width: '160px', minWidth: '160px', borderRadius: '25px', marginLeft: '20px'}}>
                <img src={imagen2} alt="" style={{width: '80%'}}/>
                <p style={{backgroundColor: 'white',justifyContent: 'center', display: 'flex'}}>celulares</p>
            </div>
            <div style={{backgroundColor:'#f9f9f9', width: '160px', minWidth: '160px', borderRadius: '25px', marginLeft: '20px'}}>
                <img src={imagen2} alt="" style={{width: '80%'}}/>
                <p style={{backgroundColor: 'white',justifyContent: 'center', display: 'flex'}}>celulares</p>
            </div>
          
        </div>
         </div>
         </div>
    )
}