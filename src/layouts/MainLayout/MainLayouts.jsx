import React from 'react';
import Navbar from '../../pages/shared/navbar/Navbar';
import Footer from '../../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div className='max-w-screen-x mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;