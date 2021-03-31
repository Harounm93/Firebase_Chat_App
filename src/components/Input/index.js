import react from "react"

const Login = (props) => {
const {email, setEmail, password, setPassword, handleLogin,handleSignUp, 
    hasAccount, setHasAccount, emailError, passwordError} = props
   
   return(
<section className = "login">
<div div className = "loginContainer">
<label>Username</label>
<input
    type = "text"
    autoFocus
    value = {email}
    onChange = {(e) => setEmail(e.target.value)}
/>
<p className  = "errorMsg">{emailError}</p>
<label>password</label>
<input
    type = "password"
    autoFocus
    value = {password}
    onChange = {(e) => setPassword(e.target.value)}
/>
<p className  = "errorMsg">{passwordError}</p>
<div className  = "btnContainer">
{hasAccount ? (
    <>
    <button onClick = {handleLogin}> sign in</button>
    <p> dont have an account? <span onClick = {() => setHasAccount(!hasAccount)}> sign up</span></p>
    </>
) : (
    <>
    <button onClick = {handleSignUp}>sign up</button>
    <p>have an account? <span onClick = {() => setHasAccount(!hasAccount)}> sign in</span></p>
    </>
)}
 </div>
 </div>
</section>

    )

}
export default Login