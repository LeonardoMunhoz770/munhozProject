// Import the functions you need from the SDKs you need
import { initializeApp } from "../../node_modules/firebase/app";
import { getAnalytics } from "../../node_modules/firebase/analytics";
import {getAuth} from '../../node_modules/firebase/auth'
import {getFirestore} from '../../node_modules/firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOlT14t6xitBu_KhE-x83ELFQU5hXOB0s",
  authDomain: "munhozproject.firebaseapp.com",
  projectId: "munhozproject",
  storageBucket: "munhozproject.appspot.com",
  messagingSenderId: "208927359389",
  appId: "1:208927359389:web:449b0eac9c5515b2b86f74",
  measurementId: "G-8GJ5GE4HPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
setTimeout(function(){
  auth.signInWithPopup(provider)
}, 3000)


auth.onAuthStateChanged((val) =>{
  if(val){
    alert('logado com sucesso')
    
  }
})