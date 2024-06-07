import IMG from '../../../../assets/bg-color4.png';

const Top = () => {
    return (
        <section id="meet" className="relative min-h-[20rem] w-screen overflow-hidden">
        <div className="relative h-[15rem] mt-[5rem]">
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
                <div className='grid justify-start items-end h-full mx-auto'>
                    <div className='flex justify-start items-start p-14'>
                        <h1 className='text-wrap text-[2rem]  font-display font-semibold '>
                       About Us
                        </h1>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Top
