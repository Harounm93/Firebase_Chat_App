import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignIn from '../SignIn/index'
import SignOut from '../SignOut/index'


firebase.initializeApp({
 
  apiKey: "AIzaSyBXcgvoQg3NAwhzYQXko7Ht9fAu-zR96lo",
  authDomain: "react-chat-7e5bb.firebaseapp.com",
  projectId: "react-chat-7e5bb",
  storageBucket: "react-chat-7e5bb.appspot.com",
  messagingSenderId: "240855772917",
  appId: "1:240855772917:web:f7e3e095e3826e9061dfbc",
  measurementId: "G-6JW94K0ZH7"

})


const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {

  const { user} = useAuthState(firebase.auth());
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat App</h1>
        {user ? <SignOut/> : <SignIn/> }
        
      </header>
    </div>
  );
}

export default App;
