import { useNavigate } from "react-router-dom"


const ResouBody = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/contact')
    }
    return (
        <section className="w-screen  grid bg-[--text-extra] items-center justify-center">
           
        <div className="max-w-[100rem] w-full grid justify-center items-center">
            <div className="max-w-[100rem] mx-[2rem] gap-16 grid md:grid-cols-2 py-20">
                <div >
                    <div className='grid gap-6'>
                    
                    <div className="max-w-[30rem]">
                    <p className="font-display text-[1.5rem] py-2 font-semibold ">Helpful Links</p>
                    </div>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span><a href=""> <span className="text-md">Internal Revenue Service (IRS) Website</span></a></p>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span><a href=""> <span className="text-md">US Social Security Administration Website</span></a></p>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span><a href="https://www.medicare.gov/"> <span className="text-md">Medicare Website</span></a></p>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span><a href=""> <span className="text-md">Free Annual Credit Report</span></a></p>
                    </div>                        
                    
                </div>

                <div >
                    <div className='grid gap-6'>
                    
                    <div className="max-w-[30rem]">
                    <p className="font-display text-[1.5rem] py-2 font-semibold ">Tom Johnson Investment Management Brochures</p>
                    </div>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span><a href=""> <span className="text-md">TJIM Client Relationship Summary (Form CRS)</span></a></p>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span><a href=""> <span className="text-md">TJIM Brochure ADV 2</span></a></p>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span><a href=""> <span className="text-md">TJIM Privacy Policy</span></a></p>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span><a href=""> <span className="text-md">TJIM Business Contingency</span></a></p>
                    </div>                        
                    
                </div>
            </div>

            <div>
                <h1 className="font-display font-bold text-2xl">Social Security Reporting</h1>
                <p className="text-lg w-[80rem] py-3 font-display ">TJIM has software that can compare different social security claiming strategies to assist in making the best decisions to maximize lifetime retirement income. Please contact us for a FREE report.</p>
                <button onClick={handleClick} className='bg-[#121212] text-white text-md font-display font-semibold py-2 px-20 hover:bg-transparent hover:text-[#121212] border-4  border-black '>Get My Free</button>
            </div>

            <div className="mt-[6rem]">
                <p className="text-md font-display font-normal w-[80rem] text-[#12121290]">
                    This information being provided is strictly as a courtesy. When you click on any of the links provided here, you are leaving this website and viewing information provided by a third-party. We make no representation as to the completeness or accuracy of information provided by any third-party website.</p>
            </div>
        </div>
        
                 
    </section>
    )
}

export default ResouBody
