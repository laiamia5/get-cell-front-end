import React from "react";
import '../styles/carrito.css'
import foto from '../tools/imagen.png'
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { eliminar_del_carrito, alterar_cantidad } from "../redux/actions";
import { useNavigate } from "react-router";

export default function Carrito (){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productos = useSelector(state => state.carrito)
  const [productosDom, setProductosDom ] = useState([])

  useEffect(() => {
    setProductosDom(productos)
  }, [productos])

    return(
      <div style={body}>
        <div id="app" className="columnas">
          <section class="container_carrito" style={container}>
              <div v-if="products.length > 0">
                  <ul class="products carrito_ul" style={{...carrito_ul, ...products}}>
                    {
                      productosDom.length !== 0 ?
                    productosDom.map((e) => {
                      return(<li  v-for="(product, index) in products" style={{...row, ...products_li}}>
                          <div class="left" style={{...col_left, ...float_left}}>
                              <div class="thumbnail">
                              <a  style={carrito_a} className="carrito_a">
                                  <img style={img} src={foto}/>
                              </a>
                              </div>
                              <div class="detail" style={detail}>
                                <div class="name" style={name}><a style={carrito_a} className="carrito_a">{e.nombre}</a></div>
                                <div class="description" style={description}>{e.descripcion}</div>
                                <div class="price" style={price}>${e.precio}</div>
                              </div>
                          </div>

                          <div class="right" style={{...col_right, ...float_left}}>
                              <div class="quantity" style={{...quantityRemove, ...float_left}}>
                              <input type="number" defaultValue={e?.cantidad} onBlur={(el) => dispatch(alterar_cantidad(e.id, el.target.value))} class="quantity carrito_input carrito_input_number" step="1" style={{...carrito_input, ...float_left, ...quantityRemove, ...quantityInput}} />
                              </div>
                              
                              <div class="remove" onClick={() => dispatch(eliminar_del_carrito(e.id))} style={{...float_left, ...quantityRemove}}>
                              <svg 
                              style={{...close, ...removeSvg}}
                              version="1.1"
                              className="close"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 60 60"
                              enableBackground="new 0 0 60 60"
                              xmlSpace="preserve"
                              >
                              <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                              </svg>
                              </div>
                          </div>
                      </li>) 
                    })
                    : <div class="pagination justify-content-center content-center flex-wrap" style={{height: '400px', alignContent: 'center'}}><p class="page-item" style={{color: 'rgba(0, 0, 0, 0.7)'}}> el carrito esta vacio, agrega productos de nuestra tienda !</p></div>} 
                  </ul>
              </div>
            </section>
            <div>
              <div class="widget-box" style={{maxWidth: '300px', marginRight: '5%', marginTop: '5%'}}>
                  <h4 class="widget-title">Resumen </h4>
                  <div class="divider">
                  </div>
                  <div class="summary"  style={{...summary, ...promotionSummaryCheckout}}>
                    <ul className="carrito_ul" style={carrito_ul}>
                      <div style={{display: 'grid',  gridTemplateColumns: '20% 80%' }}>
                        <li style={summaryList}>Subtotal </li>
                        <span style={{...summaryList, marginLeft:'45%'}}>$8000</span>
                      </div>
                      <div style={{display: 'grid',  gridTemplateColumns: '20% 80%' }}>
                        <li style={summaryList} v-if="discount > 0">Descuento</li>
                        <span style={{...summaryList, marginLeft:'45%'}}>$660</span>
                      </div>
                      <div style={{display: 'grid',  gridTemplateColumns: '20% 80%' }}>
                        <li style={summaryList}>Envío</li>
                        <span style={{...summaryList, marginLeft:'45%'}}>$50</span>
                      </div>
                      <hr />
                      <div style={{display: 'grid',  gridTemplateColumns:'20% 80%' }}>
                        <li style={{...summaryListTotal, ...summaryList}} class="total">Total</li>
                        <span style={{...summaryList, fontWeight: 'bold'}}>$400</span>
                      </div>
                    </ul>
                  </div>
                  <button type="submit" class="btn btn-block boton_carrito" style={{width: '100%'}} onClick={() => {
                    productos.length === 0 ? alert('agrege productos al carrito para realizar una compra') : navigate('/carrito/finalizar-compra')
                  }}>Realizar compra</button>
              </div>
              
              <div class="widget-box" style={{ maxWidth: '300px'}}>
                <form action="#" class="search-widget">
                  <input type="text" class="form-control" placeholder="Cupón de descuento"/>
                  <button class="btn btn-block boton_carrito" style={{textTransform: 'lowercase'}}>Aplicar</button>
                </form>
              </div>
            </div>
        </div>
      </div>
    )
}

  
const body = {
    margin: '20px 0',
    padding: '0',
    overflow: 'auto',
  scrollbarWidth:' none ',/* Oculta la barra de desplazamiento en navegadores que admiten la propiedad */
  MsOverflowStyle: 'none'
  }
 
  const img = {
    maxWidth: '100px',
    verticalAlign: 'middle',
    borderRadius: '4px',
    marginLeft: '17%'
  } 
  
 const carrito_a = {
    textDecoration: 'none',
    color: '#333333'
  }
  
  const carrito_ul = {
    padding: 0,
    margin: 0,
    listStyleType: 'none'
  }
  
  const carrito_input = {
    transition: 'all 0.25s linear',
    outline: 'none'
  }


  const container =  {
    width: '90%',
    margin: '0 auto',
    overflow: 'auto'
  } 
   
  
  const count = {
    float: 'right',
    color: '#333333',
    height: '20px',
    lineHeight: '20px'
  }

   
  const products = {
    borderTop: '1px solid #ddd'
  }
  
  const products_li = {
    padding: '1rem 0',
    borderBottom: '1px solid #ddd'
  }
  
  const row = {
    position: 'relative',
    overflow: 'auto',
    width: '100%'
  }
  
