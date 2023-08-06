import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom";
import { reducir } from "../tools/peticiones";
import Swal from 'sweetalert2'
import '../styles/finalizarcompra.css'
import nyancat from '../tools/nyan-cat.gif'
import { verificarToken } from "../tools/peticiones";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { controlar_form } from "../tools/form-controller";

export default function FinalizarCompra (){
    const dispatch = useDispatch()
    const productos = useSelector((state) => state.carrito)
    const [total, setTotal] = useState(0)
    const [datos, setDatos] = useState()
    const token = useSelector((state) => state.token)

    useEffect(() => {
        reducir(productos).then((res) => setTotal(res))

        Swal.fire({
            icon: "question",
            showCancelButton: true,
            cancelButtonText:'no',
            confirmButtonText: 'si',
            title: 'Desea rellenar el formulario con los datos de su perfil?',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          .then((result) => {
            if (result.isConfirmed) {
                traerDatos()
            } else {
            }
          })
    }, [])
  
 
    const traerDatos = () => {
        verificarToken(token).then((res) => {
            let todos_inputs = document.querySelectorAll('.form-control')
            todos_inputs.forEach((e) => {
                e.value = res[e.name]
            })
        })   
    }

    const handleForm = () => {
        let todos_inputs = document.querySelectorAll('.form-control')
        let ob = {}
        todos_inputs.forEach((e) => {
            ob[e.name] = e.value
        })
        delete ob.undefined
        controlar_form(ob)
    }

    return(
        <>
            <ToastContainer />
            

            {/* <!-- Checkout Start --> */}
            <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    <div class="col-lg-8">
                        <div class="mb-4">
                        <div>
                            <div className="subhead">Compras</div>
                            <h2 className="title-section">Finalizar Compra</h2>
                            <div className="divider"></div>
                        </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label>Nombre</label>
                                    <input class="form-control" type="text" placeholder="Loa" name='nombre'  />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Apellido</label>
                                    <input class="form-control" type="text" placeholder="Concept"  name='apellido' />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>DNI</label>
                                    <input class="form-control" type="number" placeholder="44123455"  name='dni' />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Email</label>
                                    <input class="form-control" type="text" placeholder="example@email.com"  name='email'/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Teléfono</label>
                                    <input class="form-control" type="text" placeholder="+54 9 11 2121 4545"  name='telefono' />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Provincia</label>
                                    <select class="custom-select form-control" name='direccion_provincia' >
                                        <option selected>Buenos Aires</option>
                                        <option>Catamarca</option>
                                        <option>Chaco</option>
                                        <option>Chubut</option>
                                        <option>Córdoba</option>
                                        <option>Corrientes</option>
                                        <option>Entre Ríos</option>
                                        <option>Formosa</option>
                                        <option>Jujuy</option>
                                        <option>La Pampa</option>
                                        <option>La Rioja</option>
                                        <option>Misiones</option>
                                        <option>Mendoza</option>
                                        <option>Neuquén</option>
                                        <option>Río Negro</option>
                                        <option>Salta</option>
                                        <option>San Juan</option>
                                        <option>San Luis</option>
                                        <option>Santa Cruz</option>
                                        <option>Santa Fe</option>
                                        <option>Santiago del estero</option>
                                        <option>Tierra del Fuego</option>
                                        <option>Tucumán</option>
                                    </select>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Localidad</label>
                                    <input class="form-control" type="text" placeholder="tu localidad"  name='direccion_localidad' />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Barrio</label>
                                    <input class="form-control" type="text" placeholder="tu barrio"  name='direccion_barrio' />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Calle y Altura</label>
                                    <input class="form-control" type="text" placeholder="tu direccion"  name='direccion_calles' />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Código postal</label>
                                    <input class="form-control" type="text" placeholder="tu direccion"  name='codigo_postal' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card  mb-5" style={{borderColor: '#d3d3d3 !important' }}>
                            <div class="card-header border-0 bg-slate-200" style={{background: '#d3d3d3 !important'}}>
                                <h4 class="font-weight-semi-bold m-0">Pedido</h4>
                            </div>
                            <div class="card-body">
                                <h5 class="font-weight-medium mb-3">Productos</h5>
                                {productos.map((e) => {
                                    return(
                                        <div class="d-flex justify-content-between">
                                            <p style={{width: '60%'}}>{e.nombre}</p>
                                            <p>{e.cantidad}</p>
                                            <p>${e.precio}</p>
                                        </div>
                                    )
                                })}
                                <hr class="mt-0"/>
                                <div class="d-flex justify-content-between mb-3 pt-1">
                                    <h6 class="font-weight-medium">Subtotal</h6>
                                     <h6 class="font-weight-medium">${productos.reduce((acc, item) => {
                                            return acc + item.precio * item.cantidad;
                                        }, 0)}</h6> 
                                </div>
                                {/* <div class="d-flex justify-content-between mb-3 pt-1">
                                    <h6 class="font-weight-medium">Cupon de descuento</h6>
                                     <h6 class="font-weight-medium">$0</h6> 
                                </div> */}
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-medium">Envío</h6>
                                    <h6 class="font-weight-medium">${productos.reduce((acc, item) => {
                                            return acc + Number(item.cantidad)
                                        }, 0) >= 3 ? 0 : 1550}
                                    </h6>
                                </div>
                            </div>
                            <div class="card-footer  bg-transparent">
                                <div class="d-flex justify-content-between mt-2">
                                    <h5 class="font-weight-bold">Total</h5>
                                    <h5 class="font-weight-bold"> ${productos.reduce((acc, item) => {
                                            return acc + Number(item.cantidad)
                                        }, 0) >= 3 ? total : total + 1550}
                                        </h5>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-5" style={{borderColor: '#d3d3d3 !important' }}>
                            <div>
                                <div class="card-header border-0" style={{background: '#d3d3d3 !important'}}>
                                    <h4 class="font-weight-semi-bold m-0">Realizar Pago</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" name="payment" id="paypal"  />
                                            <label class="custom-control-label" for="paypal">Mercado Pago</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" name="payment" id="directcheck" />
                                            <label class="custom-control-label" for="directcheck">Transferencia bancaria</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                             
                          
                            <button class="btn  boton_carrito botonfinalizar" onClick={(e) =>{
                                Swal.fire({
                                title: 'Su compra se realizo exitosamente! ',
                                text: 'Podra ver el seguimiento del pedido en su perfil',
                                width: 600,
                                padding: '3em',
                                color: '#716add',
                                background: '#fff url(/images/trees.png)',
                                backdrop: `
                                    rgba(0,0,123,0.4)
                                    url(${nyancat})
                                    left bottom
                                    no-repeat
                                `,
                                }) 
                                handleForm()
                                }} style={{width: '90%', marginLeft: '5%', marginBottom: '3%',backgroundColor: 'rgb(108, 85, 249)' , cursor: 'pointer'}}>Realizar Compra</button>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )}