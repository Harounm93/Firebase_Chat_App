import react from "react"

const Hero = (props) => {
const {handleLogOut, user} = props
console.log(` this is ${user}`)
    return (
<section className = "hero">
<nav>
    <h2>welcome </h2>
    <button onClick = {handleLogOut}>log Out</button>
</nav>
</section>

    )
}

export default Hero