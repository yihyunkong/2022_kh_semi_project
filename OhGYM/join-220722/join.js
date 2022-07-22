const firebaseConfig = {
    apiKey: "AIzaSyDUA4G4enZB8-zJUgRUP_GipHN-vzrsxb0",
    authDomain: "kh-semi-terrgym.firebaseapp.com",
    projectId: "kh-semi-terrgym",
    storageBucket: "kh-semi-terrgym.appspot.com",
    messagingSenderId: "896184965835",
    appId: "1:896184965835:web:f8c569ac1347e61b8e594e",
    measurementId: "G-W8RPCSDZDG"
    };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

    $("#signUpButton").click(function(){
        // 사용자가 업로드한 이미지 storage에 저장하기
        const file = document.querySelector("#image").files[0];
        const storageRef = storage.ref();
        const storagePath = storageRef.child("image/"+file.name);
        const uploadImg = storagePath.put(file);

        uploadImg.on("state_change", null, (error) => {
            console.error(error)
        },
        // 성공했을 때 동작
        () => {
            uploadImg.snapshot.ref.getDownloadURL().
            then((url) => {
                console.log(url);
            })
        }
        );

        //사용자가 입력한 이메일, 비번, 핸폰번호, 이름
        const signUpEmail = $("#signUpEmail").val();
        const signUpPassword = $("#signUpPassword").val();
        const signUpName = $("#signUpName").val();
        const signUpTel = $("#signUpTel").val();
        const signUpBirth = $("#singUpBirth").val();

        firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword)
        .then((result) =>{
            console.log(result.user);
            const userInfo = {
                signUpName: signUpName,
                signUpTel: signUpTel,
                signUpBirth: signUpBirth,
            };

            db.collection('user').doc(result.user.uid).set(userInfo);
            result.user.updateProfile({displayName: signUpName}).then((displayName)=>{
                console.log("displayName => "+signUpName);
            });
            //window.location.href="./loginForm.html";
        })
        .catch((error) => {
            console.log(error);
        })
    });