const firebase = require("firebase")
var firebaseConfig = {
    apiKey: "AIzaSyAZwINID8sGLSifuv-b7Jamo7hom18QDLc",
    authDomain: "thelawchallenge.firebaseapp.com",
    databaseURL: "https://thelawchallenge.firebaseio.com",
    projectId: "thelawchallenge",
    storageBucket: "thelawchallenge.appspot.com",
    messagingSenderId: "714054359026",
    appId: "1:714054359026:web:c81122eac456f042"
};
// Initialize Firebase
const config = firebase.initializeApp(firebaseConfig);
module.exports = config;