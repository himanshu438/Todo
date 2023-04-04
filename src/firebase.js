import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC14FzQ3JE0v2Ugjjx8hilgu4qgkUbp0To",
    authDomain: "todo-app-hk438.firebaseapp.com",
    projectId: "todo-app-hk438",
    storageBucket: "todo-app-hk438.appspot.com",
    messagingSenderId: "226453378893",
    appId: "1:226453378893:web:428dbace68bf460defc904",
    measurementId: "G-419LQ9H549"
});

const db = firebaseApp.firestore();


export default db;
