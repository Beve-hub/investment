import React from 'react'
import WalletTop from './screen/WalletTop'
import WalletCard from './screen/WalletCard'
import WalletSearch from '../../../utils/WalletSearch'

interface Props {
    
}

const Wallet: React.FC<Props> = () => {
    return (
        <section className='md:ml-[16rem] max-w-[70rem]  my-6 absolute top-0 w-full h-screen'>
            <WalletTop/>
            <WalletSearch/>
            <WalletCard/>
        </section>
    )
}

export default Wallet
