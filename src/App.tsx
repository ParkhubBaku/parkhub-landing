// src/App.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
//import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { i18n } = useTranslation();

  // Load and apply stored dark mode setting.
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const isDark = savedMode ? JSON.parse(savedMode) : false;
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  // Update DOM class and localStorage when dark mode changes.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Update the page language when i18n language changes.
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Function to toggle dark mode
  const toggleDarkMode = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Function to change language
  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        {/* Ensure Header's props interface includes 'changeLanguage' */}
        <Header 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
          changeLanguage={changeLanguage} 
        />
        <main className="flex-grow">
          <Hero />
          <About />
          {/* Pass required isDarkMode to Features */}
          <Features isDarkMode={isDarkMode} />
          <HowItWorks />
          <Plans />
          <Team />
          <Testimonials />
          <Contact />
        {/*  <CTA />  */}
          <FAQ />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
