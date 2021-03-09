
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDn1C5oHr41bhnDRDWsdIEUIFVs-N9G54w",
    authDomain: "restaurants-7ad52.firebaseapp.com",
    projectId: "restaurants-7ad52",
    storageBucket: "restaurants-7ad52.appspot.com",
    messagingSenderId: "824738426006",
    appId: "1:824738426006:web:922cda01fa0916b2a266b7"
  }

export const firebaseApp = firebase.initializeApp(firebaseConfig);