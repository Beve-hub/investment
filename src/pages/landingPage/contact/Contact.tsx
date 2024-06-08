import Footer from "../Hero screen/screen/Footer"
import Meet from "../Hero screen/screen/Meet"
import ContactBody from "./screen/ContactBody"
import ContactTop from "./screen/ContactTop"

const Contact = () => {
    return (
        <section className="w-screen  grid bg-[--text-extra] items-center justify-center">
           
         <ContactTop/>
         <ContactBody/> 
        <Meet/>
        <Footer/>
                 
    </section>
    )
}

export default Contact
