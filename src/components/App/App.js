import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignIn from '../SignIn/index'
import SignOut from '../SignOut/index'



// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();


function App() {

  // const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat App</h1>
         {/* <SignOut/> 

          <SignIn/>  */}
        
      </header>
    </div>
  );
}

export default App;
