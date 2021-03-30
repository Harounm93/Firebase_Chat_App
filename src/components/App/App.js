import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignUp from "../../components/SignUp/index"
import { useState } from 'react';
import auth from "../Firebase/firebase"

function App() {
  const [email, setEmail] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")



  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat App</h1>
        <SignUp/>
        </header>
    </div>
  );
}

export default App;
