import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router';
import logo from '../assets/images/logo.png'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const footerLinks = {
  "title": "Quick Actions",
  "links": [
    { "name": "Home", "path": "/" },
    { "name": "About us", "path": "/about" },
    { "name": "Services", "path": "/services" },
    { "name": "Testimonial", "path": "/testimonial" },
    { "name": "Contact", "path": "/contact" }
  ]
}

const contactLinks = {
  "title": "Contact Us",
  "items": [
    {
        "name":"23 Auto Street, Motor City, MC 12345", "icon":<FaLocationDot/>
    },
    {
        "name":"(555) 123-4567", "icon":<FaPhoneAlt />
    },
    {
        "name": "Info@expertauto.com", "icon": <MdOutlineMail />  
    } 
  ]
}


const Footer = () => {
    return (
        <footer className='p-20 m-5 bg-primary-black rounded-2xl'>
            <div className='p-8 bg-black-base rounded-3xl flex items-center justify-between'>
                <div>
                    <h2 className='text-white font-bold text-3xl'>Your Car Deserves the Best Care</h2>
                    <p className='text-white text-base mt-2'>Schedule your next service today and experience the difference of <br />professional auto care</p>
                </div>
                <div>
                    <button className='py-3 px-5 bg-white font-semibold text-base rounded-lg cursor-pointer hover:bg-red-primary duration-500 hover:text-white'>Book Appointment</button>
                </div>
            </div>
            <div className='flex justify-between mt-20'>
                <div className='max-w-[400px]'>
                    <Link to={'/'}><img className='h-12 w-auto' src={logo} alt="not found" /></Link>
                    <p className='text-white text-base my-6'>Your trusted partner for professional auto repair services. Quality workmanship and honest pricing since 2010.</p>
                    <div className='flex items-center gap-4 text-xl'>
                        <Link className=' p-3 bg-black-base rounded-full'>
                            <FaFacebook className=' text-white'></FaFacebook>
                        </Link>
                        <Link className=' p-3 bg-black-base rounded-full'>
                            <FaInstagram className=' text-white'></FaInstagram>
                        </Link>
                        <Link className=' p-3 bg-black-base rounded-full'>
                            <FaLocationDot className=' text-white'></FaLocationDot>
                        </Link>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='text-white'>
                        <h1 className='text-2xl font-bold'>{footerLinks.title}</h1>
                        <div className='mt-4 flex flex-col gap-3 text-black-base text-xl'>
                            {
                                footerLinks.links.map((link, idx) => <Link to={link.path}>
                                    <li className='list-none hover:text-gray-400' key={idx}>
                                        {link.name}
                                    </li>
                                </Link>)
                            }
                        </div>
                    </div>
                    <div className='text-white'>
                        <h1 className='text-2xl font-bold'>{contactLinks.title}</h1>
                        <div className='mt-4 flex flex-col gap-3 text-black-base text-xl'>
                            {
                                contactLinks.items.map((item,idx) => <Link>
                                    <li className='list-none flex items-center gap-3' key={idx}>
                                        <span className='text-xl text-white'>{item.icon}</span> <span className='hover:text-gray-400'>{item.name}</span>
                                    </li>
                                </Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;