import React from 'react';
import Hero from '../Shared/Hero';
import Financing from '../components/Financing/Financing';
import Trusted from '../components/Financing/Trusted';

const FinancingPage = () => {
    return (
        <div>
            <Hero image={"https://i.ibb.co.com/ZpDV4nXq/blog.jpg"} title={"Flexible Financing to Keep You Moving"} description={" Car troubles shouldn’t slow you down. With our easy payment plans and trusted financing partners, you can get the repairs you need today — and pay over time with comfort and confidence."}></Hero>
            <div className='mx-[7%]'>
                <Financing></Financing>
                <Trusted></Trusted>
            </div>
        </div>
    );
};

export default FinancingPage;