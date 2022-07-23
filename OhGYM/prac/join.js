import { initializeApp } from "firebase/app";
import { firebase } from "firebase/app"
import { firestore } from "firestore/compat"

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

        const db = firebase.firestore();
        const storage = firebase.storage();
        $("#register").click(function(){
            const file = document.querySelector("#image").files[0];
            const storageRef = storage.ref();
            const storagePath = storageRef.child("image/"+file.name);
            const uploadImg = storagePath.put(file);
            uploadImg.on("state_change",null,(error)=>{
            console.error(error)
            },
            // 성공했을 때 동작
            ()=>{
            uploadImg.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url);
            })
            }
            )
            //사용자가 입력한 이메일, 비번, 핸폰번호, 이름
            const mem_name = $("#mem_name").val();
            const mem_email = $("#mem_email").val();
            const mem_hp = $("#mem_hp").val();
            const mem_pw = $("#mem_pw").val();
            firebase.auth().createUserWithEmailAndPassword(mem_email, mem_pw)
            .then((result) =>{
            console.log(result.user);
            const userInfo = {
                mem_email: mem_email,
                mem_hp: mem_hp,
            };
            db.collection('user').doc(result.user.uid).set(userInfo);
            result.user.updateProfile({displayName: mem_name}).then((displayName)=>{
                console.log("displayName => "+mem_name);
            });
            //window.location.href="./loginForm.html";
            })
            .catch((error) => {
            console.log(error);
            })
        });