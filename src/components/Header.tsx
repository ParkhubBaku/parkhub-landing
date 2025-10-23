// src/components/Header.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = (): void => setIsOpen((prev) => !prev);
  const closeMenu = (): void => setIsOpen(false);

  const languages = [
    { code: 'en', label: 'EN', flag: gbFlag },
    { code: 'az', label: 'AZ', flag: azFlag },
    { code: 'ru', label: 'RU', flag: ruFlag },
  ];

  // Shared classes
  const navLinkCls =
    'inline-flex items-center h-10 px-0 text-base font-medium leading-none dark:text-gray-300 text-gray-700 hover:text-[#1653ff] dark:hover:text-[#1653ff] transition-colors';

  const iconBtnCls =
    'inline-flex items-center justify-center h-10 w-10 rounded-full dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 focus:outline-none';

  const langBtnBase =
    'inline-flex items-center h-10 px-2 rounded-full text-sm font-medium transition-colors leading-none';

  // Scroll helper
  const goToSection = async (id: string) => {
    const scrollTo = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollTo, 60);
    } else {
      scrollTo();
    }
  };

  return (
    <motion.header
      className="fixed w-full top-0 z-20 shadow-lg transition-colors duration-300
                 bg-white/80 dark:bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center relative">
        {/* Left: Branding */}
        <Link to="/" className="flex items-center min-w-0">
          <img src={logo} alt="ParkHub Logo" className="h-10 w-auto sm:h-12" loading="lazy" />
          <span className="ml-3 text-xl sm:text-2xl font-semibold dark:text-white text-gray-900 leading-none whitespace-nowrap hidden sm:inline">
            {t('ParkHub')}
          </span>
        </Link>

        {/* Center: Desktop nav (links only) */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden lg:block absolute left-1/2 -translate-x-1/2"
        >
          <ul className="flex items-center gap-6">
            <li><button onClick={() => goToSection('about-us')} className={navLinkCls}>{t('About Us')}</button></li>
            <li><button onClick={() => goToSection('pricing')}   className={navLinkCls}>{t('Pricing')}</button></li>
            <li><button onClick={() => goToSection('features')}  className={navLinkCls}>{t('Features')}</button></li>
            <li><button onClick={() => goToSection('contact')}   className={navLinkCls}>{t('Contact')}</button></li>
            <li><button onClick={() => goToSection('faq')}       className={navLinkCls}>{t('FAQ')}</button></li>
{/*             <li><Link to="/terms"   className={navLinkCls}>{t('Terms and conditions')}</Link></li>
            <li><Link to="/privacy" className={navLinkCls}>{t('Privacy Policy')}</Link></li>
             */}
          </ul>
        </nav>

        {/* Right: Desktop controls */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <button
            onClick={toggleDarkMode}
            className={iconBtnCls}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            <i className={isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'} />
          </button>

          <div className="flex items-center gap-2">
            {languages.map((lang) => {
              const active = i18n.language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={
                    active
                      ? `${langBtnBase} bg-[#1653ff] text-white`
                      : `${langBtnBase} dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-300`
                  }
                  aria-label={`Switch to ${lang.label}`}
                >
                  <img src={lang.flag} alt={`${lang.label} flag`} className="w-4 h-4" loading="lazy" />
                  <span className="ml-1">{lang.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2 ml-auto">
          <button
            onClick={toggleDarkMode}
            className={iconBtnCls}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            <i className={isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'} />
          </button>

          <div className="flex space-x-1">
            {languages.map((lang) => {
              const active = i18n.language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={
                    active
                      ? 'inline-flex items-center h-8 px-2 rounded-full text-xs font-medium bg-[#1653ff] text-white leading-none'
                      : 'inline-flex items-center h-8 px-2 rounded-full text-xs font-medium dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-300 leading-none'
                  }
                  aria-label={`Switch to ${lang.label}`}
                >
                  <img src={lang.flag} alt={`${lang.label} flag`} className="w-3 h-3" loading="lazy" />
                  <span className="ml-1">{lang.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center h-10 w-10 text-2xl dark:text-white text-gray-900 focus:outline-none z-50"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            title={isOpen ? 'Close menu' : 'Open menu'}
          >
            <i className={isOpen ? 'bi bi-x' : 'bi bi-list'} />
          </button>
        </div>

        {/* Mobile overlay */}
        <motion.div
          className="overlay fixed inset-0 bg-black z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0.5 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Mobile menu */}
        <motion.div
          className="nav-menu fixed top-0 right-0 h-screen lg:hidden dark:bg-black bg-white shadow-md z-20 overflow-hidden transition-colors duration-300"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isOpen ? '70vw' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col h-full justify-between px-6 py-10">
            <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col gap-6 mt-10">
              <button onClick={() => { goToSection('about-us'); closeMenu(); }} className={navLinkCls}>{t('About Us')}</button>
              <button onClick={() => { goToSection('pricing'); closeMenu(); }}   className={navLinkCls}>{t('Pricing')}</button>
              <button onClick={() => { goToSection('features'); closeMenu(); }}  className={navLinkCls}>{t('Features')}</button>
              <button onClick={() => { goToSection('contact'); closeMenu(); }}   className={navLinkCls}>{t('Contact')}</button>
              <button onClick={() => { goToSection('faq'); closeMenu(); }}       className={navLinkCls}>{t('FAQ')}</button>
              <Link to="/terms" onClick={closeMenu}   className={navLinkCls}>{t('Terms and conditions')}</Link>
              <Link to="/privacy" onClick={closeMenu} className={navLinkCls}>{t('Privacy Policy')}</Link>
            </nav>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
