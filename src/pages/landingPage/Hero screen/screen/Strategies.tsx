import arrow from '../../../../assets/right.svg'
const Strategies = () => {
    return (
        <section id="strategies" className="relative min-h-[20rem] mt-20  py-10 w-screen grid justify-center overflow-hidden">
            <div className='mx-[10rem] grid justify-center '>
            <div className='w-full grid justify-center'>
            <div className="mx-auto gap-6 grid md:grid-cols-3 items-baseline justify-center">

              <div className='w-[20rem] grid gap-4'>
                  <p className='border-b-4 border-[--button-color] w-[10rem]'></p>
                  <p className="font-display text-xl font-semibold">Equity Strategy</p>
                  <p className="text-md text-balance"><span className="font-semibold">A conservative philosophy with a focus on valuation and diversification.</span>Our investment team builds, maintains and improves our models over time through diligent fundamental research.</p>
                  <div className='flex items-center '>
                      <p className='font-semibold'>Read More</p>
                      <img src={arrow} alt="" className="w-[1.2rem] mt-[4px]"/>
                  </div>    
              </div>

              <div className='w-[20rem] grid gap-4'>
                  <p className='border-b-4 border-[--button-color] w-[10rem]'></p>
                  <p className="font-display text-xl font-semibold">Fixed Income Strategy</p>
                  <p className="text-md text-balance"><span className="font-semibold">Tactically balanced total return, income generation, and capital preservation.</span> Our firm’s conservative investment approach and a focus on maintaining liquidity at the individual account level establishes minimum quality parameters.</p>
                  <div className='flex items-center '>
                      <p className='font-semibold'>Read More</p>
                      <img src={arrow} alt="" className="w-[1.2rem] mt-[4px]"/>
                  </div>    
              </div>

              <div className='w-[20rem] grid gap-4 '>
                  <p className='border-b-4 border-[--button-color] w-[10rem]'></p>
                  <p className="font-display text-xl font-semibold">Balanced Strategy</p>
                  <p className="text-md text-balance"><span className="font-semibold">Our portfolio managers work with clients to determine individual investment objectives and the asset allocation that best accommodates those objectives.</span>We believe an investment portfolio must be diversified both within and across broad classes of investment assets to reduce risk and provide optimum portfolio construction.</p>
                  <div className='flex items-center '>
                      <p className='font-semibold'>Read More</p>
                      <img src={arrow} alt="" className="w-[1.2rem] mt-[4px]"/>
                  </div>    
              </div>
              
             


             </div> 
            </div>
            </div>
            
            
        </section>
    )
}

export default Strategies