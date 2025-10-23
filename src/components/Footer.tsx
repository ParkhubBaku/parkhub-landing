// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import holding from '../assets/images/brand-logos/pasha_holding_logo.png';
import property from '../assets/images/brand-logos/pasha_property_logo.svg';
import malls from '../assets/images/brand-logos/pasha_malls_logo.svg';
import azparking from '../assets/images/brand-logos/azparking.png';
import parqour from '../assets/images/brand-logos/parqour_logo.png';
import logo from '../assets/logo/logo.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const partners = [
    { src: holding, alt: 'Pasha Holding' },
    { src: property, alt: 'Pasha Property' },
    { src: malls, alt: 'Pasha Malls' },
    { src: azparking, alt: 'Azparking' },
    { src: parqour, alt: 'Parqour' },
  ];

  return (
    <footer className="py-10 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-800 bg-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="ParkHub Logo"
            className="h-12 mb-4"
            loading="lazy"
          />

          {/* Partners */}
          <div className="mb-6 w-full">
            <h4 className="text-lg font-semibold dark:text-white text-gray-900 mb-3 text-center">
              {t('Partners')}
            </h4>
            <ul
              className="flex justify-center gap-6 flex-wrap items-center"
              aria-label={t('Partners')}
            >
              {partners.map((p, i) => (
                <li key={i} className="opacity-90 hover:opacity-100 transition-opacity">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="h-8"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Links + copyright */}
          <div className="flex flex-col items-center gap-2 text-sm dark:text-gray-200 text-gray-700">
            <nav aria-label={t('Legal')}>
              <ul className="flex gap-4">
                <li>
                  <Link
                    to="/terms"
                    className="hover:underline hover:text-[#1653ff] focus:outline-none focus:underline"
                  >
                    {t('Terms and conditions')}
                  </Link>
                </li>
                <li>
                  <span aria-hidden="true">•</span>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:underline hover:text-[#1653ff] focus:outline-none focus:underline"
                  >
                    {t('Privacy Policy')}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="text-center">
              © {year} PARK HUB BAKU. {t('All rights reserved.')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
