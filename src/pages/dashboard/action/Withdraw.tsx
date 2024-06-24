import { useState } from "react";
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';


const Withdraw = () => {
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        amount: '',
        cryptoWallet: '',
        cryptoChannel: '',
        walletAddress: '',
        packagePlan: '',
        method: 'Withdrawal'
    });
    const [loading, setLoading] = useState(false);

    const url = "https://crownstone-87e64-default-rtdb.firebaseio.com/WithdrawData.json";

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        });
    };

    const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormInput({
            ...formInput,
            packagePlan: value
        });
    };

    const validateForm = () => {
        const { amount, cryptoWallet, cryptoChannel, walletAddress, packagePlan } = formInput;
        return amount && cryptoWallet && cryptoChannel && walletAddress && packagePlan;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            alert("All fields are required");
            return;
        }
        setLoading(true);

        const currentDate = new Date().toISOString();
        const serialId = Math.floor(Math.random() * 1000000);
        const status = 'Pending';
        const userId = sessionStorage.getItem('userId') ?? '';

        try {
            const resp = await fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formInput, date: currentDate, serialId, status, userId })
            });

            if (!resp.ok) {
                throw new Error('Failed to store details.');
            }

         
            setFormInput({
                amount: '',
                cryptoWallet: '',
                cryptoChannel: '',
                walletAddress: '',
                packagePlan: '',
                method: 'Withdrawal'
            });

            navigate('/overview');
            alert("Successful");
        } catch (error) {
            console.error('Error adding wallet:', error);
            alert("Error storing details. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-screen h-[40rem] grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
            <div className='border-2 grid py-[3rem] px-6 items-center justify-between gap-6'>
                <div>
                    <p className="font-display text-[--bg-color] font-bold text-2xl">Withdraw Investment</p>
                </div>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div>
                        <label htmlFor="packagePlan">Package Plan</label>
                        <select
                            id="packagePlan"
                            name="packagePlan"
                            className="border-l-4 border-l-[--bg-color] pl-6 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            value={formInput.packagePlan}
                            onChange={handlePackageChange}
                        >
                            <option value="">Select Plan</option>
                            <option value="Basic Plan">Basic Plan</option>
                            <option value="Gold Plan">Gold Plan</option>
                            <option value="Diamond Plan">Diamond Plan</option>
                            <option value="Platinum Plan">Platinum Plan</option>
                        </select>
                    </div>
                    <div className="relative">
                        <label htmlFor="amount">Amount</label>
                        <span className="absolute inset-y-0 left-0 pl-6 pt-6 flex items-center text-gray-700"> $</span>
                        <input
                            id="amount"
                            name="amount"
                            type="number"
                             className="border-l-4 border-l-[--bg-color] pl-10 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="0.00"
                            value={formInput.amount}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="cryptoWallet">Crypto Wallet</label>
                        <select
                            id="cryptoWallet"
                            name="cryptoWallet"
                            className="border-l-4 border-l-[--bg-color] pl-6 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            value={formInput.cryptoWallet}
                            onChange={handleInputChange}
                        >
                            <option value="">Select Wallet</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="USDT">USDT</option>
                        </select>
                    </div>
                    {formInput.cryptoWallet && (
                        <>
                            <div>
                                <label htmlFor="cryptoChannel">Network Channel</label>
                                <select
                                    id="cryptoChannel"
                                    name="cryptoChannel"
                                    className="border-l-4 border-l-[--bg-color] pl-6 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    value={formInput.cryptoChannel}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Choose Network Channel</option>
                                    <option value="Bitcoin">Bitcoin</option>
                                    <option value="ERC20">ERC20</option>
                                    <option value="TRC20">TRC20</option>
                                    <option value="BEP20">BEP20</option>
                                </select>
                            </div>
                            <div>
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
                    <button
                        type="submit"
                        className="flex justify-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        {loading ? <Oval visible={true} height="20" width="20" color="#fff" ariaLabel="oval-loading" /> : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Withdraw;
