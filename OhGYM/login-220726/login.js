import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDUA4G4enZB8-zJUgRUP_GipHN-vzrsxb0",
    authDomain: "kh-semi-terrgym.firebaseapp.com",
    projectId: "kh-semi-terrgym",
    storageBucket: "kh-semi-terrgym.appspot.com",
    messagingSenderId: "896184965835",
    appId: "1:896184965835:web:f8c569ac1347e61b8e594e",
    measurementId: "G-W8RPCSDZDG"
};

const app = initializeApp(firebaseConfig);
console.log(app);


const auth = getAuth();


    document.getElementById('signInButton').addEventListener('click', (event) => {
        event.preventDefault();

        const signInEmail = document.getElementById('signInEmail').value;
        const signInPassword = document.getElementById('signInPassword').value;

        signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                console.log(signInEmail, signInPassword);
                console.log('로그인 성공');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                console.log('로그인 실패');
            });

    });
