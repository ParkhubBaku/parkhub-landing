// src/components/Testimonials.jsx
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import pg from '../assets/images/people/pg_logo.png';
import genc from '../assets/images/people/genclik_logo.png';
import garage from '../assets/images/people/garage_logo.png';
import life from '../assets/images/people/pasha_life_logo.svg';

const Testimonials = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="testimonials"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-gray-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('What Our Market Say')}
        </h2>

        {/* four‑column grid on md+ */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 1 */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="dark:text-gray-200 text-gray-600 mb-6">
            <q>{t(
                'We pay 80 AZN per employee for parking, likely rising to 180 AZN.'
              )}</q>
            </p>
            <div className="flex justify-center">
              <img
                src={pg}
                alt="Procter and Gamble"
                className="object-cover h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 2 */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="dark:text-gray-200 text-gray-600 mb-6">
            <q>{t(
                'The most parking slots are free till 4PM, but operational costs are the same.'
              )}</q>
            </p>
            <div className="flex justify-center">
              <img
                src={genc}
                alt="Genclik Mall"
                className="object-cover h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 3 */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md 
                      flex flex-col items-center justify-center space-y-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="dark:text-gray-200 text-gray-600 text-center">
              <q>{t(
                "Payment delays are an issue—customers get stuck waiting for bank confirmation."
              )}</q>
            </p>
            <img
              src={garage}
              alt="Garage"
              className="object-contain 
                        h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32"
              loading="lazy"
            />
          </motion.div>

          {/* 4 */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md 
             flex flex-col items-center justify-center space-y-4"
            >
            <p className="dark:text-text-200 text-gray-600 text-center">
            <q> {t(
                "Only 12 reserved employee parking spots remain; unsure what to do once they're gone."
              )}</q>
            </p>
            <img
              src={life}
              alt="Pasha Life"
              className="object-contain 
                        h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
