import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import About from '../Components/About/About';
import IconCards from '../Components/IconCards/IconCards';
import FeaturedGas from '../Components/FeaturedGas/FeaturedGas';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <IconCards />
      <FeaturedGas />
      <Footer />
    </div>
  );
};

export default Home;