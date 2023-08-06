import React from "react";
import '../styles/nav.css'
import '../assets/css/maicons.css'
import '../assets/css/theme.css'
import "../assets/css/bootstrap.css"
import "../assets/vendor/animate/animate.css"
import { useState } from "react";
import { enviarMail } from "../tools/peticiones";

export default function Contacto (){
  const [mensaje, setMensaje] = useState({
    asunto: '',
    mensaje: '',
    email: '',
    destino: 'empresa'
  })

  const handleForm = (propi, value) => {//setea los valores corriespondientes en el estado datos
    let copiaDatos = mensaje
    // delete copiaDatos.undefined
    copiaDatos[propi] = value
    setMensaje(copiaDatos)
    console.log(copiaDatos)
}
    return(
        <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3 wow fadeInUp">
              <h2 className="title-section">Nuestros contactos</h2>
              <div className="divider"></div>
              <p>por cualquier inquietud, consulta o problema <br/> puede mantenerse en contacto con nosotros!</p>
    
              <ul className="contact-list">
                <li>
                  <div className="icon"><span className="mai-map"></span></div>
                  <div className="content">Buenos Aires, Pilar</div>
                </li>
                <li>
                  <div className="icon"><span className="mai-mail"></span></div>
                  <div className="content"><a href="#">getcell.original@gmail.com</a></div>
                </li>
                <li>
                  <div className="icon"><span className="mai-phone-portrait"></span></div>
                  <div className="content"><a href="#">+54 9 11 5644 9259</a></div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 py-3 wow fadeInUp">
              <div className="subhead">Contactanos</div>
              <h2 className="title-section">Dejanos tu mensaje!</h2>
              <div className="divider"></div>
              
              <form action="#">
                <div className="py-2">
                  <input type="text" className="form-control" placeholder="Email" name="email" onChange={(e) => handleForm(e.target.name, e.target.value)}/>
                </div>
                <div className="py-2">
                  <input type="text" className="form-control" placeholder="asunto" name="asunto" onChange={(e) => handleForm(e.target.name, e.target.value)}/>
                </div>
                <div className="py-2">
                  <textarea rows="6" className="form-control" placeholder="escriba el mensaje" name="mensaje" onChange={(e) => handleForm(e.target.name, e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary rounded-pill mt-4" onClick={() => enviarMail(mensaje)}>Send Message</button>
              </form>
            </div>
          </div>
        </div> 
      </div> 
    )
}