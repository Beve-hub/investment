import { Button } from 'antd'
import DOD from '../../../../assets/dogecoin-doge-logo.svg'
import SHB from '../../../../assets/shiba-inu-shib-logo.svg'
import USDT from '../../../../assets/tether-usdt-logo.svg'
import USDC from '../../../../assets/usd-coin-usdc-logo.svg'
import BTC from '../../../../assets/btc-logo.svg'
import ETH from '../../../../assets/ethereum-eth-logo.svg'
import TRN from '../../../../assets/tron-trx-logo.svg'
import SOl from '../../../../assets/solana-sol-logo.svg'


const PackageList = () => {
    return (
        <div className='mt-[5rem]'>
            <div className="grid md:grid-cols-4 gap-4 mx-4">
                <div className="border h-[24rem]">
                    <div className="flex justify-between px-4">
                    <p className="text-2xl font-semibold pt-4">Basic</p>
                    <div className="bg-[#a80000] text-white p-2">
                            <p className='text-sm'>80%</p>
                            <p className='text-sm'>Return</p>
                        </div>
                    </div>
                    <div className='p-3 mt-10'>
                        <p className='text-md font-semibold'>Risk Level: <span className='text-red-500'>Low</span> </p>
                        <p className='text-sm'>Low Risk Scip Plan </p>
                    </div>
                    <p className='pl-3 text-sm'>Invest in low risk scip to maximize the return</p>
                    <div className='py-6 px-3 grid justify-end'>
                        <p className='text-xs py-1'>Containing Crypto</p>
                        <div className='flex gap-1'>
                            <img src={DOD} alt=''  className='w-[1.2rem]'/>
                            <img src={SHB} alt=''  className='w-[1.2rem]'/>  
                            <img src={TRN} alt=''  className='w-[1.2rem]'/>  
                            <img src={SOl} alt=''  className='w-[1.2rem]'/>                             
                        </div>
                    </div>
                      <div className='flex items-center justify-center mt-8'>
                      <Button type="primary">Invest Now</Button>
                      </div>
                    
                </div>

                <div className="border h-[24rem]">
                    <div className="flex justify-between px-4">
                    <p className="text-2xl font-semibold pt-4">Gold</p>
                        <div className="bg-[--button-color] p-2">
                            <p className='text-sm'>109%</p>
                            <p className='text-sm'>Return</p>
                        </div>
                    </div>
                    <div className='p-3 mt-10'>
                        <p className='text-md font-semibold'>Earning Level: <span className='text-yellow-500'>Medium</span> </p>
                        <p className='text-sm'>High yield Scip Plan </p>
                    </div>
                    <p className='pl-3 text-sm'>Invest in High yield Scip to get high return</p>
                    <div className='py-6 px-3 grid justify-end'>
                        <p className='text-xs py-1'>Containing Crypto</p>
                        <div className='flex gap-1'>
                            <img src={DOD} alt=''  className='w-[1.2rem]'/>
                            <img src={SHB} alt=''  className='w-[1.2rem]'/>
                            <img src={USDC} alt=''  className='w-[1.2rem]'/>   
                            <img src={SOl} alt=''  className='w-[1.2rem]'/>    
                        </div>
                    </div>
                      <div className='flex items-center justify-center mt-8'>
                      <Button type="primary">Invest Now</Button>
                      </div>
                    
                </div>

                <div className="border h-[24rem]">
                    <div className="flex justify-between px-4">
                    <p className="text-2xl font-semibold pt-4">Diamond</p>
                    <div className="bg-[#00a830] text-white p-2">
                            <p className='text-sm'>+209%</p>
                            <p className='text-sm'>Return</p>
                        </div>
                    </div>
                    <div className='p-3 mt-10'>
                        <p className='text-md font-semibold'>Earning Level: <span className='text-green-500'>High</span> </p>
                        <p className='text-sm'>LONG-TERM HODLER PLANS </p>
                    </div>
                    <p className='pl-3 text-sm'>Top Crypto to invest for long term with low risk.</p>
                    <div className='py-6 px-3 grid justify-end'>
                        <p className='text-xs py-1'>Containing Crypto</p>
                        <div className='flex gap-1'>
                                                       <img src={BTC} alt=''  className='w-[1.2rem]'/>
                            <img src={USDC} alt=''  className='w-[1.2rem]'/>   
                            <img src={USDT} alt=''  className='w-[1.2rem]'/>  
                            <img src={ETH} alt=''  className='w-[1.2rem]'/>   
                        </div>
                    </div>
                      <div className='flex items-center justify-center mt-5'>
                      <Button type="primary">Invest Now</Button>
                      </div>
                    
                </div>

                <div className="border h-[24rem]">
                    <div className="flex justify-between px-4">
                    <p className="text-2xl font-semibold pt-4">Platinum</p>
                        <div className="bg-[#00a830] text-white p-2">
                            <p className='text-sm'>+519%</p>
                            <p className='text-sm'>Return</p>
                        </div>
                    </div>
                    <div className='p-3 mt-10'>
                        <p className='text-md font-semibold'>Earning Level: <span className='text-green-500'>Top</span> </p>
                        <p className='text-sm'>Top Crypto Performers </p>
                    </div>
                    <p className='pl-3 text-sm'>Invest & Subscribe in earning high returns of historical data.</p>
                    <div className='py-6 px-3 grid justify-end'>
                        <p className='text-xs py-1'>Containing Crypto</p>
                        <div className='flex gap-1'>                           
                            <img src={BTC} alt=''  className='w-[1.2rem]'/>  
                            <img src={ETH} alt=''  className='w-[1.2rem]'/>  
                            <img src={USDT} alt=''  className='w-[1.2rem]'/>                           
                        </div>
                    </div>
                      <div className='flex items-center justify-center mt-6'>
                      <Button type="primary">Invest Now</Button>
                      </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PackageList
