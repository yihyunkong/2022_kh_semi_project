    // <!-------------------------------- fire base 스크립트 ------------------------------ -->
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
        /************************ fire base 연동하기 끝 ************************/

        /************************ fire base 회원가입 시작 ************************/
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

        // 회원가입 및 로그인 구현시 중복되는 코드는 함수 내부 로컬변수가 아닌 전역변수로 설정한다.
        const auth = getAuth(); // auth라는 변수를 사용하여 getAuth() 함수 실행 (firebase에서 제공하는 api)

            /******** 회원가입 이벤트 처리 시작 ********/
            document.getElementById('signUpButton').addEventListener('click', (event) => { // document는 body 태그 중 하나를 의미한다. 
                event.preventDefault(); // form 태그는 서버에 제공하는 순간 새로고침이 일어나는데, preventDefault를 통해 새로고침을 막을 수 있다.
                
                // email과 password의 요소(id명)와 해당하는 값(value)를 각 변수명에 저장한다.
                const signUpEmail = document.getElementById('signUpEmail').value;
                const signUpPassword = document.getElementById('signUpPassword').value;
                const signUpName = document.getElementById('signUpName').value;
                const signUpTel = document.getElementById('signUpTel').value;
                const signUpBirth = document.getElementById('signUpBirth').value;

                /***** 회원가입 시 필요한 파라미터로 정보 받기 *****/
                // 위의 const 변수를 아래 createUserWithEmailAndPassword 함수의 parameter 값으로 받아온다.
                createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword, signUpName, signUpTel, signUpBirth) // email과 password로 user를 생성 (변수 auth와 email, password를 파라미터로 전달 - 회원 가입 화면 내의 email, password를 전달 받으면 아래의 함수가 실행된다.) 
                    // java의 try-catch문과 비슷하다.
                    .then((userCredential) => { // 회원가입 성공되었다면 이 부분이 실행 (.then)
                        console.log(userCredential);
                        // Signed in
                        const user = userCredential.user;
                        // ...
                        console.log('회원가입 성공');
                    })
                    .catch((error) => { // 회원가입이 실패했다겸 이 부분이 실행된다. (.catch)
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                        console.log('회원가입 실패');
                    });
                
                console.log(signUpEmail, signUpPassword, signUpName, signUpTel, signUpBirth); // 회원가입 form에 작성한 정보를 가지고온다.
                console.log('회원가입 버튼 클릭 성공');
                console.log(createUserWithEmailAndPassword);
            });
            /********* 회원가입 이벤트 처리 끝 *********/
        /************************* fire base 회원가입 및 로그인 코드 끝 *************************/

        console.log(app); // firebase 연결 되었는지 확인해보기 (app에 관한 정보를 불러온다.)
    // <!-------------------------------- fire base 스크립트 ------------------------------ -->