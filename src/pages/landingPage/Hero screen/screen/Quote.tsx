import IMG from '../../../../assets/bg-color2.png';

const Quote = () => {
    return (
        <section id="home" className="relative min-h-[10rem] w-screen overflow-hidden">
            <div className="relative h-[30rem] mt-[5rem]">
                <div
                    className='absolute top-0 left-0 w-full h-full'
                    style={{
                        backgroundImage: `url(${IMG})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        overflow: 'hidden'
                    }}
                >
                    <div className='grid justify-center  items-center max-w-[50rem] h-full mx-auto'>
                        <div className='border-b-2 border-t-2 border-[--button-color] grid justify-center'>
                            <div className='flex justify-center items-center w-full'>
                            <h1 className='text-white text-balance text-[1.5rem] mt-6 font-bold font-display'>
                            “Every day, new information is disseminated regarding economic forecasts, industry fundamentals and world events. And every day, TJIM analyzes this information for one reason – to make decisions that preserve and enhance our clients’ wealth”
                            </h1>
                            </div>
                            
                            <div className='flex justify-center py-6'>
                            <p className='text-white text-balance text-[1rem] font-light font-display'>
                            Richard H. Parry, President & Chief Investment Officer
                            </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quote
