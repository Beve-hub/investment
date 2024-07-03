import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { auth, firestore } from "../../../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import left from '../../../assets/right.svg';
import Loaders from '../../../component/Loader';

interface Errors {
    title?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    date?: string;
    phoneNum?: string;
    address?: string;
    postCode?: string;
    state?: string;
    password?: string;
    confrim?: string; 
}

const Invest = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [phoneNum, setPhoneNum] = useState<string | undefined>('');
    const [address, setAddress] = useState('');
    const [postCode, setPostCode] = useState('');
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');
    const [confrim, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Errors>({});
   
    useEffect(() => {    
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }, []);

    const validate = (): boolean => {
        const errors: Errors = {};
        let isValid = true;
    
        if (!title.trim()) {
            errors.title = 'Title is required';
            isValid = false;
        } 

        if (!firstName.trim()) {
            errors.firstName = 'First Name is required';
            isValid = false;
        } 

        if (!lastName.trim()) {
            errors.lastName = 'Last Name is required';
            isValid = false;
        }   

        if (!email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!date.trim()) {
            errors.date = 'Date of Birth is required';
            isValid = false;
        } 

        if (!phoneNum || !phoneNum.trim()) {
            errors.phoneNum = 'Phone Number is required';
            isValid = false;
        }

        if (!address.trim()) {
            errors.address= 'Address is required';
            isValid = false;
        } 

        if (!postCode.trim()) {
            errors.postCode = 'Post Code is required';
            isValid = false;
        } 

        if (!state.trim()) {
            errors.state = 'State is required';
            isValid = false;
        } 

        if (!password.trim()) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (password !== confrim) {
            errors.confrim = 'Passwords do not match';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleClick = () => {
        navigate('/login');
    }; 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (validate()) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                await sendEmailVerification(user);
                alert("Registration successful! A verification email has been sent to your email address.");
                if (userCredential && userCredential.user) {
                    sessionStorage.setItem('userId', userCredential.user.uid);
                    const userDocRef = doc(firestore, "users", userCredential.user.uid);
                    await setDoc(userDocRef, {
                        firstName,
                        lastName,
                        title,
                        email,
                        date,
                        phoneNum,
                        postCode,
                        state,
                        password,
                    });
                }
                navigate('/');
            } catch (error) {
                console.log(error);
                alert('Registration failed. Please try again.');
            }
        }
        setLoading(false);
    };

    return (
        <section className='grid justify-center items-center w-screen h-[40rem] px-[1rem]'>
            {loading ? (
                <div className='flex justify-center items-center'>
                    <Loaders />
                </div>
            ) : (
                <>
                    <div className='border-b-2 border-[--bg-color] flex items-center'>
                        <img src={logo} alt='logo' className='w-[4rem] py-4' />
                        <p className='font-display font-bold text-2xl'>Crownstone</p>
                    </div>
                    <form onSubmit={handleSubmit} className="bg-[#ffff]">
                        <div className="bg-[--bg-color] p-4 my-10 flex items-center justify-between">
                            <p className="font-bold font-display text-xl text-white">Invest with Us </p>
                        </div>
                        <div className='grid md:grid-cols-2 items-base justify-center gap-8'>
                            <div className="grid gap-4 border-r-2">
                                <div>
                                    <label htmlFor="title">Title</label>
                                    <select 
                                        id='title' 
                                        name='title' 
                                        value={title} 
                                        onChange={(e) => setTitle(e.target.value)} 
                                        className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    >
                                        <option value="">Select Title</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Miss.">Miss.</option>
                                        <option value="Dr.">Dr.</option>
                                        <option value="Engr.">Engr.</option>
                                    </select>
                                    {errors.title && <span className='text-[#f30000] text-sm'>{errors.title}</span>}
                                </div>
                                <div>
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        value={firstName} 
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text"
                                        className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter first name"
                                    />
                                    {errors.firstName && <span className='text-[#f30000] text-sm'>{errors.firstName}</span>}
                                </div>
                                <div>
                                    <label htmlFor="lastName">Surname</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        value={lastName} 
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text"
                                        className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter surname"
                                    />
                                    {errors.lastName && <span className='text-[#f30000] text-sm'>{errors.lastName}</span>}
                                </div>
                                <div className="grid gap-2">
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Enter email"
                                        />
                                        {errors.email && <span className='text-[#f30000] text-sm'>{errors.email}</span>}
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <div>
                                        <label htmlFor="date">Date of Birth</label>
                                        <input
                                            id="date"
                                            name="date"
                                            value={date} 
                                            onChange={(e) => setDate(e.target.value)}
                                            type="date" 
                                            className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        />
                                        {errors.date && <span className='text-[#f30000] text-sm'>{errors.date}</span>}
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <div>
                                        <label htmlFor="phoneNum">Phone number</label>
                                        <PhoneInput
                                            id="phoneNum"
                                            placeholder="Enter phone number"
                                            defaultCountry="US"
                                            value={phoneNum}
                                            onChange={setPhoneNum}
                                            className="border-l-4 border-l-[--bg-color] w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        />
                                        {errors.phoneNum && <span className='text-[#f30000] text-sm'>{errors.phoneNum}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <label htmlFor="address">Address</label>
                                    <input
                                        id="address"
                                        name="address"
                                        value={address} 
                                        onChange={(e) => setAddress(e.target.value)}
                                        type="text"
                                        className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter address"
                                    />
                                    {errors.address && <span className='text-[#f30000] text-sm'>{errors.address}</span>}
                                </div>
                                <div>
                                    <label htmlFor="postCode">Post Code</label>
                                    <input
                                        id="postCode"
                                        name="postCode"
                                        value={postCode} 
                                        onChange={(e) => setPostCode(e.target.value)}
                                        type="text"
                                        className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter post code"
                                    />
                                    {errors.postCode && <span className='text-[#f30000] text-sm'>{errors.postCode}</span>}
                                </div>
                                <div className="grid gap-2">
                                    <div>
                                        <label htmlFor="state">State</label>
                                        <input
                                            id="state"
                                            name="state"
                                            value={state} 
                                            onChange={(e) => setState(e.target.value)}
                                            type="text"
                                            className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Enter state"
                                        />
                                        {errors.state && <span className='text-[#f30000] text-sm'>{errors.state}</span>}
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input
                                            id="password"
                                            name="password"
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            autoComplete="current-password"
                                            className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                        {errors.password && <span className='text-[#f30000] text-sm'>{errors.password}</span>}
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <div>
                                        <label htmlFor="confrim">Confirm Password</label>
                                        <input
                                            id="confrim"
                                            name="confrim"
                                            value={confrim} 
                                            onChange={(e) => setConfirm(e.target.value)}
                                            type="password"
                                            className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Confirm password"
                                        />
                                    </div>
                                    <div className='bg-[--button-color] h-[2.5rem] w-[20rem] flex justify-center my-4'>
                                        <button type="submit">Submit</button>
                                    </div>
                                    <div className='grid gap-4 mb-4'>
                                        <div className='grid gap-4 mb-6'>
                                            <p className='font-bold font-display text-xl'>Open an HL account</p>
                                            <div>                    
                                                <p className='text-sm '>Already have an account yet? Provide your details and continue to invest.</p>
                                                <button onClick={handleClick} className='text-[#1242bb] flex item-center'>
                                                    <span>Log in </span>
                                                    <span className='mt-1'>
                                                        <img src={left} alt='left arrow' className='w-[1rem]'/>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>                    
                                        <div className='flex items-center justify-center'>                    
                                            <p className='text-sm text-wrap'></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </>
            )}
        </section>
    );
}

export default Invest;
