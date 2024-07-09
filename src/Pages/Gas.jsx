import React from 'react';
import GasBanner from '../Components/GasBanner/GasBanner';
import FeaturedGas from '../Components/FeaturedGas/FeaturedGas';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Gas = () => {
    return (
        <div>
            <Navbar />
            <GasBanner />
            <FeaturedGas />
            <Footer />
        </div>
    );
};

export default Gas;