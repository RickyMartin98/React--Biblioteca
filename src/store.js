import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
//import { reduxFirestore, firestoreReducer } from 'redux-firestore';
//import firebase from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/firestore';

import reducer from './reducers';
/** Custom Reducers */
// import buscarUsuarioReducer from './reducers/buscarUsuarioReducer';

// Configurar firestore.
const firebaseConfig = {}

// inicializar firebase
//firebase.initializeApp(firebaseConfig);

// configuracion de react-redux
/*const rrfConfig = {
    userProfile : 'users',
    useFirestoreForProfile: true
}*/

// crear el enhacer con compose de redux y firestore
/*const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);*/

// Reducers 
/*const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore: */
    // , usuario : buscarUsuarioReducer
//})

// state inicial
//const initialState = {};

// Create el store
/*const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));*/

//const store = createStore(  )
//export default store;

const store = createStore(
    reducer,
    compose (
        applyMiddleware(thunk),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

