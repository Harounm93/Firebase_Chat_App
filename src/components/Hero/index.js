import react from "react"
import Chat from "../../components/chat/index"

const Hero = (props) => {
const {handleLogOut, user} = props
console.log(` this is ${user}`)


    return (
        <div>
<section className = "hero">
<nav>
    <h2>welcome </h2>
    <button onClick = {handleLogOut}>log Out</button>
</nav>
</section>
{/* <div>
<Chat/>
</div> */}
</div>
    )
}

export default Hero