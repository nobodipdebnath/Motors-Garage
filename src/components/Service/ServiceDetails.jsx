import React from 'react';

const ServiceDetails = () => {
    return (
        <div className='p-8 bg-[#1A1A1A08] flex flex-col gap-6 rounded-2xl'>
            <h1 className='text-[40px] font-bold text-black-accent'>Service Details</h1>
            <hr className='text-[#E2E2E2]' />
            <button className='common-btn'>Book Appointment</button>
            <button className='text-base text-black-accent font-bold py-3 bg-white rounded-lg hover:-translate-y-1 border border-[#E2E2E2] cursor-pointer hover:bg-red-secondary duration-500 hover:text-white'>Ask a Question</button>
        </div>
    );
};

export default ServiceDetails;