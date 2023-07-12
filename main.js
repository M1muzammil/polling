// import { initializeApp } from"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getAuth,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyCgJ6TQng80sckOz8ZJa0m6linNJchBMxc",
        authDomain: "polling-app-93fd8.firebaseapp.com",
        projectId: "polling-app-93fd8",
        storageBucket: "polling-app-93fd8.appspot.com",
        messagingSenderId: "106198135913",
        appId: "1:106198135913:web:c025dc5e65dfa40fab9ef8",
        measurementId: "G-T82387CZRT"
    
      
};
firebase.initializeApp(firebaseConfig);

let login = document.getElementById('login');
login.addEventListener("click", (e) => {
  e.preventDefault(); // Fixed event variable name and prevent form submission

  let email = document.getElementById('email').value; // Moved email and password retrieval inside the event listener
  let password = document.getElementById('password').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Login successful");
      alert('Welcome!');
      window.location.href = "./polling/index.html";
    })
    .catch((error) => {
      console.log("Login error:", error);
      // Handle login error here
      alert('Login error. Please check your credentials.');
    });
});




// login.addEventListener("click", () => {
//   signInWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       alert('mubarak ho');
//       window.location = "./polling/index.html";
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert('masla');
//     });
// });