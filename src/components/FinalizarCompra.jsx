import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom";

export default function FinalizarCompra (){
  
    const handleForm = (propi, value) => {//setea los valores corriespondientes en el estado datos
        // let copiaDatos = datos
        // delete copiaDatos.undefined
        // copiaDatos[propi] =  value
        // setDatos(copiaDatos)
        // console.log(copiaDatos)
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
                                    <input class="form-control" type="text" placeholder="Loa" name='nombre' onChange={(e) => handleForm(e.target.name, e.target.value)} />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Apellido</label>
                                    <input class="form-control" type="text" placeholder="Concept"  name='apellido' onChange={(e) => handleForm(e.target.name, e.target.value) }/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>DNI</label>
                                    <input class="form-control" type="number" placeholder="44123455"  name='dni' onChange={(e) => handleForm(e.target.name, e.target.value) }/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Email</label>
                                    <input class="form-control" type="text" placeholder="example@email.com"  name='email' onChange={(e) => handleForm(e.target.name, e.target.value) }/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Teléfono</label>
                                    <input class="form-control" type="text" placeholder="+54 9 11 2121 4545"  name='telefono' onChange={(e) => handleForm(e.target.name, e.target.value)}/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Provincia</label>
                                    <select class="custom-select" name='direccion_provincia' onChange={(e) => handleForm(e.target.name, e.target.value) }>
                                        <option selected>Buenos Aires</option>
                                        <option>La Pampa</option>
                                        <option>Corrientes</option>
                                        <option>Santa Fe</option>
                                        <option>Tucuman</option>
                                    </select>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Localidad</label>
                                    <input class="form-control" type="text" placeholder="tu localidad"  name='direccion_localidad' onChange={(e) => handleForm(e.target.name, e.target.value) }/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Barrio</label>
                                    <input class="form-control" type="text" placeholder="tu barrio"  name='direccion_barrio' onChange={(e) => handleForm(e.target.name, e.target.value) }/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Calle y Altura</label>
                                    <input class="form-control" type="text" placeholder="tu direccion"  name='direccion_calles' onChange={(e) => handleForm(e.target.name, e.target.value) }/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Código postal</label>
                                    <input class="form-control" type="text" placeholder="tu direccion"  name='codigo_postal' onChange={(e) => handleForm(e.target.name, e.target.value) }/>
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
                                {/* {carritoCompleto.map((e) => { */}
                                    {/* return( */}
                                        <div class="d-flex justify-content-between">
                                            <p>lala</p>
                                            <p>lalala</p>
                                            <p>$999</p>
                                        </div>
                                    {/* ) */}
                                {/* })} */}
                                <hr class="mt-0"/>
                                <div class="d-flex justify-content-between mb-3 pt-1">
                                    <h6 class="font-weight-medium">Subtotal</h6>
                                     <h6 class="font-weight-medium">$666{/*${carritoCompleto.reduce((acc, item) => {
                                            return acc + item.precio * item.cantidad;
                                        }, 0)}*/}</h6> 
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-medium">Envío</h6>
                                    <h6 class="font-weight-medium">$999
                                    </h6>
                                </div>
                            </div>
                            <div class="card-footer  bg-transparent">
                                <div class="d-flex justify-content-between mt-2">
                                    <h5 class="font-weight-bold">Total</h5>
                                    <h5 class="font-weight-bold"> $555
                                        {/* ${
                                    carritoCompleto.length === 0 ? 0 : carritoCompleto.reduce((acc, item) => {
                                            return acc + item.precio * item.cantidad;
                                        }, envio)} */}
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
                                             
                          
                            <button class="btn  boton_carrito" disabled style={{width: '90%', marginLeft: '5%', marginBottom: '3%',backgroundColor: '#3300ff' , cursor: 'pointer'}}>Realizar Compra</button>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )}