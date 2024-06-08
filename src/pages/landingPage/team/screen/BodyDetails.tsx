import { useLocation, useNavigate } from "react-router-dom";
import TeamTop from "./TeamTop";
import Meet from "../../Hero screen/screen/Meet";
import Footer from "../../Hero screen/screen/Footer";
import Left from "../../../../assets/right.svg"

const BodyDetails = () => {
    const location = useLocation();
    const { item } = location.state || {};
     const navigate = useNavigate();
      
     const handleClick = () => {
        navigate('/contact')
     }
    return (
        <section className=" grid bg-[--text-extra] items-center justify-center">
            <TeamTop/>
           <div className="max-w-[100rem] w-full grid justify-center mt-14">
            
            <div className="max-w-[80rem] mx-auto gap-2 grid justify-center ">
                <div className="">
                <div className="max-w-[80rem] mx-auto gap-6 grid md:grid-cols-2">
                <div className="grid">
                    <div>
                    <h3 className="text-2xl font-bold font-display">{item.name}</h3>
                      <p className="text-lg text-gray-600 font-display">{item.title}</p>  
                    </div>
                                                                        
                                <p className="text-xl text-gray-600 font-display">{item.description}</p> 
                                <p className="font-bold font-display text-2xl">Contact {item.name}</p> 
                                <div>
                                   
                                 <p className="font-display">{item.contact1}</p>
                                 <p className="font-display">{item.contact1}</p>
                                 <button onClick={handleClick} className="py-6 flex items-center justify-center hover:text-[#12121270]"> <span>Send Message </span> <img src={Left} alt="" className="w-[1rem]"/> </button>
                                </div>
                                
                                
                </div>
                <img src={item.image} alt={item.name} className="w-[30rem] object-cover  " />
                            
                </div>
                </div>
                
                </div>
            </div>
            <Meet/>
            <Footer/>
        </section>
    )
}

export default BodyDetails
