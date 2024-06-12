import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import SideBar from '../layout/SideBar';



interface Props {
    children: React.ReactNode;
}

const NavbarWrapper = ({ children }: Props) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState<boolean>(true);
    const [showSidebar, setShowSidebar] = useState<boolean>(true);

    useEffect(() => {
        const restrictedPaths = [
            '/login',
            '/register',
            '/validId',
   
            
            
        ];

        const showNavbarPaths = [
            '/overview',           
            '/transaction',
            '/package',
            '/setting',
            '/packageForm'
            
        ];

        if (restrictedPaths.includes(location.pathname)) {
            setShowNavbar(false);
            setShowSidebar(false);
        } else if (showNavbarPaths.includes(location.pathname)) {
            setShowNavbar(false);
            setShowSidebar(true);
        } else {
            setShowNavbar(true);
            setShowSidebar(false);
        }
    }, [location]);

    return (
        <div>
            {showNavbar && <Navbar />}
            {showSidebar && <SideBar />}
            {!(!showNavbar || !showSidebar) && children}
        </div>
    );
};

export default NavbarWrapper;