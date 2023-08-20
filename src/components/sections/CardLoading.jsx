import React from "react";
import imgload from '../../tools/imgs/loading.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/cardloading.css'


export default function CardLoading (){
    return(
        <div class="col-md-6 col-lg-3 py-3 wow fadeInUp">
            <div class="card-blog">
                    <img src={imgload}  style={{maxWidth: '200px'}} alt="" />
                    <div class="body" style={{paddingTop: '10px'}}>
                    <div class="post-title div-loading" style={{backgroundColor: '#ababab', borderRadius: '15px', width: '70%'}}><a href="blog-single.html" style={{color: "inherit", opacity: '0'}}>g</a></div>
                    <div class="post-excerpt">
                        <div className="div-loading" style={{width: '90%', backgroundColor: '#dfdfdf', height: '15px',  borderRadius: '15px'}}></div>
                        <div className="div-loading" style={{width: '60%', backgroundColor: '#dfdfdf', height: '15px',  borderRadius: '15px', marginTop: '3%'}}></div>
                    </div>
                    </div>
                <div style={{display: 'grid', gridTemplateColumns: '40% 1fr'}}>
                    <p  class="post-title div-loading" style={{color: '#dfdfdf', fontSize: '23px'}}>$$$</p>
                </div>
                <button disabled  style={{ width: '100%', borderRadius: '5px', outline: 'none',fontSize: '14px', padding: '2px 0px 2px 0px', border: '1px solid #dfdfdf' }} >
                agregar al carrito <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{marginRight: '5px'}}/>
                </button>
            </div>
      </div>
    )
}