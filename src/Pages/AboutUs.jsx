import React from 'react';
import About from '../Components/About/About';
import IconCards from '../Components/IconCards/IconCards';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <About />
            <IconCards />
            <Footer />
        </div>
    );
};

export default AboutUs;