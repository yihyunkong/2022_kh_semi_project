/********************* firebase 제공 스크립트 *********************/

///////////// firebase 연동 시작 /////////////
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";

    // firebase personal-key
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
    const analytics = getAnalytics(app);
    ////////////// firebase 연동 끝 //////////////

////////// firebase 회원가입 코드 시작 //////////
    // 회원가입 시 회원에게 주어지는 코드에 회원 정보 (email, password)
    //const auth = getAuth();
    // 회원가입 시 회원이 추가로 작성하는 정보를 전달
    const db = firebase.firestore();
    // 회원가입 시 회원이 선택한 이미지를 firebase의 storage에 저장
    const storage = firebase.storage();

    /********** 회원가입 이벤트 시작 **********/
    document.getElementById('signUpButton').addEventListener('click', (event) => {
        event.priventDefault(); // form 태그는 서버에 제공하는 순간 새로고침이 일어나기 때문에 preventDefaul를 사용하여 새로고침을 막는다.

        // email과 password 요소(id명)와 해당하는 값을 변수에 저장하기
        const signUpEmail = document.getElementById('signUpEmail').value;
        const signUpPassword = document.getElementById('signUpPassword').value;

        // 회원가입 시 작성하는 추가 정보 객체에 담아서 firestore에 저장
        const signUpName = document.getElementById('signUpName').value;
        const signUpTel = document.getElementById('signUpTel').value;
        const signUpBirth = document.getElementById('signUpBirth').value;

        // User 생성하기 (firebase에서 제공하는 api에는 email, password를 받는다.)
        createUserWithEmailAndPassword(signUpEmail, signUpPassword)
        // 회원가입 성공하면 실행되는 부분
        .then((userCredential) => {
            console.log(userCredential);
            const user = userCredential.user; // user 변수에 정보 저장
            
            // userInfo에 추가정보를 담기 
            const userInfo = {
                signUpName: signUpName,
                signUpTel: signUpTel,
                signUpBirth: signUpBirth,
            };
            
            db.collection('user').doc(result.user.uid).set(userInfo);
            
            console.log('회원가입 성공!');
        })
        // 회원가입 실패하면 실행되는 부분
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            console.log('회원가입 실패!');
        })
    })
