import React from "react";
import '../styles/nav.css'
import '../assets/css/maicons.css'
import '../assets/css/theme.css'
import "../assets/css/bootstrap.css"
import "../assets/vendor/animate/animate.css"

export default function Contacto (){
    return(
        <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3 wow fadeInUp">
              <h2 className="title-section">Get in Touch</h2>
              <div className="divider"></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Laborum ratione autem quidem veritatis!</p>
    
              <ul className="contact-list">
                <li>
                  <div className="icon"><span className="mai-map"></span></div>
                  <div className="content">123 Fake Street, New York, USA</div>
                </li>
                <li>
                  <div className="icon"><span className="mai-mail"></span></div>
                  <div className="content"><a href="#">info@digigram.com</a></div>
                </li>
                <li>
                  <div className="icon"><span className="mai-phone-portrait"></span></div>
                  <div className="content"><a href="#">+00 1122 3344 55</a></div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 py-3 wow fadeInUp">
              <div className="subhead">Contact Us</div>
              <h2 className="title-section">Drop Us a Line</h2>
              <div className="divider"></div>
              
              <form action="#">
                <div className="py-2">
                  <input type="text" className="form-control" placeholder="Full name"/>
                </div>
                <div className="py-2">
                  <input type="text" className="form-control" placeholder="Email"/>
                </div>
                <div className="py-2">
                  <textarea rows="6" className="form-control" placeholder="Enter message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary rounded-pill mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div> 
      </div> 
    )
}