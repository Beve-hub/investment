import { useState } from 'react'
import Wallet from '../../../../assets/wallet.svg'
import BasicModal from '../cardModal/BasicModal'
import GoldModal from '../cardModal/GoldModal';
import DiamondModal from '../cardModal/DiamondModal';
import PlatinumModal from '../cardModal/PlatinumModal'

const Card = () => {
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
        <div className='grid items-center my-4 justify-between gap-6 md:grid-cols-4 '>

        <div onClick={handleBasic} className=' grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[#025483] border-r-4 border-[#003e62]  w-[15rem] cursor-pointer'>
            <div className='flex gap-1 items-center'>
              <div className='w-[22px] h-[22px] bg-[#fff] p-1 rounded-sm' >
              <img src={Wallet} alt='' className='w-[16px]' />
              </div>
              
              <h2 className='text-md  text-white font-semibold'>Basic Balance</h2>
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-xl text-white'>$</span>
                <h1 className='font-bold text-2xl text-white'>0.00</h1>
              </div>
              <p className='text-sm text-white'>Available Balance</p>
            </div>
          </div>

          <div onClick={handleGold}  className='border-r-[5px] bg-[#fac165] border-[#e58d00]  grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
            <div className='flex items-center gap-1'>
            <div className='w-[22px] h-[22px] bg-white p-1 rounded-sm' >
            <img src={Wallet} alt='' className='w-[16px]' />
              </div>
              <h2 className='text-md font-semibold '>Gold Balance</h2>
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-xl'>$</span>
                <h1 className='font-bold text-2xl'>0.00</h1>
              </div>
              <p className='text-sm'>Available Balance</p>
            </div>
          </div>

          <div onClick={handleDiamond} className='border-r-[5px] border-[#350163] bg-[#6633b9]  grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
            <div className='flex items-center gap-1'>
            <div className='w-[22px] h-[22px] bg-[#fffafa] p-1 rounded-sm items-center' >
            <img src={Wallet} alt='' className='w-[16px]' />
              </div>
              <h2 className='text-md font-semibold'> Diamond Balance</h2>
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-xl '>$</span>
                <h1 className='font-bold text-2xl '>0.00</h1>
              </div>
              <p className='text-sm '>Available Balance</p>
            </div>
          </div>

          <div onClick={handlePlatinum} className='border-r-[5px] bg-[#0dfeb2] border-[#009889]  grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
            <div className='flex items-center gap-1'>
            <div className='w-[22px] h-[22px] bg-white p-1 rounded-sm' >
            <img src={Wallet} alt='' className='w-[16px]' />
              </div>
              <h2 className='text-md font-semibold'>Platinum Balance</h2>
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-xl'>$</span>
                <h1 className='font-bold text-2xl'>0.00</h1>
              </div>
              <p className='text-sm'>Available Balance</p>
            </div>
          </div>
          

          <BasicModal  showBasic={showBasic} onClose={() => setShowBasic(false)}  />
          <GoldModal  showGold={showGold} onClose={() => setShowGold(false)}  />
          <DiamondModal showDiamond={showDiamond} onClose={() => setShowDiamond(false)}  />
          <PlatinumModal  showPlatinum={showPlatinum} onClose={() => setShowPlatinum(false)}  />

      </div>
    )
}

export default Card
