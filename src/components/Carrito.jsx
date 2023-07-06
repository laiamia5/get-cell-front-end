import React from "react";
import '../styles/carrito.css'

export default function Carrito (){
    return(
        <>
        <div id="app">
            <header class="container">
            <h1>Shopping Cart</h1>
            <ul class="breadcrumb carrito_ul">
                <li>Home</li>
                <li>Shopping Cart</li>
            </ul>
            <span class="count"> items in the bag</span>
            </header>

        <section class="container">
            <div v-if="products.length > 0">
                <ul class="products carrito_ul">
                    <li class="row" v-for="(product, index) in products">
                        <div class="col left">
                            <div class="thumbnail">
                            <a href="#" className="carrito_a">
                                {/* <img :src="product.image" :alt="product.name" /> */}
                            </a>
                            </div>
                            <div class="detail">
                            <div class="name"><a href="#" className="carrito_a">samsung galaxy g5</a></div>
                            <div class="description">lorem ipsum dolor bla cgxckd gdgkd</div>
                            <div class="price">$778</div>
                            </div>
                        </div>

                        <div class="col right">
                            <div class="quantity">
                            <input type="number" class="quantity carrito_input" step="1"  />
                            </div>
                            
                            <div class="remove">
                            {/* <svg version="1.1" class="close" xmlns="//www.w3.org/2000/svg" xmlns:xlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve"><polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon></svg> */}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-else class="empty-product">
                <h3>There are no products in your cart.</h3>
                <button className="carrito_boton">Shopping now</button>
            </div>
        </section>

            <section class="container" v-if="products.length > 0">
            <div class="promotion">
                <label for="promo-code">Have A Promo Code?</label>
                <input type="text" id="promo-code" v-model="promoCode" className="carrito_input"/> <button className="carrito_boton" type="button"></button>
            </div>

            <div class="summary">
                <ul className="carrito_ul">
                <li>Subtotal <span>$8000</span></li>
                <li v-if="discount > 0">Discount <span>$660</span></li>
                <li>Tax <span>$50</span></li>
                <li class="total">Total <span>$400</span></li>
                </ul>
            </div>

            <div class="checkout">
                <button className="carrito_boton" type="button">Check Out</button>
            </div>
            </section>
            </div>
        </>
    )
}