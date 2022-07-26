import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyApLlyL58_7Uh0dsUXeAtNSa6P-EQxrThs",
    authDomain: "kh-semi-ohgym.firebaseapp.com",
    databaseURL: "https://kh-semi-ohgym-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kh-semi-ohgym",
    storageBucket: "kh-semi-ohgym.appspot.com",
    messagingSenderId: "155977779626",
    appId: "1:155977779626:web:31628e80f6a56d3c0a43d3"
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

                // 로그인 성공하면 home.html로 이동
                //location.href="OhGYM/home-220719/home.html";

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                console.log('로그인 실패');
            });

    });
