import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import cancel from '../assets/cancel.svg';
import menu from '../assets/menu.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import { sidebar } from '../utils/data';
import down from '../assets/down.svg';
import user from '../assets/user.svg';

const SideBar = () => {
  const navigate = useNavigate(); 
  const [open, setOpen] = useState(true);
  const [nav, setNav] = useState(false);
  const [icon, setIcon] = useState(false);

  const handleBar = () => {
    setNav(!nav);
  };

  const toggleBar = () => {
    setOpen(!open);
  };

  const toggleIcon = () => {
    setIcon(!icon);
  };

  return (
    <div className='h-screen absolute top-0'>
      

      <div style={{ width: open ? '200px' : '100px' }} className="w-[400px] h-screen bg-[--layer-color] p-8 fixed z-50 sm:block hidden">

      <div className="flex p-2 items-center">   
      <div onClick={handleBar}  className=" block md:hidden ml-4 ">
          {nav ? 
            <img src={cancel}  alt="Cancel" />
         : 
            <img src={menu}  alt="Menu"  />
         }
        </div>     
        <div onClick={() => navigate('/overview')}>        
          <img src={Logo} alt="Logo" className="w-[2rem] block md:hidden ml-4" />
        </div>        
      </div>
      
        <div className="flex items-center">
          <div onClick={() => navigate('/overview')} className="cursor-pointer">
            <img src={Logo} alt="Logo" className="w-[3rem]" />
          </div>
          <div onClick={toggleBar} className="absolute right-[-20px]">
            {!open ? (
              <img src={left} alt="Expand" className="bg-[--text-extra] rounded-2xl p-2 w-[35px]" />
            ) : (
              <img src={right} alt="Collapse" className="bg-[--text-extra] rounded-2xl p-2 w-[35px]" />
            )}
          </div>
        </div>
        <div className="mt-14">
      
          {sidebar.map((item, index) => (
            <NavLink to={item.path} key={index} className="flex bg-[--bg-color-color] items-center gap-2 py-3">             
              <img src={item.icon} alt="" className="w-[25px]" />
              <p style={{ display: open ? 'block' : 'none' }}>{item.name}</p>          
            </NavLink>
          ))}
        </div>            
      </div>

          <div>
          
        <div className={`fixed z-50 h-screen p-8 bg-[--layer-color] ${nav ? 'right-0' : 'right-[-400%]'} md:static md:block transition-all duration-300 md:hidden`}>
      
      <ul className="text-color grid items-center justify-center uppercase">
        <div onClick={toggleIcon} className="flex items-center gap-2">
          <div className='flex items-center gap-2'>
            <img src={user} alt='' className='w-[40px]'/>
            <p className='text-xl'>victor</p>
          </div>           
          {!icon ? <img src={right} alt="" className="w-[24px]" /> : <img src={down} alt="" className="w-[24px]" />}
          {icon && (
            <div className="absolute top-[8rem] right-[2rem] z-99 rounded-lg bg-[#121212] grid items-center justify-center w-[7rem]">
              
            </div>
          )}
        </div>
        {sidebar.map((item, index) => (
          <NavLink to={item.path} key={index} className="flex items-center gap-2 py-5">
            <img src={item.icon} alt="" className="w-[30px]" />
            <div style={{ display: open ? 'block' : 'none' }} className='text-[#121212]'>{item.name}</div>
          </NavLink>
        ))}
      </ul>
    </div>
          </div>
     
      
    </div>
  )
}

export default SideBar;
