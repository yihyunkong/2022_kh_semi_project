/***************************** firebase 연동 시작 *****************************/
    import { initializeApp } from 'firebase/app';
    import { getAnalytics } from 'firebase/analytics';
    import { getFirestore } from 'firebase/firestore';
    import { getStorage } from 'firebase/storage';
    
    // firebase personal-key
    const firebaseConfig = {
        apiKey: "AIzaSyApLlyL58_7Uh0dsUXeAtNSa6P-EQxrThs",
        authDomain: "kh-semi-ohgym.firebaseapp.com",
        databaseURL: "https://kh-semi-ohgym-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "kh-semi-ohgym",
        storageBucket: "kh-semi-ohgym.appspot.com",
        messagingSenderId: "155977779626",
        appId: "1:155977779626:web:31628e80f6a56d3c0a43d3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);
    const storage = getStorage();
    /***************************** firebase 연동 끝 *****************************/
    
    /************************** firebase에 정보 전달 시작 *************************/
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
    
    const auth = getAuth();

    $("#signUpButton").click(function() {
        const file = document.querySelector("#image").files[0];
        const storageRef = storage.ref();
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


        createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((result) => {
            console.log(result.user);
            console.log("회원가입 성공");

            const userInfo = {
                signUpEmail: signUpEmail,
                signUpName: signUpName,
                signUpTel: signUpTel,
                signUpBirth: signUpBirth,
            };

            db.collection("user").doc(result.user.uid).set(userInfo);
        })
        .catche((erorr) => {
            console.log(error);
        })
    });