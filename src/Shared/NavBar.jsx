import React from 'react';
import logo from '../assets/images/logo2.png'
import { NavLink } from 'react-router';
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/financing'>Financing </NavLink></li>
        <li><NavLink className='flex items-center gap-1'><span>Services </span><IoIosArrowDown></IoIosArrowDown> </NavLink></li>
        <li><NavLink to='/about'><span>About Us </span><IoIosArrowDown></IoIosArrowDown> </NavLink></li>
        <li><NavLink to='/blog'>Blog </NavLink></li>
        <li><NavLink to='/contact'>contact </NavLink></li>
    </>
    return (
        <nav className='flex justify-between items-center'>
            <div>
                <img className='h-14 w-auto object-cover' src={logo} alt="" />
            </div>
            <ul className='flex font-normal items-center gap-6 text-base text-[#D5D5D5]'>
                {links}
            </ul>
            <div>
                <button className='common-btn'>Book Appointment</button>
            </div>
        </nav>
    );
};

export default NavBar;