import React from "react";
import '../../styles/nav.css'
import '../../assets/css/maicons.css'
import '../../assets/css/theme.css'
import "../../assets/css/bootstrap.css"
import "../../assets/vendor/animate/animate.css"
import imagen from '../../tools/transparente.png'
import imagen2 from '../../tools/imagen.png'
import Card from './Card' 
import {obtener_productos} from '../../tools/peticiones'
import { useEffect, useState } from "react";

export default function Productos (){
  const [elemento, setElemento] = useState()
  useEffect(() => {
    obtener_productos().then((res) => setElemento(res.slice(0, 7)))
  }, [])

    return(
        <>
         <div class="page-section border-top">
          <div class="container">
            <div class="text-center wow fadeInUp">
              <div class="subhead">Nuestro stock</div>
              <h2 class="title-section">nuevo ingreso de <span class="marked">Productos</span></h2>
              <div class="divider mx-auto"></div>
            </div>
            <div class="row my-5 card-blog-row">
              <div class="col-md-6 col-lg-3 py-3 wow fadeInUp">
                <div class="card-blog">
                  <div class="header">
                    <div class="entry-footer">
                      <div class="post-author">Sam Newman</div>
                      <a href="#" class="post-date">23 Apr 2020</a>
                    </div>
                  </div>
                  <div class="body">
                    <div class="post-title"><a href="blog-single.html">What is Business Management?</a></div>
                  </div>
                  <div class="footer">
                    <a href="blog-single.html">Read More <span class="mai-chevron-forward text-sm"></span></a>
                  </div>
                </div>
              </div>
          {elemento?.map((e) => <Card props={e} />)}
         {/* =======acac  */}
        </div>
  
        <div class="text-center">
          <a href="blog.html" class="btn btn-outline-primary rounded-pill">Mostrar más </a>
        </div>
      </div> 
    </div> 
  
        </>
    )
}