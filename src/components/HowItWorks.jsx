// src/components/HowItWorks.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import phone3 from '../assets/images/home/phone3.png';

const HowItWorks = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="how-it-works"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('How the ParkHub App Works')}
        </h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="flex-shrink-0 w-12 h-12 bg-[#7e22ce] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                  {t('Download the App')}
                </h3>
                <p className="dark:text-gray-200 text-gray-700">
                  {t('Get the ParkHub app from Google Play or the App Store and sign up in minutes.')}
                </p>
              </div>
            </motion.div>
            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="flex-shrink-0 w-12 h-12 bg-[#7e22ce] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                  {t('Choose Your Plan')}
                </h3>
                <p className="dark:text-gray-200 text-gray-700">
                  {t('Select a subscription plan that fits your parking needs—Office, Daily, or Maximum.')}
                </p>
              </div>
            </motion.div>
            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="flex-shrink-0 w-12 h-12 bg-[#7e22ce] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                  {t('Park Anywhere')}
                </h3>
                <p className="dark:text-gray-200 text-gray-700">
                  {t('Use the app to find and access any partner parking location in Baku with ease.')}
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <img
              src={phone3}
              alt="ParkHub App Steps"
              className="w-full max-w-sm rounded-lg shadow-lg border-4 border-[#7e22ce]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;