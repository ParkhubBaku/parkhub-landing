// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/logo/logo.png';
import adobe from '../assets/images/brand-logos/adobe.svg';
import airbnb from '../assets/images/brand-logos/airbnb.svg';
import google from '../assets/images/brand-logos/google.svg';
import microsoft from '../assets/images/brand-logos/microsoft.svg';
import reddit from '../assets/images/brand-logos/reddit.svg';
import stripe from '../assets/images/brand-logos/stripe.svg';

const Footer = () => {
  return (
    <footer
      className="py-8 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-800 bg-gray-200 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <img src={logo} alt="ParkHub Logo" className="h-12 mb-4" />
          <div className="mb-4">
            <h4 className="text-lg font-semibold dark:text-white text-gray-900 mb-2 text-center">
              Download the App
            </h4>
            <div className="flex justify-center space-x-4">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold dark:text-white text-gray-900 mb-2 text-center">
              Trusted By
            </h4>
            <div className="flex justify-center space-x-6">
              <img src={adobe} alt="Adobe" className="h-8" />
              <img src={airbnb} alt="Airbnb" className="h-8" />
              <img src={google} alt="Google" className="h-8" />
              <img src={microsoft} alt="Microsoft" className="h-8" />
              <img src={reddit} alt="Reddit" className="h-8" />
              <img src={stripe} alt="Stripe" className="h-8" />
            </div>
          </div>
          <p className="dark:text-gray-200 text-gray-700">
            © 2025 PARK HUB BAKU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;