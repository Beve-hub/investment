import {useState} from  'react'
import {useNavigate} from 'react-router-dom'
import logo from '../../../assets/logo.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import left from '../../../assets/right.svg'


const Invest = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<string | undefined>();

    const handleClick = () => {
        navigate('/login')
    }; 

    return (
        <section className='grid justify-center items-center w-screen h-[40rem] px-[1rem]'>
            <div className='border-b-2 border-[--bg-color]'>
                <img src={logo} alt='' className='w-[3.5rem] py-4'/>
            </div>
            <form className="bg-[#ffff]  ">
                <div className="bg-[--bg-color] p-4 my-10 flex items-center justify-between ">
                    <p className="font-bold font-display text-xl text-white">Invest with Us </p>
                    
                </div>
                <div className='grid md:grid-cols-2 items-base justify-center gap-8'>

                    
                <div className="grid gap-4 border-r-2">
                <div>
                    <label htmlFor="title">Title</label>
                    <select id='title' className=" border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"> 
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Miss.</option>
                        <option>Dr.</option>
                        <option>Engr.</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                       id="firstName"
                       name="firstName"
                       type="text"
                       required
                       className=" border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                       placeholder="Enter email"
         
                     />
                </div>
                <div>
                    <label htmlFor="lastName">Surname</label>
                    <input
                       id="lastName"
                       name="lastName"
                       type="text"
                        className=" border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                       placeholder="Enter first name "
         
                     />
                </div>
                <div className="grid gap-2">
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                     id="email"
                     name="email"
                     type="email"
                      className=" border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"           
                     placeholder="Enter email"
         
                   />
                </div>
                
                </div>
                <div className="grid gap-2">
                <div>
                    <label htmlFor="date">Date of Birth</label>
                    <input
                     id="date"
                     name="date"
                     type="date" 
                     className=" border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"     
                   />
                </div>
                
                </div>
               
                <div className="grid gap-2">
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        defaultCountry="US"
                        value={value}
                         onChange={setValue}
                         className=" border-l-4 border-l-[--bg-color]  w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                         />
                </div>
                
                </div>

                
              
                
                
                </div>    

                <div className="grid gap-4 ">
                <div>
                    <label htmlFor="post">Post Code</label>
                    <input
                       id="post"
                       name="post"
                       type="text"
                       required
                       className=" border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                       placeholder="Enter Post code"
         
                     />
                </div>

                <div className="grid gap-2">
                <div>
                    <label htmlFor="state">State</label>
                    <input
                     id="state"
                     name="state"
                     type="text"                    
                     className=" border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"           
                     placeholder="Enter state"
         
                   />
                </div>
                
                </div>

              
               

              

                <div className="grid gap-2">
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                     id="password"
                     name="password"
                     type="password"
                     autoComplete="current-password"
                     required
                     className=" border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"           
                     placeholder="Password"
         
                   />
                </div>
                
                </div>
                <div className="grid gap-2">

                <div>
                    <label htmlFor="ConPassword">Confirm Password</label>
                    <input
                     id="ConPassword"
                     name="ConPassword"
                     type="password" 
                     className=" border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"           
                     placeholder="Password"
         
                   />
                </div>
                <div className='bg-[--button-color] h-[2.5rem] w-[20rem] flex justify-center my-4'>
                     <button  > Submit</button>                
                        </div>
                <div className='grid gap-4 mb-4'>                    
                    <div className='flex items-center justify-center'>                    
                    <p className='text-sm text-wrap'>Already have an account yet?   </p>
                    <button onClick={handleClick} className='text-[#1242bb] flex item-center  '><span>Log in </span><span className='mt-1'><img src={left} alt='' className='w-[1rem]'/></span></button>
                    </div>
                    </div>
                </div>
               
                
                
                </div> 
                </div>
                        
            </form>
        </section>
    )
}

export default Invest