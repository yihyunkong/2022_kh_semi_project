
// firebase personal code
const firebaseConfig = {
    apiKey: "AIzaSyDUA4G4enZB8-zJUgRUP_GipHN-vzrsxb0",
    authDomain: "kh-semi-terrgym.firebaseapp.com",
    databaseURL: "https://kh-semi-terrgym-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kh-semi-terrgym",
    storageBucket: "kh-semi-terrgym.appspot.com",
    messagingSenderId: "896184965835",
    appId: "1:896184965835:web:f8c569ac1347e61b8e594e",
    measurementId: "G-W8RPCSDZDG"
};
firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();
const storage = firebase.storage();

$("#signUpButton").click(function() {
    const file = document.querySelector("#image").files[0];
    const storageRef = storage.ref();
    const storagePath = storageRef.child("image/" + file.name);
    const uploadImg = storagePath.put(file);

    uploadImg.on("#state_chagnge"), null, (error) => {
        console.log(error);
    },
    () => {
        uploadImg.snapshot.ref.getDownloadURL()
        .then((url) => {
            console.log(url);
        })
    }
    const signUpEmail = $("signUpEmail").val();
    const signUpPassword = $("signUpPassword").val();
    const signUpName = $("signUpName").val();
    const signUpTel = $("signUpTel").val();
    const signUpBirth = $("signUpBirth").val();

    firebase.auth().creatUserWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((result) => {
        console.log(result.user);

        const userInfo = {
            signUpEmail: signUpEmail,
            signUpPassword: signUpPassword,
            signUpName: signUpName,
            signUpTel: signUpTel,
            signUpBirth: signUpBirth,
        };

        db.collection('user').doc(result.user.uid).set(userInfo);
        result.user.updateProfile({ displayName: signUpName })
        .then((displayName) => {
            console.log("displayName => " + signUpName);
        });
        console.log('회원가입 성공');
        //window.location.href = './';
    })
    .catch((error) => {
        console.log(error);
        console.log('회원가입 실패');
    })
});