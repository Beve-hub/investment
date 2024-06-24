import Wallet from '../../../../assets/wallet.svg'

interface GoldModalProps {
    onClose: () => void;
    showGold: boolean;
} 
const GoldModal = ({showGold, onClose}: GoldModalProps) => {
    if (!showGold) return null;
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center z-20 items-center ${showGold ? "visible bg-black/20" : "invisible"}`}>
             <div className={`bg-white p-4 rounded-md max-h-[90vh] overflow-y-auto ${showGold ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
              <button onClick={onClose} className="absolute top-2 right-2 bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center">
                X
            </button>
            <div className='flex justify-center'>
            <div className='grid py-[6rem] px-6 items-center justify-between gap-6 md:grid-cols-3'>

<div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#e58d00]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[--button-color] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-md  font-semibold'> Stock Balance</h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>0.00</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
</div>

<div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#e58d00]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[--button-color] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-md  font-semibold'> Mutual Funds Balance</h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>0.00</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
</div>

<div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#e58d00]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[--button-color] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-sm  font-semibold'>   Crypto Currency Balance  </h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>0.00</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
</div>

<div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#e58d00]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[--button-color] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-sm  font-semibold'> Energy Company Balance</h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>0.00</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
</div>



            </div>
            </div>
            
            </div>
        </div>
    )
}

export default GoldModal
