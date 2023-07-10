import React from "react";
import { useParams } from "react-router";
import { obtener_un_producto } from "../tools/peticiones";
import { useEffect , useState} from "react";
import { agregar_al_carrito } from "../redux/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imagen from '../tools/imagen.png'
import '../styles/heart-animation.css'

export default function Detalle (){
  const dispatch = useDispatch()
    const {id} = useParams()
    const [elemento, setElemento] = useState({})

    useEffect(() => {
        obtener_un_producto(id).then((res) => {
            setElemento(res)
            console.log(res)
        })
    }, [])

    return(
        <>  
  <main>
    <div class="page-section pt-5">
      <div class="container">
        {/* <nav aria-label="Breadcrumb">
          <ul class="breadcrumb p-0 mb-0 bg-transparent">
            <li class="breadcrumb-item"><a >Inicio</a></li>
            <li class="breadcrumb-item"><a>Tienda</a></li>
            <li class="breadcrumb-item active">{elemento.nombre}</li>
          </ul>
        </nav> */}

        <div class="row">
          <div class="col-lg-8">
            <div class="blog-single-wrap" >
              <div class="header" style={{display: 'grid', gridTemplateColumns: '50% 50%'}}>
                  <div style={{padding: '20px'}}>
                    <img src={imagen} style={{maxHeight: '350px'}} />
                  </div>
                  <div style={{padding: '20px'}}>
                      <div style={{height: '20px', position: "relative"}}>
                        <div className="heart-contenedor">
                          <input class="heart-click" type="checkbox"/>
                          <div class="heart"></div>
                        </div>                    
                      </div>
                    <h1 class="post-title" style={{fontSize: '33px'}}>{elemento.nombre}</h1>
                    <div style={{display: "grid", gridTemplateColumns: '35% 65%'}}>
                      <p className="texto-precio-mayor">$ {elemento.precio}</p>
                      <p className="texto-tachado">$ {elemento.precioAnterior ? elemento.precioAnterior : 2000}</p>
                    </div>
                    <div class="post-content">
                      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.</p>
                    </div>
                    <div class="post-meta">
                        <div class="post-date">
                          <span class="icon">
                              <span class="mai-time-outline"></span>
                          </span> <a href="#">March 10, 2020</a>
                        </div>
                        <div class="post-comment-count ml-2">
                          <span class="icon">
                              <span class="mai-chatbubbles-outline"></span>
                            </span> <a href="#">4 Comments</a>
                          </div>
                    </div>
                  </div>
            </div>
          </div>
  
            <div class="comment-form-wrap pt-5">
              <h2 class="mb-5">Leave a comment</h2>
              <form action="#" class="">
                <div class="form-row form-group">
                  <div class="col-md-6">
                    <label for="name">Name *</label>
                    <input type="text" class="form-control" id="name"/>
                  </div>
                  <div class="col-md-6">
                    <label for="email">Email *</label>
                    <input type="email" class="form-control" id="email"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="website">Website</label>
                  <input type="url" class="form-control" id="website"/>
                </div>
    
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea name="msg" id="message" cols="30" rows="8" class="form-control"></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" value="Post Comment" class="btn btn-primary"/>
                </div>
    
              </form>
            </div>
  
          </div>
          <div class="col-lg-4">
            <div class="widget">
              <div class="widget-box">
                <div style={{display: 'flex'}}>
                  <FontAwesomeIcon icon="fa-solid fa-truck" className="track-svg"/> 
                  <p className="p-track">Incluye envio gratis</p>
                </div>
                <strong>hay Stock disponible </strong>
                <p style={{marginTop: '7px'}}> (disponibles 3)</p>
                <div style={{display: 'flex', marginBottom: '10px', flexWrap: 'wrap'}}>
                  <p style={{marginTop: '7px'}}>Cantidad : </p>
                  <div>
                      <select class="form-control input-cantidad" id="demo-simple-select-standard" >
                        <option value="1">1 unidad</option>
                        <option value="10">2 unidades</option>
                        <option value="20">3 unidades</option>
                        <option value="30">4 unidades</option>
                      </select>
                  </div>
                </div>
                
                <button type="submit" class="btn btn-block boton_carrito">Agregar al carrito</button>
                <button type="submit" class="btn btn-block boton_carrito">Comprar ahora</button>
                
                <div style={{display: 'flex', marginTop: '5px'}}>
                  <p style={{marginTop: '7px'}}>compartir con</p>
                  <div class="post-sharer" style={{marginBottom: '2%'}}>
                      <a style={{marginLeft: '5px', marginTop: '5px'}} class="btn social-facebook"><span class="mai-logo-facebook-f"></span></a>
                      <a style={{marginLeft: '5px' , marginTop: '5px'}} href="#" class="btn social-twitter"><span class="mai-logo-twitter"></span></a>
                      <a style={{marginLeft: '5px', color: 'white', background: '#2cdb52' , marginTop: '5px'}} href="#" class="btn wats-hover"><span class="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
              </div>
  
              <div class="widget-box">
                <h4 class="widget-title">Recent Post</h4>
                <div class="divider"></div>
  
                <div class="blog-item">
                    <a class="post-thumb" href="">
                      {/* <img src="../assets/img/blog/blog-1.jpg" alt=""> */}
                    </a>
                    <div class="content">
                      <h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h6>
                      <div class="meta">
                        <a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
                        <a href="#"><span class="mai-person"></span> Admin</a>
                        <a href="#"><span class="mai-chatbubbles"></span> 19</a>
                      </div>
                    </div>
                </div>
  
                <div class="blog-item">
                    <a class="post-thumb" href="">
                      {/* <img src="../assets/img/blog/blog-2.jpg" alt=""> */}
                    </a>
                    <div class="content">
                      <h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h6>
                      <div class="meta">
                        <a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
                        <a href="#"><span class="mai-person"></span> Admin</a>
                        <a href="#"><span class="mai-chatbubbles"></span> 19</a>
                      </div>
                    </div>
                </div>
  
                <div class="blog-item">
                    <a class="post-thumb" href="">
                      {/* <img src="../assets/img/blog/blog-3.jpg" alt=""> */}
                    </a>
                    <div class="content">
                      <h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h6>
                      <div class="meta">
                        <a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
                        <a href="#"><span class="mai-person"></span> Admin</a>
                        <a href="#"><span class="mai-chatbubbles"></span> 19</a>
                      </div>
                    </div>
                </div>
  
              </div>
  
              <div class="widget-box">
                <h4 class="widget-title">Tag Cloud</h4>
                <div class="divider"></div>
  
                <div class="tag-clouds">
                  <a href="#" class="tag-cloud-link">Projects</a>
                  <a href="#" class="tag-cloud-link">Design</a>
                  <a href="#" class="tag-cloud-link">Travel</a>
                  <a href="#" class="tag-cloud-link">Brand</a>
                  <a href="#" class="tag-cloud-link">Trending</a>
                  <a href="#" class="tag-cloud-link">Knowledge</a>
                  <a href="#" class="tag-cloud-link">Food</a>
                </div>
              </div>
  
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </main>

        </>
    )
}

