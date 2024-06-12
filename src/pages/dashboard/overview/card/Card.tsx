import Wallet from '../../../../assets/wallet.svg'

const Card = () => {
    return (
        <div className='grid items-center justify-between gap-6 md:grid-cols-4'>
        <div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[#025483] border-r-4 border-[#003e62]  w-[15rem]'>
            <div className='flex gap-1 items-center'>
              <div className='w-[22px] h-[22px] bg-[#fff] p-1 rounded-sm' >
              <img src={Wallet} alt='' className='w-[16px]' />
              </div>
              
              <h2 className='text-md  text-white font-semibold'>Total Basic Balance</h2>
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-xl text-white'>$</span>
                <h1 className='font-bold text-2xl text-white'>0.00</h1>
              </div>
              <p className='text-sm text-white'>Available Balance</p>
            </div>
          </div>

          <div  className='border-r-[5px] border-[#e58d00] bg-[#f1b556] grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
            <div className='flex items-center gap-1'>
            <div className='w-[22px] h-[22px] bg-white p-1 rounded-sm' >
            <img src={Wallet} alt='' className='w-[16px]' />
              </div>
              <h2 className='text-md font-semibold '>Total Gold Balance</h2>
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-xl'>$</span>
                <h1 className='font-bold text-2xl'>0.00</h1>
              </div>
              <p className='text-sm'>Available Balance</p>
            </div>
          </div>

          <div  className='border-r-[5px] border-[#000000] bg-[#3b3b3b]  grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
            <div className='flex items-center gap-1'>
            <div className='w-[22px] h-[22px] bg-[#fffafa] p-1 rounded-sm items-center' >
            <img src={Wallet} alt='' className='w-[16px]' />
              </div>
              <h2 className='text-md font-semibold text-white'>Total Diamond Balance</h2>
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-xl text-white'>$</span>
                <h1 className='font-bold text-2xl text-white'>0.00</h1>
              </div>
              <p className='text-sm text-white'>Available Balance</p>
            </div>
          </div>

          <div  className='border-r-[5px] bg-[#14e7a4] border-[#009889]  grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
            <div className='flex items-center gap-1'>
            <div className='w-[22px] h-[22px] bg-white p-1 rounded-sm' >
            <img src={Wallet} alt='' className='w-[16px]' />
              </div>
              <h2 className='text-md font-semibold'>Total Platinum Balance</h2>
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-xl'>$</span>
                <h1 className='font-bold text-2xl'>0.00</h1>
              </div>
              <p className='text-sm'>Available Balance</p>
            </div>
          </div>
          

      </div>
    )
}

export default Card
