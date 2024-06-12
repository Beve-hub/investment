import {useState} from 'react'
import downwhite from '../assets/downwhite.svg';
import rightwhite from '../assets/rightwhite.svg';
import right from '..//assets/right.svg';



const Action = () => {
    const [action, setAction] = useState<boolean>(false);

  
    const toggleAction = (): void => {
        setAction(!action)
    }
    return (
        <div className='flex gap-1 justify-between  max-w-screen md:grid-cols-2'>      

       <div className='flex justify-start w-screen'>
            <button onClick={toggleAction} className='bg-[--bg-color] py-2 px-6 rounded-md  flex items-center gap-2'>
            <p className='text-[--text-extra]'>Action</p>
            {!action ? <img src={rightwhite} alt=''  className='w-[10px]' /> : <img src={downwhite} alt=''  className='w-[10px]' /> }
            </button>
            
           
            {action && (
                 <div className="absolute top-[10.5rem] rounded-lg bg-[#ededed] grid items-center justify-center ">
                  <ul className='grid p-2 items-center cursor-pointer'>
                    <li className="flex items-center gap-2  p-1 hover:bg-[--button-color] rounded-lg">
                        <a href='/deposit' className="flex items-center gap-4">
                            Deposit   <img src={right} alt=''  className='w-[16px]' /></a>
                    </li>
                    <li className="flex items-center gap-2 p-1 hover:bg-[--button-color] rounded-lg">
                        <a href='/withdraw' className="flex items-center gap-1">
                            Withdraw <img src={right} alt=''  className='w-[16px]' /></a>
                    </li>
                   
                  </ul>   
                </div>
            )}      
        </div>        
    </div>
    )
}

export default Action