//   .col,
//   .quantity,
//   .remove 
  
  const float_left ={
    float: 'left'
  }
  
  const col_left = {
    width: '70%'
  } 

  const col_right = {
    width: '30%',
    position: 'absolute',
    right: 0,
    top: 'calc(50% - 30px)'
  }

  const detail = {
    padding: '0 0.5rem',
    lineHeight: '2.2rem'
  };
  
  const name = {
    fontSize: '1.2rem'
  };
  
  const description = {
    color: '#7d7d7d',
    fontSize: '1rem'
  };
  
  const price = {
    fontSize: '1.5rem'
  };

//   .quantity,
//   .remove

const quantityRemove = {
    width: '50%',
    textAlign: 'center'
  };


  const removeSvg = {
    width: '60px',
    height: '60px'
  };
  
  const quantityInput = {
    display: 'inline-block',
    width: '60px',
    height: '60px',
    position: 'relative',
    left: 'calc(50% - 30px)',
    background: '#fff',
    border: '2px solid #ddd',
    color: '#7f7f7f',
    textAlign: 'center',
    font: '600 1.5rem Helvetica, Arial, sans-serif'
  };

  const close = {
    fill: '#7d7d7d',
    transition: 'color 150ms linear, background-color 150ms linear, fill 150ms linear, 150ms opacity linear',
    cursor: 'pointer'
  };

  const promotionSummaryCheckout = {
    // float: 'left',
    width: '100%',
    marginTop: '1.5rem'
  };
  
  const promotionLabel = {
    float: 'left',
    width: '100%',
    marginBottom: '1rem'
  };
  
  const promotionInput = {
    float: 'left',
    width: '80%',
    fontSize: '1rem',
    padding: '0.5rem 0 0.5rem 1.8rem',
    border: '2px solid #16cc9b',
    borderRadius: '2rem 0 0 2rem'
  };

  const promotionButton = {
    float: 'left',
    width: '20%',
    height: '2.4rem',
    borderRadius: '0 2rem 2rem 0'
  };

  
const summary = {
    fontSize: '1.2rem',
    textAlign: 'right'
  };
  
  const summaryList = {
    padding: '0.5rem 0',
    // float: 'left'
    // with: '80%'
  };
  
  const summaryListSpan = {
    display: 'inline-block',
    width: '30%'
  };
  
  const summaryListTotal = {
    fontWeight: 'bold'
  };
  
  const checkout = {
    textAlign: 'right'
  };
  
  const checkoutButton = {
    fontSize: '1.2rem',
    padding: '5px 5px',
    borderRadius: '1.5rem',
    backgroundColor: 'rgb(108, 85, 249) !important'
  };
  