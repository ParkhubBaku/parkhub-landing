// src/components/Footer.jsx
import React from 'react';
import kickbox from '../assets/images/brand-logos/kickbox_pasha_holding.jpg';
import property from '../assets/images/brand-logos/pasha_property_logo.svg';
import malls from '../assets/images/brand-logos/pasha_malls_logo.svg';
import parqour from '../assets/images/brand-logos/parqour_logo.png';
import holding from '../assets/images/brand-logos/pasha_holding_logo.png';
import stripe from '../assets/images/brand-logos/stripe.svg';
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

          {/* Download the App 
          <div className="mb-4">
            <h4 className="text-lg font-semibold dark:text-white text-gray-900 mb-2 text-center">
            Download the App *  
            </h4>
            <div className="flex justify-center space-x-4">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-10"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold dark:text-white text-gray-900 mb-2 text-center">
              Partners
            </h4>
            <div className="flex justify-center space-x-6">
              <img
                src={holding}
                alt="Pasha Holding Logo"
                className="h-8"
                loading="lazy"
              />
              <img
                src={property}
                alt="Pasha Property Management Logo"
                className="h-8"
                loading="lazy"
              />
              <img
                src={malls}
                alt="Pasha Malls Logo"
                className="h-8"
                loading="lazy"
              />
              <img
                src={parqour}
                alt="Parkour Logo"
                className="h-8"
                loading="lazy"
              />
              {/*logo example
              <img
                src={reddit}
                alt="Reddit Logo"
                className="h-8"
                loading="lazy"
              />
              <img
                src={stripe}
                alt="Stripe Logo"
                className="h-8"
                loading="lazy"
              />
              */}
            </div>
          </div>
          {/* <div className="flex justify-center space-x-10">
              <img
                src={kickbox}
                alt="Kickbox Pasha Holding Logo"
                className="h-8"
                loading="lazy"
              />
            </div> */}
          <p className="dark:text-gray-200 text-gray-700">
            © 2025 PARK HUB BAKU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
