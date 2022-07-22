/********************** firebase 연동 시작 **********************/
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
        databaseURL: "https://kh-semi-terrgym-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "kh-semi-terrgym",
        storageBucket: "kh-semi-terrgym.appspot.com",
        messagingSenderId: "896184965835",
        appId: "1:896184965835:web:f8c569ac1347e61b8e594e",
        measurementId: "G-W8RPCSDZDG"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    
    console.log("firebase 연동 성공");
/*********************** firebase 연동 끝 ***********************/