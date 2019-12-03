import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAoqPCeOCzl3AghKT3uBUoBpawh8jJLTY",
    authDomain: "bibliotehiper.firebaseapp.com",
    databaseURL: "https://bibliotehiper.firebaseio.com",
    projectId: "bibliotehiper",
    storageBucket: "bibliotehiper.appspot.com",
    messagingSenderId: "933035373031",
    appId: "1:933035373031:web:7519efc9c15e8bf6fd8d42",
    measurementId: "G-M5TFHV89PH"
  };
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database().ref('/libros');
  export const database2 = firebase.database().ref('/suscriptores');