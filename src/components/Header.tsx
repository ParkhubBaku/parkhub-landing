// src/components/Header.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import azFlag from '../assets/images/flags/az.svg';
import gbFlag from '../assets/images/flags/gb.svg';
import ruFlag from '../assets/images/flags/ru.svg';
import logo from '../assets/logo/logo.png';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  changeLanguage: (lng: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, changeLanguage }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsOpen((prev) => !prev);
  const closeMenu = (): void => setIsOpen(false);

  const languages = [
    { code: 'en', label: 'EN', flag: gbFlag },
    { code: 'az', label: 'AZ', flag: azFlag },
    { code: 'ru', label: 'RU', flag: ruFlag },
  ];

  return (
    <motion.header
      className="fixed w-full top-0 z-20 shadow-lg dark:bg-black bg-white transition-colors duration-300"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Branding */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="ParkHub Logo"
            className="h-10 w-auto sm:h-12"
            loading="lazy"
          />
          <span className="ml-3 text-xl sm:text-2xl font-semibold dark:text-white text-gray-900">
            {t('ParkHub')}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden lg:flex space-x-6 items-center"
        >
          <a
            href="#about-us"
            className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#1653ff] hover:text-[#1653ff] transition-colors"
          >
            {t('About Us')}
          </a>
          <a
            href="#pricing"
            className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#1653ff] hover:text-[#1653ff] transition-colors"
          >
            {t('Pricing')}
          </a>
          <a
            href="#features"
            className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#1653ff] hover:text-[#1653ff] transition-colors"
          >
            {t('Features')}
          </a>
          <a
            href="#contact"
            className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#1653ff] hover:text-[#1653ff] transition-colors"
          >
            {t('Contact')}
          </a>
          <a
            href="#faq"
            className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#1653ff] hover:text-[#1653ff] transition-colors"
          >
            {t('FAQ')}
          </a>
          <a
            href="#cta"
            className="bg-[#1653ff] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#9b59d6] transition-colors"
          >
            {t('Get Started')}
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 focus:outline-none"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'}></i>
          </button>
          {/* Language Switcher */}
          <div className="flex space-x-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`p-1 rounded-full flex items-center gap-1 text-sm font-medium transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-[#1653ff] text-white'
                    : 'dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-300'
                }`}
                aria-label={`Switch to ${lang.label} language`}
              >
                <img
                  src={lang.flag}
                  alt={`${lang.label} flag`}
                  className="w-4 h-4"
                  loading="lazy"
                  onError={() => console.error(`Failed to load flag for ${lang.label}`)}
                />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 focus:outline-none"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'}></i>
          </button>
          <div className="flex space-x-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`p-1 rounded-full flex items-center gap-1 text-xs font-medium transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-[#1653ff] text-white'
                    : 'dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-300'
                }`}
                aria-label={`Switch to ${lang.label} language`}
              >
                <img
                  src={lang.flag}
                  alt={`${lang.label} flag`}
                  className="w-3 h-3"
                  loading="lazy"
                  onError={() => console.error(`Failed to load flag for ${lang.label}`)}
                />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="text-3xl dark:text-white text-gray-900 focus:outline-none z-50"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <i className={isOpen ? 'bi bi-x' : 'bi bi-list'}></i>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          className="overlay fixed inset-0 bg-black z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0.5 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Mobile Menu */}
        <motion.div
          className="nav-menu fixed top-0 right-0 h-screen lg:hidden dark:bg-black bg-white shadow-md z-20 overflow-hidden transition-colors duration-300"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isOpen ? '60vw' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col h-full justify-between max-lg:items-end px-6 py-10">
            <nav
              role="navigation"
              aria-label="Mobile navigation"
              className="flex flex-col max-lg:mt-16 max-lg:gap-6"
            >
              <a
                href="#about-us"
                className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#1653ff] hover:text-[#1653ff] transition-colors"
              >
                {t('About Us')}
              </a>
              <a
                href="#pricing"
                className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#1653ff] hover:text-[#1653ff] transition-colors"
              >
                {t('Pricing')}
              </a>
              <a
                href="#features"
                className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#1653ff] hover:text-[#1653ff] transition-colors"
              >
                {t('Features')}
              </a>
              <a
                href="#contact"
                className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#1653ff] hover:text-[#1653ff] transition-colors"
              >
                {t('Contact')}
              </a>
              <a
                href="#faq"
                className="text-base font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#1653ff] hover:text-[#1653ff] transition-colors"
              >
                {t('FAQ')}
              </a>
            </nav>
            <div className="mb-8">
              <a
                href="#cta"
                className="dark:bg-[#1653ff] bg-gray-100 dark:text-white text-gray-900 px-4 py-2 rounded-full font-semibold dark:hover:bg-[#9b59d6] hover:bg-[#9b59d6] dark:hover:text-white hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                <span>{t('Get Started')}</span>
                <i className="bi bi-download ml-2"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
