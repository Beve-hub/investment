import { useNavigate } from 'react-router-dom'
import { InvestBar } from '../../../../utils/teamData'
import { AdminBar } from '../../../../utils/teamData'

interface InvestBarItem {
    image: string;
    name: string;
    title: string;
    description: string;
    contact1: string;
    contact2: string;
}

const TeamBody = () => {
    const navigate = useNavigate();

    const handleClick = (item: InvestBarItem ) => {
        navigate('/bodyDetails', { state: { item } });
    };


    return (
        <section className="min-h-[20rem] py-20 flex bg-[--text-extra] items-center justify-center">
        <div className="max-w-[60rem] w-full">
            <div className="max-w-[100rem] mx-[2rem] gap-2 grid ">
               
                <div className="md:col-span-2 grid gap-8">
                    <div className="grid gap-3">
                        <p className="text-wrap text-xl font-display">
                        Our firm's business structure provides distinct client service advantages. Portfolio managers, analysts, and investment committee members are one and the same. They also meet directly with our clients. On a daily basis they are involved in the analysis, design and implementation of portfolios.
                        </p>
                        <p className="font-display text-xl text-wrap">
                        As a result of our team approach, each member must synthesize and analyze relevant macro-economic data, industry trends, and company financials as a basis for investment recommendations. This level of daily involvement keeps each member acutely aware of market fundamentals and emphasizes the accountability links between, idea generation, analysis, investment recommendation and ultimately, account performance. This increased accountability helps align interests more closely with our clients’ interests. Accessibility and accountability, combined with an experienced support staff provides us the tools to deliver a superior level of customer service.
                        </p>
                        <div>
                            <div className='py-6'>
                                <p className='text-2xl font-bold py-3 font-display'>Investor Team</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {InvestBar.map(( item,index) => (
                                         <div key={index} onClick={() => handleClick(item)} className=" p-4 rounded-lg grid gap-4">
                                         <img src={item.image} alt='' className="" />
                                         <div>
                                             <h3 className="text-lg font-bold font-display">{item.name}</h3>
                                             <p className="text-sm text-gray-600 font-display">{item.title}</p>                                            
                                         </div>
                                     </div>
                                    ))}
                                </div>
                            </div>

                            <div className='py-6'>
                                <p className='text-2xl font-bold py-3 font-display'>Administrative Team</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {AdminBar.map(( item,index) => (
                                         <div key={index} onClick={() => handleClick(item)} className=" p-4 rounded-lg grid gap-4">
                                         <img src={item.image} alt='' className="" />
                                         <div>
                                             <h3 className="text-lg font-bold font-display">{item.name}</h3>
                                             <p className="text-sm text-gray-600 font-display">{item.title}</p>                                            
                                         </div>
                                     </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                  

                </div>
                
            </div>
        </div>
    </section>
    )
}

export default TeamBody
