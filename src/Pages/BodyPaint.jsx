import React from 'react';
import Hero from '../Shared/Hero';
import ServiceDetails from '../components/Service/ServiceDetails';
import BodyServices from '../components/Service/BodyServices';

const BodyPaint = () => {
    return (
        <div>
            <Hero image={"/src/assets/images/blog.jpg"} title={"Paint & Body Repair Bring Back the Original Shine"} description={"From minor scratches to severe collision damage, our skilled technicians bring your car’s body and paint back to flawless condition. Using advanced color-matching systems and premium-grade materials, we ensure your vehicle regains its original shine and showroom finish."}></Hero>
            <div className='mx-[7%] grid grid-cols-3 gap-10 my-30 '>
                <div className='col-span-2'>
                    <BodyServices></BodyServices>
                </div>
                <div className='col-span-1'>
                    <ServiceDetails></ServiceDetails>
                </div>
            </div>
        </div>
    );
};

export default BodyPaint;