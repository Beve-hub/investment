import left from '../../../assets/right.svg'
import {useNavigate} from 'react-router-dom'
import logo from '../../../assets/logo.png'
const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register')
    }; 

    const handleSubmit = () => {
        navigate('/overview')
    }

    return (
        <section className='grid justify-center items-center w-screen h-[40rem] px-[1rem]'>
            <div className='border-b-2 border-[--bg-color] flex items-center'>
                <img src={logo} alt='' className='w-[4rem] py-4'/>
                <p className='font-display font-bold text-2xl'>Crownstone</p>
            </div>
            <div className="bg-[#ffff]  ">
                <div className="bg-[--bg-color] p-4 my-10">
                    <p className="font-bold font-display text-xl text-white">Log in to your account </p>
                </div>
                <div className='grid md:grid-cols-2 items-base justify-center gap-8'>

                    
                <form onClick={handleSubmit} className="grid gap-7 border-r-2">
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                       id="email"
                       name="email"
                       type="email"
                       required
                       className=" border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                       placeholder="Enter email"
         
                     />
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
                <div className=" w-[20rem] flex items-center justify-between ">
                    <div className="flex items-center">
                    <input
                    id="remember-me"
                     name="remember-me"
                     type="checkbox"
                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                         Remember me
                        </label>
                    </div>
                    <p className="text-sm cursor-pointer">
                        <a>
                        Forgotten Password?
                        </a>                        
                    </p>
               </div>
                </div>
                <div className='bg-[--button-color] h-[2.5rem] w-[20rem] flex justify-center'>
                <button > Submit</button>                
                </div>
                <div className='flex justify-center w-[20rem] font-display text-lg'>
                <p>Keep you safe and secured</p>
                </div>
                
                </form>    

                <div>
                    <div className='grid gap-4 mb-6'>
                    <p className='font-bold font-display text-xl'>Open an HL account</p>
                    <div>                    
                    <p className='text-sm '>Don't have an account yet? let get you started and help you invest with us.   </p>
                    <button onClick={handleClick} className='text-[#1242bb] flex item-center  '><span>Invest With Us </span><span className='mt-1'><img src={left} alt='' className='w-[1rem]'/></span></button>
                    </div>
                    </div>
                    
                </div>
                </div>
                        
            </div>
        </section>
    )
}

export default Login