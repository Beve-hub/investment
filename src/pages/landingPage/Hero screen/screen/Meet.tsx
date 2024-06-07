import IMG from '../../../../assets/bg-color3.png';

const Meet = () => {
    return (
        <section id="meet" className="relative min-h-[20rem] w-screen overflow-hidden">
            <div className="relative h-[20rem] mt-[5rem]">
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
                        <div className='grid justify-center items-center'>
                            <h1 className='text-wrap text-[2rem]  font-display font-semibold '>
                            Meet With Our Team Today
                            </h1>
                            <div className='flex justify-center py-6'>
                            <button className='bg-[#121212] text-white text-md font-display font-semibold py-3 px-6 hover:bg-transparent border-4  border-black '>
                                Contact Us
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Meet
