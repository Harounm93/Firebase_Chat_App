import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// let firebaseConfig  =  {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

let firebaseConfig = {
    apiKey: "AIzaSyBXcgvoQg3NAwhzYQXko7Ht9fAu-zR96lo",
    authDomain: "react-chat-7e5bb.firebaseapp.com",
    projectId: "react-chat-7e5bb",
    storageBucket: "react-chat-7e5bb.appspot.com",
    messagingSenderId: "240855772917",
    appId: "1:240855772917:web:73b58042230cad7161dfbc",
    measurementId: "G-83C863530Q"
}

const fire = firebase.initializeApp(firebaseConfig)
export default fire
