/*********************** fire base 연동하기 시작 ***********************/
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUA4G4enZB8-zJUgRUP_GipHN-vzrsxb0",
    authDomain: "kh-semi-terrgym.firebaseapp.com",
    projectId: "kh-semi-terrgym",
    storageBucket: "kh-semi-terrgym.appspot.com",
    messagingSenderId: "896184965835",
    appId: "1:896184965835:web:f8c569ac1347e61b8e594e",
    measurementId: "G-W8RPCSDZDG"
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app); // firebase 연결 되었는지 확인해보기 (app에 관한 정보를 불러온다.)
/************************ fire base 연동하기 끝 ************************/

/************************ fire base 회원가입 및 로그인 코드 시작 ************************/
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

// 회원가입 및 로그인 구현시 중복되는 코드는 함수 내부 로컬변수가 아닌 전역변수로 설정한다.
const auth = getAuth();

    /********* 로그인 이벤트 처리 시작 *********/
    document.getElementById('signInButton').addEventListener('click', (event) => {
        event.preventDefault();

        // email과 password의 요소(id명)와 해당하는 값(value)를 각 변수명에 저장한다.
        const signInEmail = document.getElementById('signInEmail').value;
        const signInPassword = document.getElementById('signInPassword').value;

        /***** 로그인 시 필요한 파라미터로 정보 받기 *****/
        signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                console.log('로그인 성공');
                alert('로그인 성공');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('로그인 실패');
                alert('로그인 실패');
            });

        console.log(signInEmail, signInPassword); // 회원가입 form에 작성한 정보를 가지고온다.
        console.log('로그인 버튼 클릭');
    });
    /********** 로그인 이벤트 처리 끝 **********/

/************************* fire base 회원가입 및 로그인 코드 끝 *************************/
