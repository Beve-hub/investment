import { useEffect, useState } from 'react';
import Wallet from '../../../../assets/wallet.svg'
import { database } from '../../../../firebase';
import { ref, get } from 'firebase/database';
import {  auth } from "../../../../firebase";
 import { useNavigate } from'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';


interface PlatinumModalProps {
    onClose: () => void;
    showPlatinum: boolean;
} 

interface UserData {
  amount: number;
  packagePlan: string;
  status: string;
  userId: string;
}

const PlatinumModal = ({showPlatinum, onClose}: PlatinumModalProps) => {
  const navigate = useNavigate();
  const [totalDepositPlatinum, setTotalDepositPlatinum] = useState<number >(0);
  const [totalWithdrawalPlatinum, setTotalWithdrawalPlatinum] = useState<number>(0);
  const [userId, setUserId] = useState<string | null>(null);
   

    useEffect(() => {      
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          navigate('/login'); // Navigate to login if not authenticated
        }
      });
  
      return () => unsubscribe();
    }, [navigate]);
   
  
    useEffect(() => {
      const fetchData = async () => {
        if (!userId) return;
        console.log('Fetching user data for userId:', userId);
  
  
        try {
          const depositRef = ref(database, `DepositData`);
          const withdrawalRef = ref(database, `WithdrawData`);
          console.log('data', depositRef);
          
  
          
          const depositSnapshot = await get(depositRef);
          console.log('this is data snapshot', depositSnapshot)
          const withdrawalSnapshot = await get(withdrawalRef);
  
          const depositData: UserData[] = [];
          const withdrawalData: UserData[] = [];
      
          if (depositSnapshot.exists()) {
            console.log('data', depositSnapshot.exists());
            depositSnapshot.forEach((childSnapshot) => {
              const data = childSnapshot.val();
              console.log('this is data', data);          
              if (data.userId === userId) {
                depositData.push({
                  amount: data.amount,
                  packagePlan: data.packagePlan,
                  status: data.status,
                  userId: data.userId,
                });
              }
            });
          }
  
          if (withdrawalSnapshot.exists()) {
            withdrawalSnapshot.forEach((childSnapshot) => {
              const data = childSnapshot.val();
              if (data.userId === userId) {
                withdrawalData.push({
                  amount: data.amount,
                  packagePlan: data.packagePlan,
                  status: data.status,
                  userId: data.userId,
                });
              }
            });
          }         
  
             // Reset the deposit and withdrawal amounts
           setTotalDepositPlatinum(0);
           setTotalWithdrawalPlatinum(0);
        
           depositData.forEach((data) => {
            if (data.status === 'Successful') {
              switch (data.packagePlan) {
                case 'Platinum Plan':
                  setTotalDepositPlatinum((prevTotal) => prevTotal + Number(data.amount));
                  break;                
                default:
                  break;
              }
            }
          });
    
          console.log("this is withdraw data", withdrawalData)
          // Update withdrawal amounts based on packagePlan
          withdrawalData.forEach((data) => {
            if (data.status === 'Successful') {
              switch (data.packagePlan) {
                case 'Platinum Plan':
                  setTotalWithdrawalPlatinum((prevTotal) => prevTotal + Number(data.amount));
                  break;
                default:
                  break;
              }
            }
          });
    

        } catch (error) {
          console.error('Error fetching data', error);
        }
      };
      fetchData();
    }, [userId]);
    
    return (
        <div onClick={onClose} className={`fixed inset-0 flex z-20 justify-center items-center ${showPlatinum ? "visible bg-black/20" : "invisible"}`}>
             <div className={`bg-white p-4 rounded-md max-h-[90vh] overflow-y-auto ${showPlatinum ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
              <button onClick={onClose} className="absolute top-2 right-2 bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center">
                X
            </button>
            <div className='flex justify-center'>
            <div className='grid py-[6rem] px-6 items-center justify-between gap-6 md:grid-cols-3'>

       <div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#14e7a4]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[#14e7a4] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-md  font-semibold'> Stock Balance</h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>0.00</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
       </div>

       <div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#14e7a4]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[#14e7a4] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-md  font-semibold'> ETF Bonds Balance</h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>0.00</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
       </div>

       <div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#14e7a4]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[#14e7a4] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-md  font-semibold'> Real Estate Balance</h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>0.00</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
       </div>

       <div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#14e7a4]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[#14e7a4] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-sm  font-semibold'> Energy Company Balance</h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>0.00</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
       </div>

       <div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#14e7a4]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[#14e7a4] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-md  font-semibold'> Mutual Funds Balance</h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>0.00</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
       </div>

       <div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#14e7a4]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[#14e7a4] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-sm  font-semibold'> Crypto Currency Balance</h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>{(totalDepositPlatinum - totalWithdrawalPlatinum) <= 0 ? 0 : (totalDepositPlatinum - totalWithdrawalPlatinum)}</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
       </div>

       <div  className=' grid justify-start px-4 py-6 rounded-2xl gap-8 border border-r-4 border-[#14e7a4]  w-[15rem] cursor-pointer'>


<div className='flex gap-1 items-center'>
  <div className='w-[22px] h-[22px] bg-[#14e7a4] p-1 rounded-sm' >
  <img src={Wallet} alt='' className='w-[16px] filter invert' />
  </div>
  
  <h2 className='text-md  font-semibold'> Treasury Balance</h2>
</div>
<div className='grid gap-2'>
  <div className='flex items-center gap-2'>
    <span className='font-medium text-xl'>$</span>
    <h1 className='font-bold text-2xl'>0.00</h1>
  </div>
  <p className='text-sm '>Available Balance</p>
</div>
       </div>

            </div>
            </div>
            
            </div>
        </div>
    )
}

export default PlatinumModal
