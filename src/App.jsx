// src/App.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Team from './components/Team';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const isDark = savedMode ? JSON.parse(savedMode) : false; // Default to false if no saved mode
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    // Sync the dark class with isDarkMode state whenever it changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        changeLanguage={changeLanguage}
      />
      <main className="flex-grow">
        <Hero isDarkMode={isDarkMode} />
        <About />
        <HowItWorks />
        <Features isDarkMode={isDarkMode} />
        <Team />
        <Plans />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;