import { useEffect, useState } from 'react';
import { database } from '../../../../firebase';
import { ref, get } from 'firebase/database';

interface UserData {
  amount: string;
  package: string;
  method: string;
  wallet: string;
  date: string;
  serialId: string;
  status: string;
  userId: string;
}


const TransRecent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [storedData, setStoredData] = useState<UserData[]>([]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based
    const year = date.getFullYear() % 100; // Get last two digits of year
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem('userId');
      try {
        const depositRef = ref(database, 'DepositData');
        const withdrawalRef = ref(database, 'WithdrawData');

        const depositSnapshot = await get(depositRef);
        const withdrawalSnapshot = await get(withdrawalRef);

        const depositData: UserData[] = [];
        const withdrawalData: UserData[] = [];

        if (depositSnapshot.exists()) {
          depositSnapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            if (data.userId === userId) {
              depositData.push({
                amount: data.amount,
                package: data.packagePlan,
                wallet: data.cryptoWallet,
                method: data.method,
                date: formatDate(data.date),
                serialId: data.serialId,
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
                package: data.packagePlan,
                wallet: data.cryptoWallet,
                method: data.method,
                date: formatDate(data.date),
                serialId: data.serialId,
                status: data.status,
                userId: data.userId,
              });
            }
          });
        }

        // Update the state inside each conditional block
        setStoredData([...withdrawalData, ...depositData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const transactionsPerPage = 8;

    // Calculate total pages
  const totalPages = Math.ceil(storedData.length / transactionsPerPage);

  // Get current transactions
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = storedData.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='h-[18rem] my-8 overflow-x-auto overflow-y-hidden'>
    <p className='font-bold text-lg bg-[--bg-color] text-[--text-extra] rounded-lg px-2 py-2 w-[70rem]'>Recent Transaction</p>
    <table className="table-auto w-[70rem] items-center mt-2 bg-[--layer-color] rounded-lg p-4">
      <thead className='border-b-2'>
        <tr>
          <th className="px-4 py-2">Serial ID</th>
          <th className="px-4 py-2">Amount</th>
          <th className="px-4 py-2">Package</th>
          <th className="px-4 py-2">Method</th>
          <th className="px-4 py-2">Wallet</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody className='border-t-2 mt-4'>
        {currentTransactions.map(transaction => (
          <tr key={transaction.serialId} className="text-center">
            <td className="px-4 py-2">{transaction.serialId}</td>
            <td className="px-4 py-2">${transaction.amount}</td>
            <td className="px-4 py-2">{transaction.package}</td>
            <td className="px-4 py-2">{transaction.method}</td>
            <td className="px-4 py-2">{transaction.wallet}</td> {/* Assuming Method is correct, otherwise should be `method` */}
            <td className="px-4 py-2">{transaction.date}</td>
            <td className="px-4 py-2">{transaction.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className='flex justify-center mt-4'>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`px-2 py-1 mx-1 text-sm ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </div>
    )
}

export default TransRecent
