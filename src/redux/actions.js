export const AGREGAR_AL_CARRITO = 'AGREGAR_AL_CARRITO'
export const ELIMINAR_DEL_CARRITO = 'ELIMINAR_DEL_CARRITO'
export const DISMINUIR_CANTIDAD = 'DISMINUIR_CANTIDAD'
export const FINALIZAR_Y_VACIAR = 'FINALIZAR_Y_VACIAR'
export const ALTERAR_CANTIDAD = 'ALTERAR_CANTIDAD'

export const agregar_al_carrito = (obj) => async (dispatch) => {
    let newOb = {
        ...obj,
        cantidad: obj.cantidad ? obj.cantidad : 1,
    }
    return dispatch({type:AGREGAR_AL_CARRITO, payload: newOb})
}

export const eliminar_del_carrito = (id) => async (dispatch) => {
    return dispatch({type: ELIMINAR_DEL_CARRITO, payload: id})
}

export const disminuir_cantidad = (id) => async (dispatch) => {
    return dispatch({type: DISMINUIR_CANTIDAD, payload: id})
}

export const finalizar_y_vaciar = () => async (dispatch) => {
    return dispatch({type: FINALIZAR_Y_VACIAR, payload: 'si'})
}

export const alterar_cantidad = (id, cantidad) => async (dispatch) => {
    return dispatch({type: ALTERAR_CANTIDAD , payload: {id, cantidad}})
}