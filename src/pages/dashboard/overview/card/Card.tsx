import { useEffect, useState } from 'react';
import Wallet from '../../../../assets/wallet.svg';
import BasicModal from '../cardModal/BasicModal';
import GoldModal from '../cardModal/GoldModal';
import DiamondModal from '../cardModal/DiamondModal';
import PlatinumModal from '../cardModal/PlatinumModal';
import { database } from '../../../../firebase';
import { ref, get } from 'firebase/database';
import {  auth } from "../../../../firebase";
 import { useNavigate } from'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

interface UserData {
  amount: number;
  packagePlan: string;
  status: string;
  userId: string;
}

const Card = () => {
  const navigate = useNavigate();
  // Basic state
  const [totalDepositBasic, setTotalDepositBasic] = useState<number>(0);
  const [totalWithdrawalBasic, setTotalWithdrawalBasic] = useState<number>(0);
  const [showBasic, setShowBasic] = useState<boolean>(false);

  // Gold state
  const [totalDepositGold, setTotalDepositGold] = useState<number>(0);
  const [totalWithdrawalGold, setTotalWithdrawalGold] = useState<number>(0);
  const [showGold, setShowGold] = useState<boolean>(false);

  // Diamond state
  const [totalDepositDiamond, setTotalDepositDiamond] = useState<number>(0);
  const [totalWithdrawalDiamond, setTotalWithdrawalDiamond] = useState<number>(0);
  const [showDiamond, setShowDiamond] = useState<boolean>(false);

  // Platinum state
  const [totalDepositPlatinum, setTotalDepositPlatinum] = useState<number>(0);
  const [totalWithdrawalPlatinum, setTotalWithdrawalPlatinum] = useState<number>(0);
  const [showPlatinum, setShowPlatinum] = useState<boolean>(false);

  const [userId, setUserId] = useState<string | null>(null);
 
 
  useEffect(() => {
    // Listen to authentication state changes
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
         setTotalDepositBasic(0);
         setTotalDepositGold(0);
         setTotalDepositDiamond(0);
         setTotalDepositPlatinum(0);
        
         setTotalWithdrawalBasic(0);
         setTotalWithdrawalGold(0);
         setTotalWithdrawalDiamond(0);
         setTotalWithdrawalPlatinum(0);


       // Update deposit amounts based on packagePlan
       console.log("this is deposit data", depositData)
       depositData.forEach((data) => {
        if (data.status === 'Successful') {
          switch (data.packagePlan) {
            case 'Basic Plan':
              setTotalDepositBasic((prevTotal) => prevTotal + Number(data.amount));
              break;
            case 'Gold Plan':
              setTotalDepositGold((prevTotal) => prevTotal + Number(data.amount));
              break;
            case 'Diamond Plan':
              setTotalDepositDiamond((prevTotal) => prevTotal + Number(data.amount));
              break;
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
            case 'Basic':
              setTotalWithdrawalBasic((prevTotal) => prevTotal + Number(data.amount));
              break;
            case 'Gold':
              setTotalWithdrawalGold((prevTotal) => prevTotal + Number(data.amount));
              break;
            case 'Diamond':
              setTotalWithdrawalDiamond((prevTotal) => prevTotal + Number(data.amount));
              break;
            case 'Platinum':
              setTotalWithdrawalPlatinum((prevTotal) => prevTotal + Number(data.amount));
              break;
            default:
              break;
          }
        }
      });

      console.log('this is total deposit data', totalDepositBasic);
      console.log('this is set total deposit data', setTotalDepositBasic);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, [userId]);

  const handleBasic = () => {
    console.log(totalDepositBasic)
    console.log(userId)
    setShowBasic(!showBasic);
  };

  const handleGold = () => {
    setShowGold(!showGold);
  };

  const handleDiamond = () => {
    setShowDiamond(!showDiamond);
  };

  const handlePlatinum = () => {
    setShowPlatinum(!showPlatinum);
  };

  return (
    <div className='grid mx-4 my-4  gap-6 md:grid-cols-4 justify-center items-center'>
      <div onClick={handleBasic} className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[#025483] border-r-4 border-[#003e62]  w-[15rem] cursor-pointer'>
        <div className='flex gap-1 items-center'>
          <div className='w-[22px] h-[22px] bg-[#fff] p-1 rounded-sm'>
            <img src={Wallet} alt='' className='w-[16px]' />
          </div>
          <h2 className='text-md text-white font-semibold'>Basic Balance</h2>
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center gap-2'>
            <span className='font-medium text-xl text-white'>$</span>
            <h1 className='font-bold text-2xl text-white'>{(totalDepositBasic - totalWithdrawalBasic) <= 0 ? 0 : (totalDepositBasic - totalWithdrawalBasic)}</h1>
     
          </div>
          <p className='text-sm text-white'>Available Balance</p>
        </div>
      </div>

      <div onClick={handleGold} className='border-r-[5px] bg-[#d18f25] border-[#ffc15e]  grid justify-start px-4 py-6 rounded-2xl gap-8  w-[15rem]'>
        <div className='flex items-center gap-1'>
          <div className='w-[22px] h-[22px] bg-white p-1 rounded-sm'>
            <img src={Wallet} alt='' className='w-[16px]' />
          </div>
          <h2 className='text-md font-semibold text-white'>Gold Balance</h2>
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center gap-2'>
            <span className='font-medium text-xl text-white'>$</span>
            <h1 className='font-bold text-2xl text-white'>{(totalDepositGold - totalWithdrawalGold) <= 0 ? 0 : (totalDepositGold - totalWithdrawalGold)}</h1>
          </div>
          <p className='text-sm text-white'>Available Balance</p>
        </div>
      </div>

      <div onClick={handleDiamond} className='border-r-[5px] border-[#350163] bg-[#6633b9] grid justify-start px-4 py-6 rounded-2xl gap-8  w-[15rem]'>
        <div className='flex items-center gap-1'>
          <div className='w-[22px] h-[22px] bg-[#fffafa] p-1 rounded-sm items-center'>
            <img src={Wallet} alt='' className='w-[16px]' />
          </div>
          <h2 className='text-md font-semibold text-white'>Diamond Balance</h2>
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center gap-2'>
            <span className='font-medium text-xl text-white'>$</span>
            <h1 className='font-bold text-2xl text-white'>{(totalDepositDiamond - totalWithdrawalDiamond) <= 0 ? 0 : (totalDepositDiamond - totalWithdrawalDiamond)}</h1>
          </div>
          <p className='text-sm text-white'>Available Balance</p>
        </div>
      </div>

      <div onClick={handlePlatinum} className='border-r-[5px] bg-[#158028] border-[#70ff8b] grid justify-start px-4 py-6 rounded-2xl gap-8  w-[15rem]'>
        <div className='flex items-center gap-1'>
          <div className='w-[22px] h-[22px] bg-white p-1 rounded-sm'>
            <img src={Wallet} alt='' className='w-[16px]' />
          </div>
          <h2 className='text-md font-semibold text-white'>Platinum Balance</h2>
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center gap-2'>
            <span className='font-medium text-xl text-white'>$</span>
            <h1 className='font-bold text-2xl text-white'>{(totalDepositPlatinum - totalWithdrawalPlatinum) <= 0 ? 0 : (totalDepositPlatinum - totalWithdrawalPlatinum)}</h1>
          </div>
          <p className='text-sm text-white'>Available Balance</p>
        </div>
      </div>

      <BasicModal showBasic={showBasic} onClose={() => setShowBasic(false)} />
      <GoldModal showGold={showGold} onClose={() => setShowGold(false)} />
      <DiamondModal showDiamond={showDiamond} onClose={() => setShowDiamond(false)} />
      <PlatinumModal showPlatinum={showPlatinum} onClose={() => setShowPlatinum(false)} />
    </div>
  );
};

export default Card;
