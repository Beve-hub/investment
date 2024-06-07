import About from "./screen/About"
import Footer from "./screen/Footer"
import Hero from "./screen/Hero"
import Meet from "./screen/Meet"
import Quote from "./screen/Quote"
import Strategies from "./screen/Strategies"


const Home = () => {
    return (
        <div>
            <Hero/>
            <Strategies/>
            <Quote/>
            <About/>
            <Meet/>
            <Footer/>
        </div>
    )
}

export default Home
