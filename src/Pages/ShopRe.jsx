import React from 'react';
import Hero from '../Shared/Hero';
import ServiceDetails from '../components/Service/ServiceDetails';
import Shop from '../components/Service/Shop';

const ShopRe = () => {
    return (
        <div>
            <Hero image={"https://i.ibb.co.com/Hft6rvCg/shop.jpg"}></Hero>
            <div className='md:mx-[7%] px-[3%] grid md:grid-cols-3 my-30 gap-10'>
                <div className='md:col-span-2'>
                    <Shop></Shop>
                </div>
                <div className='col-span-1'>
                    <ServiceDetails></ServiceDetails>
                </div>
            </div>
        </div>
    );
};

export default ShopRe;