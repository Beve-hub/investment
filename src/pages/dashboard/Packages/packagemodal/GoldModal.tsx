import { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";
import { Oval } from 'react-loader-spinner';
import { database } from '../../../../firebase';
import { ref, get } from 'firebase/database';

interface GoldModalProps {
    onClose: () => void;
    showGold: boolean;
} 


interface UserData {
    cryptoWallet: string;
    cryptoChannel: string;
    walletAddress: string;
    status: string;
}


const GoldModal = ({onClose,showGold}:GoldModalProps) => {
    const [formInput, setFormInput] = useState({
        amount: '',
        cryptoWallet: '',
        cryptoChannel: '',
        walletAddress: '',
        packagePlan: 'Gold Plan',
        method: 'Deposit'
    });

    const [accountSelect, setAccountSelect] = useState<boolean>(false);
    const [storedData, setStoredData] = useState<UserData[]>([]);
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
                    console.log('Fetched userData:', userData);
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

        if (name === 'amount' && value) {
            setAccountSelect(true);
        }

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
                packagePlan: 'Basic Plan',
                method: 'Deposit'
            });


            if (resp){              
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
    return (
        <div className={`fixed inset-0 flex justify-center z-20 items-center ${showGold ? "visible bg-black/60" : "invisible"}`} onClick={onClose}>
            {showGold && (
                <div className={`bg-white p-4 rounded-md max-h-[90vh] overflow-y-auto ${showGold ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-2 right-2 bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center">
                    X
                </button>
                <div className='grid py-[3rem] px-6 items-center justify-between gap-6 '>
                    <div>
                        <p className="font-display text-[--bg-color] font-bold text-2xl">Gold Plan</p>
                    </div>
                    <form onSubmit={handleSubmit} className='grid gap-4'>
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
                                <p className='text-xs'>You can invest from $1001 to $5000</p>
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
                                </>
                            )}
                            <button type="submit" className="flex justify-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                                {loading ? <Oval visible={true} height="20" width="20" color="#ffff" ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass="" /> : 'Submit'}
                            </button>
                        </form>
                </div>
            </div>
            )}
        </div>
    )
}

export default GoldModal
