import {  useState } from 'react';
import user from '../../../../assets/user.svg';
import down from '../../../../assets/down.svg';
import right from '../../../../assets/right.svg';

const offerTop = () => {
    const [icon, setIcon] = useState<boolean>(false);

    const toggleIcon = (): void => {
        setIcon(!icon);
    }
    
    return (
        <div className='flex justify-between pb-[3rem] max-w-screen'>
        <div className='flex gap-2'>
            <p className='text-2xl font-bold'>Packages History</p>           
        </div>

        <div className='items-center gap-6 md:flex hidden'>            
            <div onClick={toggleIcon} className='flex items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <img src={user} alt='User' className='w-[40px]' />                  
                </div>
                {!icon ? <img src={right} alt='Expand' className='w-[24px]' /> : <img src={down} alt='Collapse' className='w-[24px]' />}
                {icon && (
                    <div className="absolute top-[6rem] rounded-lg bg-[#ededed] grid items-center justify-center w-[8rem]">
                        <ul className='grid p-2 items-center cursor-pointer'>
                            <li className="flex items-center gap-2 p-1 hover:bg-[--button-color] rounded-lg">
                                <button >Log Out</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </div>
    )
}

export default offerTop
