import {
    AGREGAR_AL_CARRITO,
    ELIMINAR_DEL_CARRITO,
    FINALIZAR_Y_VACIAR,
    DISMINUIR_CANTIDAD
} from './actions'

const initialState = {
    carrito: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case AGREGAR_AL_CARRITO :
            let encuentro = state.carrito.find((e) => e.id === action.payload.id)
            if(encuentro){
                encuentro.cantidad ++
                return{
                    // ...state
                    carrito: [ ...state.carrito]
                }
            }else{
                return {
                    // ...state,
                    carrito:[ ...state.carrito, action.payload]
                }
            }
        case ELIMINAR_DEL_CARRITO :
                return{
                    // ...state,
                    carrito: state.carrito.filter((e) => e.id !== action.payload)
                }
        case FINALIZAR_Y_VACIAR: 
                return{
                    // ...state,
                    carrito: []
                }
        case DISMINUIR_CANTIDAD :
            let encontrar = state.carrito.find((e) => e.id === action.payload)
            encontrar.cantidad --
            return{
                // ...state,
                carrito: Math.sign(encontrar.cantidad) !== 1 ? state.carrito.filter((e) => e.id !== action.payload ) : [...state.carrito]
            }
        default : 
            return state
    }
}

export default reducer;