import React from 'react';
import Hero from '../Shared/Hero';
import Partner from '../components/About/Partner';
import Maintenance from '../components/About/Maintenance';

const AboutPage = () => {
    return (
        <div>
            <Hero image={"/src/assets/images/about.jpg"} title={"Driven by Precision. Powered by Trust."} description={"We’re car enthusiasts dedicated to keeping your vehicle running. With experience, we make car care simple."}></Hero>
            <Partner></Partner>
            <Maintenance></Maintenance>
        </div>
    );
};

export default AboutPage;