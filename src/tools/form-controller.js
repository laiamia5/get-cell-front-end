import axios from 'axios'
import { verificarToken } from './peticiones'
const host = process.env.REACT_APP_BACKEND_URL

export const controlarFormulario = async (datos, token) => {
let tokendni;
  await verificarToken(token).then((res) =>{ 
    tokendni = String(res.dni)
  })

    let obj = {
      nombre : false,
      apellido: false,
      dni: false,
      email: false,
      telefono: false,
      direccion_calles: false,
      direccion_localidad: false,
      direccion_provincia: false,
      codigo_postal: false
    }
      let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      
      if(!emailRegex.test(datos.email) || datos.email.length == 0) return 'el formato de "email" no es válido'
      else obj.email = true
      if(datos.nombre.length == 0)  return 'El campo "nombre" es obligatorio'
      else obj.nombre = true
      if(datos.apellido.length == 0) return  'El campo "apellido" es obligatorio'
      else obj.apellido = true
      if(datos.telefono.length == 0)  return 'El campo "teléfono" es obligatorio'
      else obj.telefono = true
      if(datos.direccion_provincia.length == 0)  return 'El campo "Provincia" es obligatorio'
      else obj.direccion_provincia = true
      if(datos.direccion_localidad.length == 0)  return 'El campo "localidad" es obligatorio'
      else obj.direccion_localidad = true
      if(datos.direccion_calles.length == 0)  return 'El campo "calle y altura" es obligatorio'
      else obj.direccion_calles = true
      if(datos.dni.length !== 8 || datos.dni == 0) return  'el campo dni debe tener 8 caracteres'
      if(tokendni !== datos.dni) return 'el campo "dni" no es el mismo con el que se registro'
      else obj.dni = true
      if(datos.codigo_postal.length === 0) return 'El campo "código postal" es obligatorio'
      else obj.codigo_postal = true
  
      let valores =  Object.values(obj) //array de valor del objeto
      if( valores.includes(false) ) return false
      else {
        completarDatosUsuario(datos)
        return true
      }
  }


const completarDatosUsuario = (usuario) => {
  const usu = {				
    direccion_barrio: usuario.direccion_barrio,
    direccion_calles: usuario.direccion_calles,
    direccion_localidad: usuario.direccion_localidad,
    direccion_provincia: usuario.direccion_provincia,
    telefono: usuario.telefono,
    codigo_postal: usuario.codigo_postal
  }

  axios.get(`${host}/usuarios/buscar/${usuario.dni}`)
      .then((res) => {
        axios.put(`${host}/usuarios/${res.data.id}`, usu)
      })
  }