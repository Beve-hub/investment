
const ContactBody = () => {
    return (
        
        <section className="w-screen pt-[8rem] grid bg-[--text-extra] items-center justify-center">
           
            <div className="max-w-[100rem] w-full grid justify-center items-center">
            <div className="max-w-[100rem] mx-[2rem] gap-16 grid md:grid-cols-2">
                <div >
                    <div className='grid gap-6'>
                    <div className="max-w-[30rem]">
                    <p className="font-display text-[1.1rem] font-semibold ">Tom Johnson Investment Management, LLC</p>
                    <p className="font-display text-[1.1rem] max-w-[15rem]">201 Robert S. Kerr, Suite 510
                        Oklahoma City, OK 73102 </p>
                    </div>
                    <div className="max-w-[20rem]">
                    <p className="font-display text-[1.1rem] "> <span className="font-bold">Telephone</span>(405) 236-2111 </p>
                    <p className="font-display text-[1.1rem] "> <span className="font-bold">Toll-Free </span>(888) 404-8546 </p>
                        <p className="font-display text-[1.1rem] "> <span className="font-bold ">Fax</span>(405) 236-2008</p>
                    </div>
                    <div className="max-w-[30rem]">
                    <p className="font-display text-[1.1rem] py-2 font-semibold ">Parking Options & Directions</p>
                    <p className="font-display text-[1.1rem] ">Client parking options include parking meter spots along the street or Plaza Parking Garage located at 227 Robert S. Kerr. Clients of Tom Johnson Investments who park in Plaza Parking Garage should bring their parking stub to our office so that we can validate it to provide parking free of charge.</p>
                    
                    </div>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span> <span className="text-md">Map & Directions to our office</span></p>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span> <span className="text-md">Map & Directions to Plaza Parking Garage</span></p>
                    <p className="flex items-center gap-2 "><span className='bg-[#EBD7B9] text-[#EBD7B9] px-1 py-1 text-[2px] rounded-full'>e</span> <span className="text-md">Will Rogers World Airport</span></p>
                    </div>                        
                    
                </div>
                <div className="">
                    <div className="grid gap-3">
                    <div className="max-w-[30rem]">
                    <p className="font-display text-[1.4rem] font-semibold ">Contact Us</p>
                    <p className="font-display text-[1.1rem] ">Please supply your contact information and message in the form below. One of our team members will contact as soon as possible.</p>
                    </div>                       
                    </div>
                    <div className="grid gap-6 py-10">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="grid ">
                            <label htmlFor="name" className="font-display font-bold text-lg">Name<span className="text-[#8e1616]">*</span></label>
                            <input id="name" type="text" placeholder="" className="font-display shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>  
                            <p className="text-sm text-[#12121290]">First</p>                          
                        </div> 
                        <div className="grid ">
                            <label htmlFor="lastName" className="font-display font-bold text-lg"> Name</label>
                            <input id="lastName" type="text" placeholder="" className="font-display shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>  
                            <p className="text-sm text-[#12121290]">Last</p>                        
                        </div>               
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="grid ">
                            <label htmlFor="email" className="font-display font-bold text-lg">Email<span className="text-[#8e1616]">*</span></label>
                            <input id="email" type="text" placeholder="" className="font-display shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>                            
                        </div> 
                        <div className="grid ">
                            <label htmlFor="phone" className="font-display font-bold text-lg">Phone <span className="text-[#8e1616]">*</span></label>
                            <input id="phone" type="text" placeholder="" className="font-display shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>                          
                        </div>               
                    </div>
                    <div className="grid ">
                            <label htmlFor="message" className="font-display font-bold text-lg">Message</label>
                            <textarea id="message"  placeholder="Type Something" className="font-display shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[10rem]"/>                            
                    </div> 
                    </div>
                    
                </div>
                
            </div>
        </div>
        
                 
    </section>
    )
}

export default ContactBody
