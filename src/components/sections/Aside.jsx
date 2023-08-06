import React from "react";
import '../../styles/aside.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams } from "react-router-dom";
import {useLocation} from 'react-router-dom'
import {useState} from 'react'


export default function Aside (){
  const [params, setParams] = useSearchParams()
  const location = useLocation()
  const [categoria, setCategoria] = useState()

  //esta funcion hace que el menu se desplace y muestre distintas opciones-------------------------------------
  const cambiaClase = (event) => {
    let elemento = event.target.closest('.sub-menu').classList.value
    if(elemento === 'sub-menu inactive' || elemento === 'sub-menu'){
      event.target.closest('.sub-menu').classList.value = 'sub-menu active'
    }else{
      event.target.closest('.sub-menu').classList.value = 'sub-menu inactive'
    }
  }
  //esta funcion cambia la clase active que simboliza el pequeño indice al costado de el sub menu-----------------
  const cambiaClaseSubMenu = async (event) => {
    // class="menu-items-active"
    let todos_los_list = await document.querySelectorAll('.li_aside')
    await todos_los_list.forEach((el) => {
      if(el.classList.contains("menu-items-active")) el.classList.remove("menu-items-active")
    })
  
    let elementoEvento = event.target.closest('.li_aside').classList
    if(elementoEvento.value.includes("menu-items-active")) elementoEvento.remove("menu-items-active")
    else elementoEvento.add("menu-items-active")

    filtrare(event);
  }

  ///////////////////////////////filtrar////////////////////////////////////////////////////////////////
  const filtrare = async (event) => {
    let defineCategoria = event.target.closest('.sub-menu').querySelector('span').textContent.toLowerCase() + '+' + event.target.textContent.toLowerCase()
    params.get('nombre') 
    ?( 
      setParams(`?nombre=${params.get('nombre')}&categoria=${defineCategoria}`) 
    )
    : setParams(`?categoria=${defineCategoria}`) 
  }

    return(
        
    <aside class="sidebar" style={{display: 'block'}}>
    <div id="leftside-navigation" class="nano">
      <ul class="nano-content">
        <li class="sub-menu">
          <a ><FontAwesomeIcon style={{width:'20px'}} icon="fa-solid fa-store" className="anim" /><span style={{marginLeft:'5px'}}>Todo</span></a>
        </li>
        <li class="sub-menu">
          <a href="javascript:void(0);" onClick={(e) => cambiaClase(e) }> 
            <FontAwesomeIcon icon="fa-solid fa-mobile" style={{width:'20px'}} className="anim"/> <span>Celulares nuevos</span>
            <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right"  />
            </i>
          </a>
          <ul className="animation-slice">
          <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Samsung</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Motorola</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Iphone</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu" >
          <a href="javascript:void(0);" onClick={(e) => cambiaClase(e)}> <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" style={{width:'20px'}} className="anim"/> <span>Celulares Reacondicionados</span>
            <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right pull-right" />
            </i>
          </a>
          <ul className="animation-slice">
          <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Samsung</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Motorola</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Iphone</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu" >
          <a href="javascript:void(0);" onClick={(e) => cambiaClase(e)}><FontAwesomeIcon icon="fa-solid fa-tarp" className="anim" style={{width:'20px'}}/><span style={{marginLeft:'5px'}}>Fundas</span>
            <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right" /> 
            </i>
          </a>
          <ul className="animation-slice">
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a>Samsung J1, J2, J4, J5, J6, J7 . . .</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Samsung A01, A02, A03, A10, A20, A30</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Mask</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Wizard</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Multiple File Upload</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >WYSIWYG Editor</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu" > {/*active para deslizarlo*/ }
          <a href="javascript:void(0);" onClick={(e) => cambiaClase(e)}>
            <FontAwesomeIcon icon="fa-solid fa-layer-group" style={{width:'20px'}} className="anim" />
            <span style={{marginLeft:'5px'}}>Vidrios templados</span>
          <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right pull-right" />
            </i>
          </a>
          <ul className="animation-slice">
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Inbox</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Compose Mail</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu" >
          <a href="javascript:void(0);" onClick={(e) => cambiaClase(e)}><FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench"  style={{width:'20px'}} className="anim" /><span style={{marginLeft:'5px'}}>Repuestos</span>
          <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right pull-right" />
            </i>
          </a>
          <ul className="animation-slice">
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Chartjs</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Morris</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >C3 Charts</a></li>
          </ul>
        </li>
        <li class="sub-menu" >
          <a href="javascript:void(0);" onClick={(e) => cambiaClase(e)}><FontAwesomeIcon icon="fa-solid fa-headphones" style={{width:'20px'}} className="anim" /><span style={{marginLeft:'5px'}}>Otros accesorios</span>
          <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right pull-right" />
            </i>
          </a>
          <ul className="animation-slice">
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a>Cargadores</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Auriculares</a>
            </li>
            <li onClick={(e) => cambiaClaseSubMenu(e)} className="li_aside"><a >Chips</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
    )
}