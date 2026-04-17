import React from 'react';
import NavLogo from '/assets/logo.png'
import { NavLink } from 'react-router';
import { ChartLine, Clock, House } from 'lucide-react';
const Navbar = () => {
    return (
       <div className=" p-5 flex items-center bg-base-100 shadow-sm ">
  <div className="md:flex-1">
   <img src={NavLogo} alt="Nav-Logo" />
  </div>
  <div className=" text-right flex-1">
    <ul className="menu menu-horizontal px-1  gap-3">
      <li><NavLink className={({isActive})=>{ return `${isActive ? "bg-green-900 text-white":"bg-base-200"}`} } to={'/'}><House/>Home</NavLink></li>
      <li><NavLink className={({isActive})=>{ return `${isActive ? "bg-green-900 text-white":"bg-base-200"}`} } to={'timeline'}><Clock/>Timeline</NavLink></li>
      <li><NavLink className={({isActive})=>{ return `${isActive ? "bg-green-900 text-white":"bg-base-200"}`} } to={'stats'}><ChartLine/> Stats</NavLink></li>
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;