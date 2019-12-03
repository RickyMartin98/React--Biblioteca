import { database2 } from '../firebase';

export const agregarSuscriptorAction = suscriptor => {
    return dispatch => {
        dispatch({
            type: 'AGREGAR_SUSCRIPTOR',
            payload: database2.push(suscriptor)
        })
    }
}

export const eliminarSuscriptorAction = id => {
    return dispatch => {
        dispatch({
            type: 'ELIMINAR_SUSCRIPTOR',
            payload: database2.child(id).remove()
        })
    }
}

export const modificarSuscriptorAction = id => {
    return {
        type: 'MODIFICAR_SUSCRIPTOR',
        payload: id
    }
}

export const obtenerSuscriptorAction = () => {
    return dispatch => {
        database2.on('value', snapshot => {
            dispatch({
                type: 'OBTENER_SUSCRIPTORES',
                /*payload: Object.values(snapshot.val()),
                id: Object.keys(snapshot.val())*/
                payload: {
                    suscriptor: Object.values(snapshot.val()),
                    id: Object.keys(snapshot.val())
                }
            })
        })
    }
}