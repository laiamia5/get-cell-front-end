import axios from 'axios';
let url = process.env.REACT_APP_BACKEND_URL


/////////////////////// OBTENER TODOS LOS PRODUCTOS //////////////////////////////


export const obtener_productos = async () => {
    let resp;
    await axios
    .get(`${url}/productos`)
    .then((res) => resp = res.data)
    .catch((err) => resp = undefined)
    return resp
}

export const buscar_producto_por = async (nombre, categoria) => {
    let urlSearch;
    console.log(nombre, categoria);

    if (nombre && categoria) urlSearch = `${url}/productos/buscar?nombre=${nombre}&categoria=${categoria}`;
    else if (nombre && !categoria) urlSearch = `${url}/productos/buscar?nombre=${nombre}`;
    else if (!nombre && categoria) urlSearch = `${url}/productos/buscar?categoria=${categoria}`;
    else urlSearch = `${url}/productos/buscar`;

    try {
        const response = await axios.get(urlSearch);
        console.log(urlSearch);
        return response.data;
    } catch (error) {
        // Manejo de errores de conexión u otros errores
        console.error('Error al obtener los datos:', error);

        

        // Devuelve un valor para indicar que ocurrió un error
        return undefined;
    }
};

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
    })
    .catch((err) => console.log(err) )
    return respo
}


//////////////////////////VER SI ES ADMIN/////////////////////////////////


export const asegurarAdmin = async (id) => {
    let respo 
    await axios.get(`${url}/usuarios/esAdmin/${id}`, )
    .then((resp) => {
        respo = resp.data
    })
    .catch((err) => console.log(err) )
    return respo
}

////////////////////////////ENVIAR MENSAJE A LA EMPRESA NODE MAILER///////////////////

export const enviarMail = async (obj) => {
    let respo 
    await axios.post(`${url}/usuarios/envio-mail`, obj)
    .then((resp) => {
        respo = resp.data
    })
    .catch((err) => console.log(err) )
    return respo
}


/////////////////////subscribirse//////////////////////////////////////

export const subscribirse = async (obj) => {
    let respo 
    await axios.post(`${url}/subscribe`, obj)
    .then((resp) => {
        respo = resp.data
    })
    .catch((err) => console.log(err) )
    return respo
}

//////////////////ver que no este vacio ////////////////////////////

export const isEmpty = async (txt) => {
    if(txt.length === 0) return false
    else return true
}

export const reducir = async (obj) => {
    let cuenta = await obj.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    return cuenta
}

//////////////////traer datos del perfil ////////////////////////////

