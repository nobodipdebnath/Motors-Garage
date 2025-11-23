import React, { useState } from 'react';
import {Menu, X } from 'lucide-react';
import { useModal } from '../ModalContext/ModalContext';
import logo from '../assets/images/logo.png'
import { Link, NavLink } from 'react-router';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const { openModal } = useModal();

  return (
    <>
      <nav className="text-white relative">
        <div className="">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to='/' className="flex items-center">
              <img className='h-15 object-cover' src={logo} alt="" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/" className="hover:text-red-400 transition-colors">Home</NavLink>
              
              <div className="relative group">
                <NavLink to='/financing' className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                  <span>Financing</span>
                </NavLink>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                  <span>Services</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white flex flex-col items-center rounded-lg shadow-xl py-2 border border-gray-200">
                    <NavLink to='/mobileMechanic'>
                        <p className="block px-4 py-3 text-black text-lg  hover:text-red-600 transition-colors cursor-pointer">Mobile Mechanic</p>
                    </NavLink>
                    <NavLink to='/bodyPaint'>
                        <p className="block px-4 py-3 text-black text-lg  hover:text-red-600 transition-colors cursor-pointer">Paint And Body</p>
                    </NavLink>
                    <NavLink to='/shop'>
                        <p className="block px-4 py-3 text-black text-lg  hover:text-red-600 transition-colors cursor-pointer">In Shop Repairs</p>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                  <span>About Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white flex flex-col items-center rounded-lg shadow-xl py-2 border border-gray-200">
                    <NavLink to='/about'>
                        <p className="block px-4 py-3 text-black text-lg  hover:text-red-600 transition-colors cursor-pointer">About</p>
                    </NavLink>
                    <NavLink to='/directions'>
                        <p className="block px-4 py-3 text-black text-lg  hover:text-red-600 transition-colors cursor-pointer">Directions</p>
                    </NavLink>
                    <NavLink to='/special'>
                        <p className="block px-4 py-3 text-black text-lg  hover:text-red-600 transition-colors cursor-pointer">Special</p>
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink to='/blog' className="hover:text-red-400 transition-colors">Blog</NavLink>
              <NavLink to='/contact' className="hover:text-red-400 transition-colors">Contact</NavLink>
            </div>

            {/* Book Appointment Button */}
            <div className="hidden md:block">
              <button onClick={openModal} className='common-btn'>Book Appointment</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden mr-10">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-red-400 transition-colors"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden z-50 bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Home</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Financing</a>
              
              <div className="pl-4 space-y-1">
                <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md text-gray-300">Mobile Mechanic</a>
                <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md text-gray-300">Paint And Body</a>
                <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md text-gray-300">In Shop Repairs</a>
              </div>

              <div className="pl-4 space-y-1">
                <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md text-gray-300">Specials</a>
                <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md text-gray-300">Directions</a>
              </div>

              <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Blog</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Contact</a>
              <a href="#" className="block px-3 py-4 bg-red-600 hover:bg-red-700 rounded-md mx-3 text-center font-semibold">
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}