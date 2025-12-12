import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Press from '../components/Press';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import News from '../components/News';
import Branches from '../components/Branches';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <WhyChooseUs />
            <Press />
            <Team />
            <Testimonials />
            <News />
            <Branches />
        </>
    );
};

export default HomePage;