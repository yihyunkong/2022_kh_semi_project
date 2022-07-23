/***************************** firebase 연동 시작 *****************************/
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


    const firebaseConfig = {
        apiKey: "AIzaSyApLlyL58_7Uh0dsUXeAtNSa6P-EQxrThs",
        authDomain: "kh-semi-ohgym.firebaseapp.com",
        databaseURL: "https://kh-semi-ohgym-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "kh-semi-ohgym",
        storageBucket: "kh-semi-ohgym.appspot.com",
        messagingSenderId: "155977779626",
        appId: "1:155977779626:web:31628e80f6a56d3c0a43d3"
    };
    firebase.initializeApp(firebaseConfig);

    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
/***************************** firebase 연동 끝 *****************************/

/************************** firebase에 정보 전달 시작 *************************/
    const userDB = firebase.firestore();
    const imgStorage = firebase.storage();

    $("#signUpButton").click(function() {
        const file = document.querySelector("#image").files[0];
        const storageRef = imgStorage.ref();
        const storagePath = storageRef.child("image/" + file.name);
        const uploadImg = storagePath.put(file);

        uploadImg.on("state_change", null, (error) => {
            console.log(error);
        },
        () => {
            uploadImg.snapshot.ref.getDownloadURL()
            .then((url) => {
                console.log(url);
            })
        }
        );

        const signUpEmail = $("#signUpEmail").val();
        const signUpPassword = $("#signUpPassword").val();
        const signUpName = $("#signUpName").val();
        const signUpTel = $("#signUpTel").val();
        const signUpBirth = $("#signUpBirth").val();


        firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword)
        .then((result) => {
            console.log(result.user);
            console.log("회원가입 성공");

            const userInfo = {
                signUpEmail: signUpEmail,
                signUpName: signUpName,
                signUpTel: signUpTel,
                signUpBirth: signUpBirth,
            };

            userDB.collection("user").doc(result.user.uid).set(userInfo);
        })
        .catche((erorr) => {
            console.log(error);
        })
    });