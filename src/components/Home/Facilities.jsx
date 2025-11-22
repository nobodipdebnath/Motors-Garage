import React from 'react';

const facilities = [
    {image: "/src/assets/images/wifi.png", name: "Free wi-Fi"},
    {image: "/src/assets/images/fainance.png", name: "Financing Available"},
    {image: "/src/assets/images/location.png", name: "Free LocalShuttle"},
    {image: "/src/assets/images/snak.png", name: "Beverage & Snacks"},
    {image: "/src/assets/images/weation.png", name: "Waiting Room"},
    {image: "/src/assets/images/tv.png", name: "Tv Screen"},
]
const Facilities = () => {
    return (
        <div className='grid grid-cols-6 py-10 bg-[#F9F9F9] my-[120px]'>
            {
                facilities.map((card, idx) => <div className='flex flex-col justify-center items-center  border-l-2 border-dashed border-gray-300' key={idx}>
                    <img src={card.image} alt="" />
                    <p className='text-xl font-bold text-black-accent my-6'>{card.name}</p>
                </div>)
            }
        </div>
    );
};

export default Facilities;