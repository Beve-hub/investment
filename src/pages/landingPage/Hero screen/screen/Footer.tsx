


const Footer = () => {
    return (
        <section  className="min-h-[15rem]  flex bg-[#121212] md:flex-row grid-col-2 items-center justify-center ">
            <div className="pt-14">
            <div className="max-[60rem]">
             <div className='max-w-[60rem] mx-[2rem]  gap-2 grid md:grid-cols-2 '>
                <div>
                <div className="grid gap-4">
                    <p className="font-display text-white text-xl">Navigation</p>
                    <div className="grid gap-4 mt-8">
                    <p className="font-display text-[#ededed95] text-md"><a href='/about'>About Us</a></p>
                    <p className="font-display text-[#ededed95] text-md"><a href='/strategies'>Strategies</a></p>
                    <p className="font-display text-[#ededed95] text-md"><a href='/team'>Our Team</a></p>
                    <p className="font-display text-[#ededed95] text-md"><a href='/commentary'>Commentary</a></p>
                    <p className="font-display text-[#ededed95] text-md"><a href='/resources'>Resources</a></p>
                    <p className="font-display text-[#ededed95] text-md"><a href='/contact'> Contact Us</a></p>
                    </div>
                   

                </div>
                </div>
                
                <div className="grid gap-8">
                    <div className="grid gap-3">
                    <p className="font-display text-white text-xl">Navigation</p>   
                    <p className="text-wrap text-[#ededed95] text-sm font-display">This website is for informational purposes only and does not constitute a complete description of
                     our investment services or performance. This website is in no way a solicitation or offer to sell securities or investment advisory services except, where applicable, in states where we are 
                     registered or where an exemption or exclusion from such registration exists. Information throughout this site, whether stock quotes, charts, articles, or any other statement or statements
                      regarding market or other financial information, is obtained from sources which we and our suppliers believe reliable, but we do not warrant or guarantee the timeliness or accuracy of this 
                      information. Nothing on this website should be interpreted to state or imply that past results are an indication of future performance. Neither we or our information providers shall be liable 
                      for any errors or inaccuracies, regardless of cause, or the lack of timeliness of, or for any delay or interruption in the transmission thereof to the user. <span className="text-xs">THERE ARE NO WARRANTIES, EXPRESSED OR IMPLIED, AS TO ACCURACY, COMPLETENESS, OR RESULTS OBTAINED FROM ANY INFORMATION POSTED ON THIS OR ANY ‘LINKED’ WEBSITE.”</span>
                        </p>
                   
                    </div>
                    
                  
                </div>
            </div>
           
            </div>
        <div className="flex justify-center border-t-2  mt-8 border-[rgba(237,237,237,0.56)]">
                <p className='font-display text-[#ededed90] text-sm py-6'>©2024 Tom Johnson Investment Management, LLC. Website designed & developed by Back40 Design. Privacy Policy</p>
            </div>
            </div>
      
    </section>
    )
}

export default Footer
