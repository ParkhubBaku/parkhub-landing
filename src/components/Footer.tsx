// src/components/Footer.jsx
import React from 'react';
import kickbox from '../assets/images/brand-logos/kickbox_pasha_holding.jpg';
import property from '../assets/images/brand-logos/pasha_property_logo.svg';
import malls from '../assets/images/brand-logos/pasha_malls_logo.svg';
import parqour from '../assets/images/brand-logos/parqour_logo.png';
import holding from '../assets/images/brand-logos/pasha_holding_logo.png';
import azparking from '../assets/images/brand-logos/azparking.png';
import logo from '../assets/logo/logo.png';

const Footer = () => {
  return (
    <footer className="py-8 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-800 bg-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="ParkHub Logo"
            className="h-12 mb-4"
            loading="lazy"
          />

          <div className="mb-4">
            <h4 className="text-lg font-semibold dark:text-white text-gray-900 mb-2 text-center">
              Partners
            </h4>
            <div className="flex justify-center space-x-6 flex-wrap">
              <img src={holding} alt="Pasha Holding" className="h-8" loading="lazy" />
              <img src={property} alt="Pasha Property" className="h-8" loading="lazy" />
              <img src={malls} alt="Pasha Malls" className="h-8" loading="lazy" />
              <img src={azparking} alt="Azparking" className="h-8" loading="lazy" />
              <img src={parqour} alt="Parkour" className="h-8" loading="lazy" />
            </div>
          </div>

          {/* Footer links + copyright */}
          <div className="text-center text-sm dark:text-gray-200 text-gray-700 space-x-3">


            <span>•</span>
            <span>© 2025 PARK HUB BAKU. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
