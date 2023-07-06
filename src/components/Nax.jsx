import React from "react";
import '../styles/nav.css'
import imagen from '../tools/transparente.png'
import '../assets/css/maicons.css'
import '../assets/css/theme.css'
import "../assets/css/bootstrap.css"
import "../assets/vendor/animate/animate.css"
import {Link} from 'react-router-dom'
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import '../styles/search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Nav () {
  const [params, setParams] = useSearchParams()
  const [input, setInput] = useState('')

  let vaciar = () =>{
    document.getElementById("busqueda").value = "";
 }
    return(
      <div style={{marginBottom: '1%'}}>
    <div class="back-to-top"></div>

    <header>
      <nav class="navbar navbar-expand-lg navbar-light navbar-float">
        <div class="container">
          <a href="index.html" class="navbar-brand">Get<span  style={{color: '#6C55F9 '}}>Cell</span></a>

          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="navbarContent">
            <ul class="navbar-nav ml-lg-4 pt-3 pt-lg-0">
              <li class="nav-item active">
               <Link to='/' style={{textDecoration:'none'}}><a  class="nav-link" >Inicio</a></Link> 
              </li>
              <li class="nav-item">
              <Link to='/tienda'  style={{textDecoration:'none'}}><a  class="nav-link">Tienda</a></Link> 
              </li>
              <li class="nav-item">
                <a href="services.html" class="nav-link">Servicios</a>
              </li>
              {/* <li class="nav-item">
                <a href="blog.html" class="nav-link">News</a>
              </li> */}
              <li class="nav-item">
              <Link to='/contacto' style={{textDecoration:'none'}}><a class="nav-link">Contactanos</a></Link> 
              </li>
            </ul>
                {/* ----------------------despues cambiarle el estilo obvs-------------------- */}
                <div class="sample one">
                  <input type="text" name="search" class="sample_input" placeholder="buscar producto" id='busqueda' onChange={(e) => setInput(e.target.value) }/>
                  <button class="btn btn-search sample_boton"  onClick={(e) => {
                  setParams(`?nombre=${input}`)
                  setInput('')
                  vaciar()
                  }}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
                </div>


            {/* <div class="ml-auto">
              <a href="#" class="btn btn-outline rounded-pill">Get a Quote</a>
            </div> */}
          </div>
        </div>
      </nav>

    
    </header>
      </div>
    )
}

// /* Please ❤ this if you like it! */




// <div className='Nav'>
// <img src={imagen} style={{width: '80px', position: 'absolute', top: '0'}}/>
// <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav">
//         <li class="nav-item">
//             <span class="nav-link"></span>
//         </li>
//     </ul>
//     <ul class="navbar-nav">
//         <li class="nav-item ">
//             <span class="nav-link"></span>
//         </li>
//     </ul>
//     <ul class="navbar-nav active">
//         <li class="nav-item">
//             <span class="nav-link">inicio</span>
//             <div className="dropdown-menu2 menu">
//                 <span class="dropdown-item" >Descending</span>
//                 <span class="dropdown-item" >Ascending</span>
//             </div>
//         </li>
//     </ul>
//     <ul class="navbar-nav">
//         <li class="nav-item">
//             <span class='nav-link'>healthScore order</span>
//             {/* <div>
//                 <span class="dropdown-item" >Descending</span>
//                 <span class="dropdown-item">Ascending</span>
//             </div> */}
//         </li>
//     </ul>
//     <ul class="navbar-nav">
//         <li class="nav-item">
//             <span class='nav-link services' >filter Diets</span>
//             <div className= "dropdown-menu "> {/* agregar la clase menu para que desaparezca*/ }
//                 <span class="dropdown-item" >gluten free</span>
//                 <span class="dropdown-item" >ketogenic</span>
//                 <span class="dropdown-item">vegetarian</span>
//                 {/* <span class="dropdown-item" >lacto ovo veg.</span>
//                 <span class="dropdown-item" >vegan</span>
//                 <span class="dropdown-item">pescatarian</span>
//                 <span class="dropdown-item" >paleolithic</span>
//                 <span class="dropdown-item" >primal</span>
//                 <span class="dropdown-item">whole 30</span>
//                 <span class="dropdown-item">dairy free</span>
//                 <span class="dropdown-item">fodmap friendly.</span> */}
//             </div>
//         </li>
//     </ul>
//     <ul class="navbar-nav">
//         <li class="nav-item">
//             <span class='nav-link'>reset order</span>
//         </li>
//     </ul>
// </div>
// {/* {location.pathname !== '/createRecipe' && <OnSearch />} */}
// </div>  