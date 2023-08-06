import {
    AGREGAR_AL_CARRITO,
    ELIMINAR_DEL_CARRITO,
    FINALIZAR_Y_VACIAR,
    DISMINUIR_CANTIDAD,
    ALTERAR_CANTIDAD,
    GENERAR_TOKEN,
    GUARDAR_CUPON
} from './actions'

const initialState = {
    carrito: [],
    token : '',
    cupon: ''
}



const reducer = (state = initialState, action) => {
    switch(action.type){
        case AGREGAR_AL_CARRITO :
            localStorage.setItem('carrito', JSON.stringify(state.carrito))
            let encuentro = state.carrito.find((e) => e.id === action.payload.id)
            if(encuentro){
                encuentro.cantidad ++
                return{
                    ...state,
                    carrito: [ ...state.carrito]
                }
            }else{
                return {
                    ...state,
                    carrito:[ ...state.carrito, action.payload]
                }
            }
        case ELIMINAR_DEL_CARRITO :
                return{
                    ...state,
                    carrito: state.carrito.filter((e) => e.id !== action.payload)
                }
        case FINALIZAR_Y_VACIAR: 
                return{
                    ...state,
                    carrito: []
                }
        case DISMINUIR_CANTIDAD :
            let encontrar = state.carrito.find((e) => e.id === action.payload)
            encontrar.cantidad --
            return{
                ...state,
                carrito: Math.sign(encontrar.cantidad) !== 1 ? state.carrito.filter((e) => e.id !== action.payload ) : [...state.carrito]
            }
        case ALTERAR_CANTIDAD :
            let ubicar = state.carrito.find((e) => e.id === action.payload.id)
            ubicar.cantidad = action.payload.cantidad
            return state
        case GENERAR_TOKEN:
            sessionStorage.setItem("usuario", action.payload)
            return{
                ...state,
                token: action.payload
            }
        case GUARDAR_CUPON:
            return{
                ...state,
                cupon: action.payload
            }
        default : 
            return state
    }
}

export default reducer;