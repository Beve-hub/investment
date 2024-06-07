
const About= () => {
    return (
        <section  className="min-h-[20rem]  py-20 flex bg-[--text-extra] md:flex-row grid-col-2 items-center justify-center ">
            <div className="max-[60rem]">
                 <div className='max-w-[60rem] mx-[2rem]  gap-2 grid md:grid-cols-2 '>
                    <div className="">
                        <p className="font-display text-[2rem]">About Us</p>
                    </div>
                    <div className="grid gap-8">
                        <div className="grid gap-3">
                        <p className="text-wrap font-display">Tom Johnson Investment Management was founded in 1983 and is centrally located in Oklahoma City, Oklahoma.  We service a broad range of clients, such as pensions, profit sharing and 401(K) plans, individuals, individual retirement accounts (IRA), foundations, banks, insurance companies, public funds, corporations, and sovereign funds.</p>
                        <p className="font-display">We specialize in building separately managed accounts for each client to accommodate their personal objectives. Our services include independent research, individual stock and bond selection, professional investment management, and superior client service.</p>
 
                        </div>
                        
                        <div>
                            <button className='font-display bg-[#121212] text-white text-sm py-3 px-4'>
                                More About Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
