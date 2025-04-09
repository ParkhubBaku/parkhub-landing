// src/components/Testimonials.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import man from '../assets/images/people/man.jpg';
import man2 from '../assets/images/people/man2.jpg';
import women from '../assets/images/people/women.jpg';

const Testimonials = () => {
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
      id="testimonials"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-gray-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('What Our Users Say')}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Testimonial 1: Daily Driver */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="dark:text-gray-200 text-gray-600 mb-4">
              {t(
                'ParkHub has made parking in Baku so easy! I no longer waste time searching for a spot, and the subscription saves me money every month.'
              )}
            </p>
            <div className="flex items-center">
              <img src={man} alt="Aydin Mammadov" className="h-12 w-12 rounded-full mr-4 object-cover" />
              <div>
                <span className="font-semibold dark:text-white text-gray-800">{t('Aydin Mammadov')}</span>
                <p className="text-sm dark:text-gray-400 text-gray-500">{t('Daily Driver')}</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2: Business Owner */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="dark:text-gray-200 text-gray-600 mb-4">
              {t(
                'As a business owner, ParkHub has been a game-changer. My employees now have hassle-free parking, and it’s more affordable than our previous solution.'
              )}
            </p>
            <div className="flex items-center">
              <img src={women} alt="Leyla Aliyeva" className="h-12 w-12 rounded-full mr-4 object-cover" />
              <div>
                <span className="font-semibold dark:text-white text-gray-800">{t('Leyla Aliyeva')}</span>
                <p className="text-sm dark:text-gray-400 text-gray-500">{t('Business Owner')}</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 3: Parking Operator */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="dark:text-gray-200 text-gray-600 mb-4">
              {t(
                'Partnering with ParkHub increased our parking lot occupancy by 30%. Their app makes payments seamless, and we’ve reduced operational headaches.'
              )}
            </p>
            <div className="flex items-center">
              <img src={man2} alt="Ramin Hasanov" className="h-12 w-12 rounded-full mr-4 object-cover" />
              <div>
                <span className="font-semibold dark:text-white text-gray-800">{t('Ramin Hasanov')}</span>
                <p className="text-sm dark:text-gray-400 text-gray-500">{t('Parking Operator')}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;