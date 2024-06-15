// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyALDvY8SQgpb79wjpEZvE_aXpEQMvWeg8g",
  authDomain: "car-doctor-client-auth.firebaseapp.com",
  projectId: "car-doctor-client-auth",
  storageBucket: "car-doctor-client-auth.appspot.com",
  messagingSenderId: "96347343683",
  appId: "1:96347343683:web:075acc1649ed169f0a7df6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;