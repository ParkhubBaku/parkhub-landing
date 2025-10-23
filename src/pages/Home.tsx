// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Plans from '../components/Plans';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

type Props = { isDarkMode?: boolean };

const Home: React.FC<Props> = ({ isDarkMode }) => {
  return (
    <>
      <Hero />
      <About />
      <Features isDarkMode={!!isDarkMode} />
      <HowItWorks />
      <Plans />
      <Team />
      <Testimonials />
      <Contact />
      <FAQ />
    </>
  );
};

export default Home;
