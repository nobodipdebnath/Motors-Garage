import React from 'react';
import Title from '../../Shared/Title';
import Marquee from 'react-fast-marquee';

const Partner = () => {
    const partners = [
        {id: 1, text: "SoftVance"},
        {id: 2, text: "CreativeIt"},
        {id: 3, text: "People&Tack"},
        {id: 4, text: "BDCalling"},
        {id: 5, text: "betopiya"},
        {id: 6, text: "Sperteck"},
        {id: 7, text: "JVAI"},
    ]
    return (
        <div className='mt-[120px] mb-20'>
            <Title title={"Great companies support us!"} description={"We’re honored to collaborate with leading automotive brands and financing providers who share our commitment to quality, innovation, and customer trust."} subTitle={"Our Proud Sponsors & Partner"}></Title>
            <Marquee speed={70} pauseOnHover={true}>
                <div className='mt-12 flex gap-10 pb-5  items-center'>
                    {
                        partners.map(partner => <div key={partner.id}>
                            <p className='text-6xl rancho my-text'>{partner.text}</p>
                        </div>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Partner;