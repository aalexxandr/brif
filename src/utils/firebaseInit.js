import firebase from "firebase"

!firebase.apps.length ?
  firebase.initializeApp({
    apiKey: "AIzaSyAgyljqA9DK7g_T05zqKP0Wv9I3I0EvE3E",
    authDomain: "brif-f73f9.firebaseapp.com",
    projectId: "brif-f73f9",
    storageBucket: "brif-f73f9.appspot.com",
    messagingSenderId: "147430468595",
    appId: "1:147430468595:web:84cc85f25d8441ea7c4086",
    measurementId: "G-F55NKZ5GMZ"
  }) :
  firebase.app()
  
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({
  'login_hint': 'alexxaandr.m@gmail.com'
})