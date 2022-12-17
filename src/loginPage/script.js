// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getAuth , signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'

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
const auth = getAuth(app)


document.querySelector("#signIn").addEventListener("click", function(){
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    // ...
    
    console.log('user Logado')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo deu errado',
      footer: `<label>Contate o administrador! ${errorMessage}</label>`,
      timer: 2000
    })
  });
})
