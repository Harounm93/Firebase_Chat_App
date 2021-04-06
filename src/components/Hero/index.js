import react from "react"

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

</div>
    )
}

export default Hero