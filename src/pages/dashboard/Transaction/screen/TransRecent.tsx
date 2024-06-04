

const TransRecent = () => {
    return (
        <div className='h-[13rem]   my-8 overflow-x-auto ' >                     
        <p className='font-bold text-lg bg-[--bg-color] text-[--text-extra] rounded-lg px-2 py-2 w-[65rem] '>Recent Transaction</p>    
        <table className="table-auto w-[65rem]  items-center mt-2 bg-[--layer-color] rounded-lg p-4">
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
    <tr  className="text-center">
                   
        </tr>
    </tbody>
        </table>
        </div>
    )
}

export default TransRecent
