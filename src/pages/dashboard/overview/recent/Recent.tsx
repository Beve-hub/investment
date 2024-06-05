import { useState } from 'react';

const Recent = () => {
  // Mock transactions data
  const transactions = [
    { id: 1, amount: 100, account: 'A123', method: 'Credit Card', type: 'Deposit', date: '2023-01-01', status: 'Completed' },
    { id: 2, amount: 200, account: 'A124', method: 'PayPal', type: 'Withdrawal', date: '2023-01-02', status: 'Pending' },
    { id: 3, amount: 300, account: 'A125', method: 'Bank Transfer', type: 'Deposit', date: '2023-01-03', status: 'Failed' },
    { id: 4, amount: 400, account: 'A126', method: 'Credit Card', type: 'Withdrawal', date: '2023-01-04', status: 'Completed' },
    { id: 5, amount: 500, account: 'A127', method: 'PayPal', type: 'Deposit', date: '2023-01-05', status: 'Pending' },
    { id: 6, amount: 600, account: 'A128', method: 'Bank Transfer', type: 'Withdrawal', date: '2023-01-06', status: 'Failed' },
    { id: 7, amount: 700, account: 'A129', method: 'Credit Card', type: 'Deposit', date: '2023-01-07', status: 'Completed' },
    // Add more transactions as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  // Get current transactions
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

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
            <th className="px-4 py-2">Seria ID</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Account</th>
            <th className="px-4 py-2">Method</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody className='border-t-2 mt-4'>
          {currentTransactions.map(transaction => (
            <tr key={transaction.id} className="text-center">
              <td className="px-4 py-2">{transaction.id}</td>
              <td className="px-4 py-2">{transaction.amount}</td>
              <td className="px-4 py-2">{transaction.account}</td>
              <td className="px-4 py-2">{transaction.method}</td>
              <td className="px-4 py-2">{transaction.type}</td>
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
  );
};

export default Recent;
