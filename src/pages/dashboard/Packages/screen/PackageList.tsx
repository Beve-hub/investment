import { Button } from 'antd'


const PackageList = () => {
    return (
        <div className='mt-[5rem]'>
            <div className="grid md:grid-cols-4 gap-4 mx-4">
                <div className="border h-[24rem] bg-[#12121210]">
                    <div className="flex justify-between px-4">
                    <p className="text-2xl font-semibold pt-4">Basic</p>
                    <div className="bg-[--bg-color] text-white p-2">
                            <p className='text-xs'>80%</p>
                            <p className='text-xs'>Return</p>
                        </div>
                    </div>
                    <div className='p-3 mt-10'>
                        <p className='text-md font-semibold'>Risk Level: <span className='text-red-500'>Low</span> </p>
                       
                    </div>
                    <div className='mt-4 grid gap-2'>
                    <p className='pl-3 text-sm'> - Stock</p>
                    <p className='pl-3 text-sm'> - Cryptocurrency</p>
                    <p className='pl-3 text-sm'> - Energy Company</p>
                    </div>
                      <div className='flex items-center justify-center mt-[6rem]'>
                      <Button type="primary" className='bg-[--bg-color]' >Invest Now</Button>
                      </div>
                    
                </div>

                <div className="border h-[24rem] bg-[#12121210]">
                    <div className="flex justify-between px-4">
                    <p className="text-2xl font-semibold pt-4">Gold</p>
                        <div className="bg-[--bg-color] p-2 text-white">
                            <p className='text-xs'>109%</p>
                            <p className='text-xs'>Return</p>
                        </div>
                    </div>
                    <div className='p-3 mt-10'>
                        <p className='text-md font-semibold'>Earning Level: <span className='text-yellow-500'>Medium</span> </p>
                    
                    </div>
                    <div className='mt-4 grid gap-2'>
                    <p className='pl-3 text-sm'> - Mutual Funds</p>
                    <p className='pl-3 text-sm'> - Stock</p>
                    <p className='pl-3 text-sm'> - Cryptocurrency</p>
                    <p className='pl-3 text-sm'> - Energy Company</p>                   
                    </div>
                      <div className='flex items-center justify-center mt-[4.2rem]'>
                      <Button type="primary" className='bg-[--bg-color]' >Invest Now</Button>
                      </div>
                    
                </div>

                <div className="border h-[24rem] bg-[#12121210]">
                    <div className="flex justify-between px-4">
                    <p className="text-2xl font-semibold pt-4">Diamond</p>
                    <div className="bg-[--bg-color] text-white p-2">
                            <p className='text-xs'>+209%</p>
                            <p className='text-xs'>Return</p>
                        </div>
                    </div>
                    <div className='p-3 mt-10'>
                        <p className='text-md font-semibold'>Earning Level: <span className='text-green-500'>High</span> </p>
                     
                    </div>
                    <div className='mt-4 grid gap-2'>
                    <p className='pl-3 text-sm'> - Mutual Funds</p>
                    <p className='pl-3 text-sm'> - Stock</p>
                    <p className='pl-3 text-sm'> - Cryptocurrency</p>
                    <p className='pl-3 text-sm'> - Real Estate</p>  
                    <p className='pl-3 text-sm'> - Treasury</p>                   
                    </div>
                      <div className='flex items-center justify-center mt-[2.5rem]'>
                      <Button type="primary" className='bg-[--bg-color]'>Invest Now</Button>
                      </div>
                    
                </div>

                <div className="border h-[24rem] bg-[#12121210]">
                    <div className="flex justify-between px-4">
                    <p className="text-2xl font-semibold pt-4">Platinum</p>
                        <div className="bg-[--bg-color] text-white p-2">
                            <p className='text-xs'>+519%</p>
                            <p className='text-xs'>Return</p>
                        </div>
                    </div>
                    <div className='p-3 mt-10'>
                        <p className='text-md font-semibold'>Earning Level: <span className='text-green-500'>Top</span> </p>
                       
                    </div>
                    <div className='mt-4 grid grid-cols-2 gap-2'>
                    <p className='pl-3 text-sm'> - ETF </p>
                    <p className='pl-3 text-sm'> - Stock</p>
                    <p className='pl-3 text-sm'> - Cryptocurrency</p>
                    <p className='pl-3 text-sm'> - Real Estate</p>                     
                    <p className='pl-3 text-sm'> - Mutual Funds</p>                        
                    <p className='pl-3 text-sm'> - Treasury</p> 
                    <p className='pl-3 text-sm text-balance'> - Energy Company</p>                 
                    </div>
                      <div className='flex items-center justify-center mt-12'>
                      <Button type="primary" className='bg-[--bg-color]'>Invest Now</Button>
                      </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PackageList
