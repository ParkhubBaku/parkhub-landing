// src/components/Header.jsx
import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import logo from '../assets/logo/logo.png';
import gbFlag from '../assets/images/flags/gb.svg';
import azFlag from '../assets/images/flags/az.svg';
import ruFlag from '../assets/images/flags/ru.svg';

const Header = ({ isDarkMode, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useGSAP(() => {
    gsap.from('header', { opacity: 0, y: -50, duration: 1, ease: 'power3.out' });
    gsap.to('.nav-menu', {
      width: isOpen ? '60vw' : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.6,
      ease: 'power3.inOut',
      overwrite: 'auto',
    });
    gsap.to('.overlay', {
      opacity: isOpen ? 0.5 : 0,
      duration: 0.6,
      ease: 'power3.inOut',
      visibility: isOpen ? 'visible' : 'hidden',
      overwrite: 'auto',
    });
  }, [isOpen]);

  const languages = [
    { code: 'en', label: 'EN', flag: gbFlag }, // UK flag SVG
    { code: 'az', label: 'AZ', flag: azFlag }, // Azerbaijan flag SVG
    { code: 'ru', label: 'RU', flag: ruFlag }, // Russia flag SVG
  ];

  return (
    <header className="fixed w-full top-0 z-20 shadow-lg dark:bg-black bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src={logo} alt="ParkHub Logo" className="h-10 w-auto sm:h-12" />
          <span className="ml-3 text-xl sm:text-2xl font-semibold dark:text-white text-gray-900">{t('ParkHub')}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <a href="#about-us" className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#7e22ce] hover:text-[#7e22ce] transition-colors">{t('About Us')}</a>
          <a href="#pricing" className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#7e22ce] hover:text-[#7e22ce] transition-colors">{t('Pricing')}</a>
          <a href="#features" className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#7e22ce] hover:text-[#7e22ce] transition-colors">{t('Features')}</a>
          <a href="#contact" className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#7e22ce] hover:text-[#7e22ce] transition-colors">{t('Contact')}</a>
          <a href="#faq" className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#7e22ce] hover:text-[#7e22ce] transition-colors">{t('FAQ')}</a>
          <a
            href="#cta"
            className="bg-[#7e22ce] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#9b59d6] transition-colors"
          >
            {t('Get Started')}
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 focus:outline-none"
          >
            <i className={isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'}></i>
          </button>
          {/* Language Buttons with Custom Flags */}
          <div className="flex space-x-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`p-1 rounded-full flex items-center gap-1 text-sm font-medium transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-[#7e22ce] text-white'
                    : 'dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-300'
                }`}
              >
                <img
                  src={lang.flag}
                  alt={`${lang.label} flag`}
                  className="w-4 h-4"
                  onError={() => console.error(`Failed to load flag for ${lang.label}`)}
                />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 focus:outline-none"
          >
            <i className={isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'}></i>
          </button>
          {/* Mobile Language Buttons with Custom Flags */}
          <div className="flex space-x-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`p-1 rounded-full flex items-center gap-1 text-xs font-medium transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-[#7e22ce] text-white'
                    : 'dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-300'
                }`}
              >
                <img
                  src={lang.flag}
                  alt={`${lang.label} flag`}
                  className="w-3 h-3"
                  onError={() => console.error(`Failed to load flag for ${lang.label}`)}
                />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="text-3xl dark:text-white text-gray-900 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <i className={isOpen ? 'bi bi-x' : 'bi bi-list'}></i>
          </button>
        </div>

        {/* Overlay */}
        <div
          className="overlay fixed inset-0 bg-black opacity-0 z-10 pointer-events-none"
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          onClick={closeMenu}
        />

        {/* Mobile Menu */}
        <div className="nav-menu fixed top-0 right-0 h-screen w-0 lg:hidden dark:bg-black bg-white shadow-md opacity-0 z-20 overflow-hidden transition-colors duration-300">
          <div className="flex flex-col h-full justify-between max-lg:items-end px-6 py-10">
            <div className="flex flex-col max-lg:mt-16 max-lg:gap-6">
              <a href="#about-us" className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#7e22ce] hover:text-[#7e22ce] transition-colors">{t('About Us')}</a>
              <a href="#pricing" className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#7e22ce] hover:text-[#7e22ce] transition-colors">{t('Pricing')}</a>
              <a href="#features" className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#7e22ce] hover:text-[#7e22ce] transition-colors">{t('Features')}</a>
              <a href="#contact" className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#7e22ce] hover:text-[#7e22ce] transition-colors">{t('Contact')}</a>
              <a href="#faq" className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#7e22ce] hover:text-[#7e22ce] transition-colors">{t('FAQ')}</a>
            </div>
            <div className="mb-8">
              <a
                href="#cta"
                className="dark:bg-[#7e22ce] bg-gray-100 dark:text-white text-gray-900 px-4 py-2 rounded-full font-semibold dark:hover:bg-[#9b59d6] hover:bg-[#9b59d6] dark:hover:text-white hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                <span>{t('Get Started')}</span>
                <i className="bi bi-download ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;