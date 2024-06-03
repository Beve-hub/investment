import { useNavigate } from 'react-router-dom';


const Action = () => {
    const navigate = useNavigate();
    return (
        <div className=' grid pb-4 my-4 bg-[--layer-color] item-center px-2 rounded-lg'>
        <div >
            <p className='font-semibold text-lg my-4'>Quick Action</p>
        <div className='max-w-[60rem] grid items-center justify-around gap-3 md:grid-cols-4 '>
        
        
        <button onClick={() => navigate('/deposit')} className='grid justify-center p-1 rounded-2xl  bg-[--base-color] w-[10rem]'>
        <h2 className='text-lg text-[--text-extra]'>Deposit</h2> 
        </button>

        <button onClick={() => navigate('/withdraw')} className='grid justify-center p-1 rounded-2xl  bg-[--bg-color] w-[10rem]]'>
        <h2 className='text-lg text-[--text-extra]'>Withdrawal</h2> 
        </button>

        <button onClick={() => navigate('/wallet')} className='grid justify-center p-1 rounded-2xl  bg-[--button-color] w-[10rem]'>
        <h2 className='text-lg text-[--text-extra]'>Wallet</h2> 
        </button>

        <button onClick={() => navigate('/packages')} className='grid justify-center p-1 rounded-2xl  bg-[--tetra-color] w-[10rem]'>
        <h2 className='text-lg text-[--text-extra]'>Packages</h2> 
        </button>
        </div>
       
       
   
        </div>

    
    </div>
    )
}

export default Action
