import overIcon from '../assets/overview.svg'
import paymentIcon from '../assets/payment.svg'
import walletIcon from '../assets/wallet.svg'
import companyIcon from '../assets/package.svg'


interface SidebarItem {
    name: string;
    path: string;
    icon: string;
}

export const sidebar: SidebarItem[] = [
    {
        name: 'Overview',
        path: '/overview',
        icon:  overIcon
    },
    {
        name: 'Transactions',
        path: '/payment',
        icon: paymentIcon
    },
    {
        name: 'Packages',
        path: '/package',
        icon: companyIcon
    },
    {
        name: 'Wallet',
        path: '/wallet',
        icon: walletIcon
    },
   
]