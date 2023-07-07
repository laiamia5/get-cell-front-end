import React from "react";
import '../../styles/aside.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Aside (){

  const cambiaClase = (event) => {
    let elemento = event.target.closest('.sub-menu').classList.value
    if(elemento === 'sub-menu'){
      event.target.closest('.sub-menu').classList.value = 'sub-menu active'
    }else{
      event.target.closest('.sub-menu').classList.value = 'sub-menu'
    }
  }

    return(
        
    <aside class="sidebar" style={{display: 'block'}}>
    <div id="leftside-navigation" class="nano">
      <ul class="nano-content">
        <li class="sub-menu">
          <a ><FontAwesomeIcon style={{width:'20px'}} icon="fa-solid fa-store" className="anim" /><span style={{marginLeft:'5px'}}>Todo</span></a>
        </li>
        <li class="sub-menu" onClick={(e) => cambiaClase(e)}>
          <a href="javascript:void(0);"> 
            <FontAwesomeIcon icon="fa-solid fa-mobile" style={{width:'20px'}} className="anim"/> <span>Celulares nuevos</span>
            <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right"  />
            </i>
          </a>
          <ul className="animation-slice">
  
            <li><a >Samsung</a>
            </li>
            <li><a >Motorola</a>
            </li>
            <li><a >Iphone</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu" onClick={(e) => cambiaClase(e)}>
          <a href="javascript:void(0);"> <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" style={{width:'20px'}} className="anim"/> <span>Celulares Reacondicionados</span>
            <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right pull-right" />
            </i>
          </a>
          <ul className="animation-slice">
            
          <li><a >Samsung</a>
            </li>
            <li><a >Motorola</a>
            </li>
            <li><a >Iphone</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu" onClick={(e) => cambiaClase(e)}>
          <a href="javascript:void(0);"><FontAwesomeIcon icon="fa-solid fa-tarp" className="anim" style={{width:'20px'}}/><span style={{marginLeft:'5px'}}>Fundas</span>
            <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right" /> 
            </i>
          </a>
          <ul className="animation-slice">
            <li><a>Samsung J1, J2, J4, J5, J6, J7 . . .</a>
            </li>
            <li><a >Samsung A01, A02, A03, A10, A20, A30</a>
            </li>
            <li><a >Mask</a>
            </li>
            <li><a >Wizard</a>
            </li>
            <li><a >Multiple File Upload</a>
            </li>
            <li><a >WYSIWYG Editor</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu" onClick={(e) => cambiaClase(e)}> {/*active para deslizarlo*/ }
          <a href="javascript:void(0);">
            <FontAwesomeIcon icon="fa-solid fa-layer-group" style={{width:'20px'}} className="anim" />
            <span style={{marginLeft:'5px'}}>Vidrios templados</span>
          <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right pull-right" />
            </i>
          </a>
          <ul className="animation-slice">
            <li class="menu-items-active"><a >Inbox</a>
            </li>
            <li ><a >Compose Mail</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu" onClick={(e) => cambiaClase(e)}>
          <a href="javascript:void(0);"><FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench"  style={{width:'20px'}} className="anim" /><span style={{marginLeft:'5px'}}>Repuestos</span>
          <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right pull-right" />
            </i>
          </a>
          <ul className="animation-slice">
            <li><a >Chartjs</a>
            </li>
            <li><a >Morris</a>
            </li>
            <li><a >C3 Charts</a></li>
          </ul>
        </li>
        <li class="sub-menu" onClick={(e) => cambiaClase(e)}>
          <a href="javascript:void(0);"><FontAwesomeIcon icon="fa-solid fa-headphones" style={{width:'20px'}} className="anim" /><span style={{marginLeft:'5px'}}>Otros accesorios</span>
          <i className="pull-right">
              <FontAwesomeIcon icon="fa-solid fa-angle-right pull-right" />
            </i>
          </a>
          <ul className="animation-slice">
            <li><a>Cargadores</a>
            </li>
            <li><a >Auriculares</a>
            </li>
            <li><a >Chips</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
    )
}