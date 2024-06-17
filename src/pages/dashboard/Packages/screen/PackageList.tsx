import { useState } from 'react';
import { Button } from 'antd'
import { BsDot } from "react-icons/bs";
import BasicModal from '../packagemodal/BasicModal';
import GoldModal from '../packagemodal/GoldModal';
import DiamondModal from '../packagemodal/DiamondModal';
import PlatinumModal from '../packagemodal/PlatinumModal';


const PackageList = () => {
    const [showBasic, setShowBasic] = useState<boolean>(false);
    const [showGold, setShowGold] = useState<boolean>(false);
    const [showDiamond, setShowDiamond] = useState<boolean>(false);
    const [showPlatinum, setShowPlatinum] = useState<boolean>(false);

    const handleBasic = () => {
        setShowBasic(!showBasic);
      };
    
      const handleGold = () => {
        setShowGold(!showGold);
      };
      const handleDiamond = () => {
        setShowDiamond(!showDiamond);
      };
      const handlePlatinum = () => {
        setShowPlatinum(!showPlatinum);
      };
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
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Stock</p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Cryptocurrency</p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot />Energy Company</p>
                    </div>
                    <div className='flex items-center justify-center mt-24'>
                      <Button type="primary" onClick={handleBasic} className='bg-[--bg-color] h-[2.3rem]'>Invest Now</Button>
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
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Mutual Funds</p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Stock</p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Cryptocurrency</p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Energy Company</p>                   
                    </div>
                    <div className='flex items-center justify-center mt-[4.2rem]'>
                      <Button type="primary" onClick={handleGold} className='bg-[--bg-color] h-[2.3rem]'>Invest Now</Button>
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
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Mutual Funds</p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Stock</p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Cryptocurrency</p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Real Estate</p>  
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Treasury</p>                   
                    </div>
                    <div className='flex items-center justify-center mt-10'>
                      <Button type="primary" onClick={handleDiamond} className='bg-[--bg-color] h-[2.3rem]'>Invest Now</Button>
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
                    <div className='mt-8 '>
                    <div className='grid grid-cols-2 gap-2'>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> ETF </p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Stock</p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Cryptocurrency</p>
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Real Estate</p>                     
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Mutual Funds</p>                        
                    <p className='pl-3 text-sm flex items-center'> <BsDot /> Treasury</p>                                    
                    </div>
                    <p className='pl-3 text-sm flex items-center mt-2'> <BsDot /> Energy Company</p>  
                    </div>
                      <div className='flex items-center justify-center mt-14'>
                      <Button type="primary" onClick={handlePlatinum} className='bg-[--bg-color] h-[2.3rem]'>Invest Now</Button>
                      </div>
                    
                </div>
            </div>

            <BasicModal  showBasic={showBasic} onClose={() => setShowBasic(false)}  />
          <GoldModal  showGold={showGold} onClose={() => setShowGold(false)}  />
          <DiamondModal showDiamond={showDiamond} onClose={() => setShowDiamond(false)}  />
          <PlatinumModal  showPlatinum={showPlatinum} onClose={() => setShowPlatinum(false)}  />

        </div>
    )
}

export default PackageList
