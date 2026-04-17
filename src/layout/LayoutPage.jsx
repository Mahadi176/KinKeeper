import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LayoutPage = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
             <ToastContainer />
           <Footer/>
        </div>
    );
};

export default LayoutPage;