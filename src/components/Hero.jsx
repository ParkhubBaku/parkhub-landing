// src/components/Hero.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import parking3 from '../assets/images/parkhub/parking3.jpeg';

const Hero = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${parking3})` }}
      initial={{ scale: 1 }}
      animate={{ scale: 1.05 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative text-center max-w-3xl mx-auto px-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {t('One Subscription, All Parking in Baku')}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-4">
          {t('Access any parking lot with PARK HUB BAKU’s affordable plans. Save time, save money, and park smarter.')}
        </p>
        <p className="text-md sm:text-lg text-gray-300 mb-6">
          The ultimate parking app for Baku drivers.
        </p>
        <motion.a
          href="#plans"
          className="bg-[#7e22ce] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#9b59d6] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('Explore Plans')}
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;