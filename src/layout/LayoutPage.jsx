import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const LayoutPage = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
           <Footer/>
        </div>
    );
};

export default LayoutPage;