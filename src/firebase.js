import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDAmEnX-xqbKhRv6HdEIRAhFCf9uUmcpkQ",
    authDomain: "react-todolist-51d51.firebaseapp.com",
    databaseURL: "https://react-todolist-51d51.firebaseio.com",
    projectId: "react-todolist-51d51",
    storageBucket: "react-todolist-51d51.appspot.com",
    messagingSenderId: "697009033884",
    appId: "1:697009033884:web:e6b7780041b166a1f05359"

});

export {firebaseConfig as firebase};