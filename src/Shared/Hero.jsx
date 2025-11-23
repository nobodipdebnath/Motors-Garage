import React from 'react';
import { DiVim } from 'react-icons/di';

const Hero = ({title, description, image, home}) => {
    return (
        <div className='h-screen m-5 rounded-3xl' style={{background: `linear-gradient(192.93deg, rgba(0, 0, 0, 0) 52.14%, #090909 97.57%), url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

            {
                home ? <div className=' p-8 max-w-5xl absolute bottom-0'>
                    <h1 className='text-white text-7xl font-bold leading-[120%]'>{title}</h1>
                    <p className='text-2xl text-[#E9E9E9] my-6'>{description}</p>
                    <button className='common-btn'>Book Appointment</button>
                </div> : <div className='flex h-screen max-w-5xl mx-auto items-center justify-center flex-col'>
                    <h1 className='text-white text-5xl font-bold leading-[120%]'>{title}</h1>
                    <p className='text-2xl text-center text-[#E9E9E9] my-6'>{description}</p>
                </div>
            }
            
        </div>
    );
};

export default Hero;