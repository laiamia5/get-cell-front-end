import React from "react";
import imagen1 from '../../tools/imgs/post.png'
import imagen2 from '../../tools/imgs/cel.png'
import imagen3 from '../../tools/imgs/po.png'
import '../../styles/catalogo.css'


export default function Catalogo () {
    return(
        <>
        <div className="responsive-contenedor-catalogo" style={{display: 'grid', gridTemplateColumns: '30% 70%', width:'90%', height: '80vh', gridColumnGap: '10px', marginLeft: '5%', marginRight: '5%'}}>
            <div className="responsive-cont-catalogo catalogo-div" style={{background: 'rgb(249 249 249)'}} >
                <img src={imagen1} style={{width:'100%', marginTop: '25%'}}/>
            </div>
            <div style={{width:'100%'}}>
                <div style={{display: 'flex', margin: '10px', maxHeight: '35%'}} >
                        <div className="catalogo-div" style={{background: 'red', width: '30%', marginRight: '10px'}}>
                            <img src={imagen3} style={{width:'100%', height: '100%'}}/>
                        </div>
                        <div className="catalogo-div"  style={{background: 'green', width: '70%', marginLeft: '10px', display: 'flex'}}>
                        </div>
                </div>
                <div style={{display: 'flex', margin: '10px', maxHeight: '65%'}} >
                        <div className="catalogo-div"  style={{background: 'grey', width: '70%', marginRight: '10px'}}>
                            <p>ver en la tienddfa</p>
                            <img src={imagen2} style={{width:'100%'}}/>
                        </div>
                        <div className="catalogo-div"  style={{background: 'grey', width: '30%', marginLeft: '10px'}}>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}