import IMG from '../../../../assets/bg-color.png';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[50rem] w-screen overflow-hidden">
            <div className="relative h-screen mt-[5rem]">
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
                    <div className='grid justify-center items-center h-full mx-auto'>
                        <div className='border-b-2 border-[--button-color]'>
                            <h1 className='text-white text-balance text-[2.5rem] font-bold font-display'>
                                Investment Management with
                            </h1>
                            <h1 className='text-white text-balance text-[2.5rem] font-bold font-display'>
                                Personalized Client Service
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
