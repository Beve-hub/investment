
import { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { database } from '../../../firebase';

interface UserData {
    amount: string;
    cryptoWallet: string;
    cryptoChannel: string;
    walletAddress: string;
}
const Withdraw = () => {
    const [formInput, setFormInput] = useState<UserData>({
        amount: '',
        cryptoWallet: '',
        cryptoChannel: '',
        walletAddress: '',
    });

    const [packagePlan, setPackagePlan] = useState<string>(''); 
    const [walletDetails, setWalletDetails] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);  


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        });

        if (name === 'amount' && value) {
            setPackagePlan(value); // Ensure packagePlan is set when amount is entered
        } else if (name === 'cryptoWallet' && value) {
            setWalletDetails(value)
        }

       
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        // Perform form validation here

        // Example of simple validation
        if (!formInput.amount || !formInput.cryptoWallet || !formInput.cryptoChannel || !formInput.walletAddress) {
            alert('Please fill in all fields');
            return;
        }

        // Process the form data
        console.log('Form submitted', formInput);
    };

   

    return (
        <div className="w-screen h-[40rem] grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">            
        <div className='border-2 grid py-[3rem] px-6 items-center justify-between gap-6'>      
            <div>
                <p className="font-display text-[--bg-color] font-bold text-2xl">Withdraw Investment</p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <div>
                    <label htmlFor="package">Package Plan</label>
                    <select
                        id="package"
                        name="cryptoWallet"
                         className="border-l-4 border-l-[--bg-color] pl-6 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={formInput.cryptoWallet}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Plan</option>
                        <option value="Basic Plan">Basic Plan</option>
                        <option value="Gold Plan">Gold Plan</option>
                        <option value="Diamond Plan">Diamond Plan</option>
                        <option value="Platinum Plan">Platinum Plan</option>
                    </select>
                </div>
                {formInput.cryptoWallet && (
                    <div className="relative">
                        <label htmlFor="amount">Amount</label>
                        <span className="absolute inset-y-0 left-0 pl-4  flex items-center text-gray-700"> $</span>
                        <input
                            id="amount"
                            name="amount"
                            type="number"
                            className="border-l-4 border-l-[--bg-color] pl-6 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="0.00"
                            value={formInput.amount}
                            onChange={handleInputChange}
                        />
              
                    </div>
                )}
                {formInput.cryptoWallet && formInput.amount && (
                    <>
                        <div>
                            <label htmlFor="cryptoWallet">Crypto Wallet</label>
                            <select
                                id="cryptoWallet"
                                name="cryptoWallet"
                                className="border-l-4 border-l-[--bg-color] pl-6 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={formInput.cryptoWallet}
                                onChange={handleInputChange}
                            >
                                <option>Select Wallet</option>
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>USDT</option>
                            </select>
                        </div>
                        {walletDetails && (
                                    <>
                                        <div className='grid items-center justify-between'>
                                           <label htmlFor="cryptoChannel">Network Channel</label>
                                           <select
                                           id="cryptoChannel"
                                           name="cryptoChannel"
                                           
                                           className="border-l-4 border-l-[--bg-color] pl-6 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                           value={formInput.cryptoChannel}
                                           onChange={handleInputChange}
                                           >
                                            <option>choose Network Channel</option>
                                            <option>Bitcoin</option>
                                            <option>ERC20</option>
                                            <option>TRC20</option>
                                            <option>BEP20</option>
                                           </select>
                                        </div>
                                        <div className='grid items-center justify-between'>
                                           <label htmlFor="walletAddress">Wallet Address</label>
                                           <input
                                           id="walletAddress"
                                           name="walletAddress"
                                           type="text"
                                           placeholder="Enter Wallet address"
                                           className="border-l-4 border-l-[--bg-color] pl-6 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                           value={formInput.walletAddress}
                                           onChange={handleInputChange}
                                           />
                                      
                                        </div>
                                    </>
                                )}
                    </>
                )}
                <button type="submit"                
                     className=" flex justify-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                       {loading ? <Oval  visible={true}  height="20" width="20" color="#ffff"  ariaLabel="oval-loading"  wrapperStyle={{}}  wrapperClass=""  />  : 'Submit'}
                           
                    </button>
            </form>
        </div>
    </div>
    )
}

export default Withdraw