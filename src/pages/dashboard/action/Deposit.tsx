import { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { database } from '../../../firebase';
import { ref, get,  } from 'firebase/database';

interface UserData {
    cryptoWallet: string;
    cryptoChannel: string;
    walletAddress: string;
    status: string;
}

const Deposit = () => {
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        amount: '',
        cryptoWallet: '',
        cryptoChannel: '',
        walletAddress: '',
        packagePlan: '',
        method: 'Deposit'
    });

    const [storedData, setStoredData] = useState<UserData[]>([]);
    const [packageData, setPackageData] = useState<string>('');
    const [walletDetails, setWalletDetails] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersRef = ref(database, 'AdminData');
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    const userData: UserData[] = [];
                    snapshot.forEach((childSnapshot) => {
                        const data = childSnapshot.val();
                        userData.push({
                            cryptoWallet: data.cryptoWallet,
                            cryptoChannel: data.cryptoChannel,
                            walletAddress: data.walletAddress,
                            status: data.status
                        });
                    });
                    setStoredData(userData);
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const url = "https://crownstone-87e64-default-rtdb.firebaseio.com/DepositData.json";

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        });
        if (name === 'cryptoWallet' || name === 'walletAddress' || name === 'cryptoChannel') {
            setWalletDetails(value);
        }
    };

    const handleCopyWalletAddress = (walletAddress: string) => {
        navigator.clipboard.writeText(walletAddress ?? '')
        .then(() => {
            alert("Copied!");          
        })
        .catch((error) => {
            alert("Failed to copy address to clipboard: " + error);
        });
    };

    const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormInput({
            ...formInput,
            packagePlan: value
        });
        setPackageData(value);
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const currentDate = new Date().toISOString();
        const serialId = Math.floor(Math.random() * 1000000);
        const status = 'Pending'
        const userId = sessionStorage.getItem('userId') ?? '';      

        const adminData = storedData.find(item => item.cryptoWallet === formInput.cryptoWallet);

        if (adminData) {
            formInput.cryptoChannel = adminData.cryptoChannel;
            formInput.walletAddress = adminData.walletAddress;
        }

        try {
            const resp = await fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ ...formInput, date: currentDate, serialId: serialId, status, userId })
            });
    
            setFormInput({
                amount: '',
                cryptoWallet: '',
                cryptoChannel: '',
                walletAddress: '',
                packagePlan: '',
                method: 'Deposit'
            });

            if (resp){
                navigate('/overview');
                alert("Successful");
            } else {
                alert("Failed to store details. Please try again.");
            }
        } catch (error) {
            console.error('Error adding wallet:', error);
            alert("Error storing details. Please try again.");
        }
        
        setLoading(false);
    };

    const renderInvestmentMessage = () => {
        switch (packageData) {
            case 'Basic Plan':
                return <p className="text-gray-500">You can invest from $100 to $1000</p>;
            case 'Gold Plan':
                return <p className="text-gray-500">You can invest from $1001 to $5000</p>;
            case 'Diamond Plan':
                return <p className="text-gray-500">You can invest from $5001 to $10000</p>;
            case 'Platinum Plan':
                return <p className="text-gray-500">You can invest from $10001 to $50000</p>;
            default:
                return null;
        }
    };

    return (
        <div className="w-screen h-[40rem] grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
            <div className='border-2 grid py-[3rem] px-6 items-center justify-between gap-6'>
                <div>
                    <p className="font-display text-[--bg-color] font-bold text-2xl">Make Investment</p>
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
                    {formInput.packagePlan && (
                        <>
                            <div className="relative">
                                <label htmlFor="amount">Amount</label>
                                <span className="absolute inset-y-0 left-0 pl-6 pt-2 flex items-center text-gray-700"> $</span>
                                <input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    className="border-l-4 border-l-[--bg-color] pl-8 block w-[18rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="0.00"
                                    value={formInput.amount}
                                    onChange={handleInputChange}
                                />
                                <p className="text-xs">{renderInvestmentMessage()}</p>
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
                                    <option>Select Wallet</option>
                                    <option>BTC</option>
                                    <option>ETH</option>
                                    <option>USDT</option>
                                </select>
                            </div>
                            {walletDetails && (
                                  <>
                                  {storedData
                                   .filter(item => item.cryptoWallet === formInput.cryptoWallet)
                                   .map((item, index) => (
                                      <div key={index} className='grid gap-4'>
                                          <div className='flex items-center justify-between'>
                                              <p className='text-sm'>Wallet Name: </p>
                                              <p className='font-semibold'>{item.cryptoWallet }</p>
                                          </div>
                                          <div className='flex items-center justify-between'>
                                              <p className='text-sm'>Network: </p>
                                              <p className='font-semibold'>{item.cryptoChannel }</p>
                                          </div>
                                          <div className='flex items-center justify-between'>
                                              <p className='text-sm'>Wallet Address: </p>
                                              <p className='flex gap-2 font-semibold'>{item.walletAddress} <span><IoCopy onClick={() => handleCopyWalletAddress(item.walletAddress ?? '')} /></span></p>
                                          </div>
                                      </div>
                                  ))}
                              </>
                            )}

                            <button type="submit" className="flex justify-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                                {loading ? <Oval visible={true} height="20" width="20" color="#ffff" ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass="" /> : 'Submit'}
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Deposit;
