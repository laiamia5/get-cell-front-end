import React from "react";
import imagen1 from '../../tools/imgs/post.png'
import imagen2 from '../../tools/imgs/cel.png'
import imagen3 from '../../tools/imgs/po.png'
import '../../styles/catalogo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Catalogo () {
    return(
        <>
        <div className="responsive-contenedor-catalogo" style={{display: 'grid', gridTemplateColumns: '30% 70%', width:'90%', height: '80vh', gridColumnGap: '10px', marginLeft: '5%', marginRight: '5%'}}>
            <div className="responsive-cont-catalogo catalogo-div" style={{background: 'rgb(249 249 249)', overflow:"hidden"}} >
                <p style={{ background: 'rgb(108, 85, 249)',color: 'white', border: 'none',margin: '15% 6%', padding: '0.5% 1%'}} ><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> ver en la tienda </p>
                <img src={imagen1} style={{width:'100%', marginTop: '25%'}}/>
            </div>
            <div style={{width:'100%'}}>
                <div style={{display: 'flex', margin: '10px', maxHeight: '35%'}} >
                        <div className="catalogo-div" style={{ width: '30%', marginRight: '10px', background: 'rgb(249 249 249)'}}>
                            <p style={{ background: 'rgb(108, 85, 249)',color: 'white', border: 'none', margin: '8% 2%', padding: '0.5% 1%'}}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> ver en la tienda </p>
                            <img src={imagen3} style={{width:'100%', height: '100%'}}/>
                        </div>
                        <div className="catalogo-div"  style={{ width: '70%', marginLeft: '10px', display: 'flex', background: 'rgb(249 249 249)'}}>
                            <p style={{ background: 'rgb(108, 85, 249)',color: 'white', border: 'none', margin: '7.5% 15%', padding: '0.5% 1%'}}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> ver en la tienda </p>
                        </div>
                </div>
                <div style={{display: 'flex', margin: '10px', maxHeight: '65%'}} >
                        <div className="catalogo-div"  style={{ width: '70%',background: 'rgb(249 249 249)', marginRight: '10px'}}>
                            <p style={{ background: 'rgb(108, 85, 249)',color: 'white', border: 'none',margin: '7.5% 15%',  padding: '.5% 1%'}}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> ver en la tienda </p>
                            <img src={imagen2} style={{width:'100%'}}/>
                        </div>
                        <div className="catalogo-div"  style={{background: 'rgb(249 249 249)', width: '30%', marginLeft: '10px'}}>
                        <p style={{ background: 'rgb(108, 85, 249)',color: 'white', border: 'none', margin: '8% 2%', padding: '0.5% 1%'}}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> ver en la tienda </p>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}