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
        name: 'Transaction',
        path: '/transaction',
        icon: paymentIcon
    },
    {
        name: 'Package',
        path: '/package',
        icon: companyIcon
    },
    {
        name: 'Profile',
        path: '/setting',
        icon: walletIcon
    },
   
   
]