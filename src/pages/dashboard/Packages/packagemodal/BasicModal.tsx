import { useState } from 'react';
import { IoCopy } from "react-icons/io5";

interface BasicModalProps {
    onClose: () => void;
    showBasic: boolean;
}

interface UserData {
    amount: string;
    cryptoWallet: string;
    cryptoChannel: string;
    walletAddress: string;
}

const BasicModal = ({ onClose, showBasic }: BasicModalProps) => {

    const [formInput, setFormInput] = useState<UserData>({
        amount: '',
        cryptoWallet: '',
        cryptoChannel: '',
        walletAddress: '',
    });

    const [accountSelect, setAccountSelect] = useState<boolean>(false);
    const [walletDetails, setWalletDetails] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        });

        if (name === 'amount' && value) {
            setAccountSelect(true);
        }

        if (name === 'cryptoWallet') {
            switch (value) {
                case 'BTC':
                    setWalletDetails('Bitcoin');
                    break;
                case 'ETH':
                    setWalletDetails('Ethereum');
                    break;
                case 'USDT':
                    setWalletDetails('Tether');
                    break;
                default:
                    setWalletDetails(null);
                    break;
            }
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formInput.amount || !formInput.cryptoWallet || !formInput.cryptoChannel || !formInput.walletAddress) {
            alert('Please fill in all fields');
            return;
        }
        console.log('Form submitted', formInput);
    };

    return (
        <div className={`fixed inset-0 flex justify-center z-20 items-center ${showBasic ? "visible bg-black/60" : "invisible"}`} onClick={onClose}>
            {showBasic && (
                <div className={`bg-white p-4 rounded-md max-h-[90vh] overflow-y-auto ${showBasic ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
                    <button onClick={onClose} className="absolute top-2 right-2 bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center">
                        X
                    </button>
                    <div className='grid py-[3rem] px-6 items-center justify-between gap-6 '>
                        <div>
                            <p className="font-display text-[--bg-color] font-bold text-2xl">Basic Plan</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="relative">
                                <label htmlFor="amount">Amount</label>
                                <span className="absolute inset-y-0 left-0 pl-6 pt-2 flex items-center text-gray-700"> $</span>
                                <input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    className="border-l-4 border-l-[--bg-color] pl-10 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="0.00"
                                    value={formInput.amount}
                                    onChange={handleInputChange}
                                />
                                <p className='text-xs'>You can invest from $100 to $1000</p>
                            </div>
                            {accountSelect && (
                                <>
                                    <div>
                                        <label htmlFor="cryptoWallet">Crypto Wallet</label>
                                        <select
                                            id="cryptoWallet"
                                            name="cryptoWallet"
                                            className="block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                            <div className='flex items-center justify-between'>
                                                <p className='text-sm'>Network: </p>
                                                <p className='font-semibold'>{walletDetails}</p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-sm'>Wallet Address: </p>
                                                <p className='flex gap-2 font-semibold items-center'>
                                                    {formInput.walletAddress}
                                                    <span><IoCopy /></span>
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                            <button type="submit" className="mt-4 w-[18rem] bg-blue-500 text-white px-4 py-2 rounded-md">
                        Submit
                    </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );

}

export default BasicModal;
