import React from 'react';
import Navbar from '../../pages/shared/navbar/Navbar';
import Footer from '../../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='max-w-screen-x mx-auto'>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default MainLayouts;