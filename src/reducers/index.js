import {  combineReducers } from 'redux';

//Importing reducers
import suscriptoresReducer from './suscriptoresReducer';

export default combineReducers({
    suscriptores: suscriptoresReducer
});