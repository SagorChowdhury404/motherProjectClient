import React from 'react';
import Navbar from '../../pages/shared/navbar/Navbar';
import Footer from '../../pages/shared/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayouts = () => {
    const location = useLocation();
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login' )
    const noHeaderFooter2 = location.pathname.includes('register' )
    return (
        <div >
            {noHeaderFooter ||noHeaderFooter2 || <Navbar></Navbar>}

            <div className='max-w-screen-x mx-auto'>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default MainLayouts;