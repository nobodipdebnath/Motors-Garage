import React from 'react';
import Title from '../../Shared/Title';
import Marquee from 'react-fast-marquee';

const Partner = () => {
    const partners = [
        {id: 1, image: "../../assets/images/partner.png"},
        {id: 2, image: "../../assets/images/partner2.png"},
        {id: 3, image: "../../assets/images/partner3.png"},
        {id: 4, image: "../../assets/images/partner4.png"},
        {id: 5, image: "../../assets/images/partner5.png"},
        {id: 6, image: "../../assets/images/patner1.png"},
    ]
    return (
        <div className='mt-[120px] mb-20'>
            <Title title={"Great companies support us!"} description={"We’re honored to collaborate with leading automotive brands and financing providers who share our commitment to quality, innovation, and customer trust."} subTitle={"Our Proud Sponsors & Partner"}></Title>
            <Marquee speed={70} pauseOnHover={true}>
                <div className='mt-12 flex gap-10  items-center'>
                    {
                        partners.map(partner => <div key={partner.id}>
                            <img className='h-[120px] w-auto object-cover gap-8' src={partner.image} alt="" />
                        </div>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Partner;