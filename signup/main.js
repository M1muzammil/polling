import { initializeApp } from"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyCgJ6TQng80sckOz8ZJa0m6linNJchBMxc",
        authDomain: "polling-app-93fd8.firebaseapp.com",
        projectId: "polling-app-93fd8",
        storageBucket: "polling-app-93fd8.appspot.com",
        messagingSenderId: "106198135913",
        appId: "1:106198135913:web:c025dc5e65dfa40fab9ef8",
        measurementId: "G-T82387CZRT"
    
      
};
const app = initializeApp(firebaseConfig);
let createUser = document.getElementById('createUser')


let email = document.getElementById('email')
let password = document.getElementById('password')

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
createUser.addEventListener('click', ()=> {
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('user created')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
})
