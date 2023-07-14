import axios from 'axios';
let url = process.env.REACT_APP_BACKEND_URL


/////////////////////// OBTENER TODOS LOS PRODUCTOS //////////////////////////////


export const obtener_productos = async () => {
    let resp;
    await axios
    .get(`${url}/productos`)
    .then((res) => resp = res.data)
    .catch((err) => console.log(err))
    return resp
}

export const buscar_producto_por = async (nombre, categoria) => {
    let urlSearch;
    let response;

    if(nombre && categoria) urlSearch = `${url}/productos/buscar?nombre=${nombre}&categoria=${categoria}`
    else if(nombre && !categoria) urlSearch = `${url}/productos/buscar?nombre=${nombre}`
    else if(!nombre && categoria ) urlSearch = `${url}/productos/buscar?categoria=${categoria}`
    else  urlSearch = `${url}/productos/buscar`

    await axios
    .get(urlSearch)
    .then((res) => response = res.data)
    .catch((err) => console.log(err))
    return response
}

export const obtener_un_producto = async (id) => {
    let response;
        await axios.get(`${url}/productos/${id}`)
        .then((res) => {
            response = res.data
        })
        .catch((err) => console.log(err) )
        return response
}


// ======================================USUARIOS====================================================


export const crear_usuario = async (obj) => {
    console.log(obj)
    obj['dni'] = Number(obj.dni)

    let response;
    await axios.post(`${url}/usuarios/signup`, obj)
    .then((res) => {
        response = res.data
    })
    .catch((err) => console.log(err.message) )
    return response
}

export const iniciarSesionCon = async (obj) => {
    console.log(obj)
    let respo 
    await axios.post(`${url}/usuarios/signin`, obj)
    .then((res) => {
        respo = res.data
    })
    .catch((err) => console.log(err) )
    return respo
}

export const verificarToken = async (token) => {
    let respo 
    await axios.get(`${url}/usuarios/perfil/${token}`)
    .then((res) => {
        respo = res.data
        console.log(res.data)
    })
    .catch((err) => console.log(err) )
    return respo
}