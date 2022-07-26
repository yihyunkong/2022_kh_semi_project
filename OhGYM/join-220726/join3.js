/******************* firebase v9 - web : module *******************/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

////////////////// firebaseConfig
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

////////////////// 이메일로 비밀번호 기반 계정 만들기
////////////////// 아이디 - 비밀번호 외 추가 입력사항은 firestore
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

const auth = getAuth(); // 아이디 - 비밀번호 저장
const db = getFirestore(app); // 추가 입력사항 저장

////////////////// 회원가입 이벤트 처리
// 가입 버튼을 눌렀을 때, signUpEmail에 들어오는 값과 signUpPassword에 들어오는 값이 firebase에 전달되어야한다.
document.getElementById('signUpButton').addEventListener('click', (event) => {
    event.preventDefault();
    
    const signUpEmail = document.getElementById('signUpEmail').value;
    const signUpPassword = document.getElementById('signUpPassword').value;
    const signUpName = document.getElementById('signUpName').value;
    const signUpTel = document.getElementById('signUpTel').value;
    const signUpBirth = document.getElementById('signUpBirth').value;

    // 이메일, 비밀번호늘 athentication에 저장
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("아이디, 비밀번호 => " + signUpEmail, signUpPassword);

            try {
                const docRef = addDoc(collection(db, "user"), {
                    signUpName: signUpName,
                    signUpTel: signUpTel,
                    signUpBirth: signUpBirth
                });

                console.log(docRef.id);
                console.log("추가 정보 firestore에 저장 성공 !");
            } catch (error) {
                console.log(error);
                console.log("추가 정보 firestore에 저장 실패 !");
            };

            console.log("회원가입 성공 !");
            
            // 여기서 페이징 처리 !! (회원가입이 성공하면 회원가입 성공 화면으로)
            window.onload()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("회원가입 실패 !");
            console.log(errorMessage);
        });
});
