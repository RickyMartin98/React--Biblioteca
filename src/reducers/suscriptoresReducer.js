import { stat } from "fs";

const initialState = {
    suscriptores: []
};
/*const initialState = {
   // suscriptores: []
  suscriptores: []
};*/

export default function (state = initialState, action) {
    switch (action.type) {
        case 'OBTENER_SUSCRIPTORES':
            return {...state, 
                suscriptores: action.payload
                }
        case 'AGREGAR_SUSCRIPTOR':
            return {
                ...state,
                suscriptores: action.payload
            }
        case 'ELIMINAR_SUSCRIPTOR':
            return {
                ...state,
                suscriptores: action.payload
            }
        case 'MODIFICAR_SUSCRIPTOR':
            return {
                
            } 
        default:
            return state;           
    }
}