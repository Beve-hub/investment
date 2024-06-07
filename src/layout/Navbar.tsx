import { useState } from 'react';
import menu from '../assets/menu.svg'
import cancel from '../assets/cancel.svg'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';


 
const Navbar = () => {
    const [nav, setNav ] = useState<boolean>(true);
    const flexBetween = 'flex items-center justify-between';
   

    const handleNav = (): void => {
        setNav(!nav)
    }
   

    return (
        <div className={`${flexBetween} fixed top-0 z-50 w-full bg-[--layer-color]`}>
            <div className='mx-auto w-[96rem] py-2 '>
                <div className='flex justify-between'>

                <div className='flex items-center'>
                <div onClick={handleNav} className='block md:hidden ml-4 '>
                 {!nav ? <img src={cancel} alt=''  className='bg-[#fff] p-1' /> : <img src={menu} alt=''  className='bg-[#fff] p-1' /> }
                 </div>
                 <div>
                 <a href='/'>
                  <img src={Logo} alt='' className='w-[4rem] ml-[3rem] hover:scale-105'/>
                  </a>
                 </div>
                  
                    
                </div> 
                <div className='grid justify-end'>
                <div className='item-center justify-between sm:flex hidden'>                

<ul className={`${flexBetween} mx-[8rem] w-[35rem] `}>
   
    <li className=' transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/about"  >
            About Us
            
        </NavLink>
    </li>
    <li className=' transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/strategies">
            Strategies           
        </NavLink>
    </li>
    <li className=' transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/team" >
            Our Team
        </NavLink>
    </li>
    <li className=' transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/commentary" >
            Commentary
        </NavLink>
    </li>
    <li className=' transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/resource" >
            Resources
        </NavLink>
    </li>
    <li className=' transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/contact" >
           Contact Us
        </NavLink>
    </li>
</ul>    
</div>
                </div>
                
                
                
                </div>
                <div className={!nav ? 'fixed right-0 top-0 w-[80%] h-full  border-r-gray-900 bg-[#989898] z-10 ease-in-out duration-500': 'fixed left-[-400%]'}>
                              

<ul className=' grid justify-start ml-20 gap-6 font-medium mt-20'>
     <li className='text-[--text-extra] transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/about"  >
            About Us
            
        </NavLink>
    </li>
    <li className='text-[--text-extra] transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/strategies">
            Strategies           
        </NavLink>
    </li>
    <li className='text-[--text-extra] transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/team" >
            Our Team
        </NavLink>
    </li>
    <li className='text-[--text-extra] transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/team" >
            Commentary
        </NavLink>
    </li>
    <li className='text-[--text-extra] transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/team" >
            Resources
        </NavLink>
    </li>
    <li className='text-[--text-extra] transition duration-500 hover:border-b-2 border-[var(--button-color)] cursor-pointer'>
        <NavLink to="/team" >
           Contact Us
        </NavLink>
    </li>
</ul>                  

    
          
           
                </div>
            </div>
        </div>
    )
}

export default Navbar