import React from 'react';
import Hero from '../Shared/Hero';
import ServiceDetails from '../components/Service/ServiceDetails';
import Shop from '../components/Service/Shop';

const ShopRe = () => {
    return (
        <div>
            <Hero image={"/src/assets/images/shop.jpg"}></Hero>
            <div className='mx-[7%] grid grid-cols-3 gap-10'>
                <div className='col-span-2'>
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