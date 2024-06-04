import TransRecent from "./screen/TransRecent"
import TransTop from "./screen/TransTop"


const Transaction = () => {
    return (
        <section className='md:ml-[16rem] max-w-[70rem]  my-6 absolute top-0 w-full h-screen'>
       <TransTop/>
       <TransRecent/>
       </section>
    )
}

export default Transaction
