// src/components/Plans.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import parking2 from '../assets/images/parkhub/parking2.jpeg';

const Plans = () => {
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
      id="pricing" // Changed from id="plans" to id="pricing"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-gray-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('Our Subscription Plans')}
        </h2>
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img src={parking2} alt="Parking Plan" className="w-48 h-auto rounded-lg shadow-md" />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">{t('Office Employees')}</h3>
            <p className="text-2xl font-bold dark:text-[#7e22ce] text-gray-900 mb-4">{t('120 AZN/month')}</p>
            <p className="dark:text-gray-200 text-gray-700 mb-6">{t('8:30 AM - 6:30 PM across all locations.')}</p>
            <a
              href="#contact"
              className="bg-[#7e22ce] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#9b59d6] transition-colors"
            >
              {t('Choose Plan')}
            </a>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">{t('Daily Parking Users')}</h3>
            <p className="text-2xl font-bold dark:text-[#7e22ce] text-gray-900 mb-4">{t('180 AZN/month')}</p>
            <p className="dark:text-gray-200 text-gray-700 mb-6">{t('10 hours/day, save up to 25%.')}</p>
            <a
              href="#contact"
              className="bg-[#7e22ce] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#9b59d6] transition-colors"
            >
              {t('Choose Plan')}
            </a>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">{t('Maximum Plan')}</h3>
            <p className="text-2xl font-bold dark:text-[#7e22ce] text-gray-900 mb-4">{t('240 AZN/month')}</p>
            <p className="dark:text-gray-200 text-gray-700 mb-6">{t('24 hours access with insurance and availability info.')}</p>
            <a
              href="#contact"
              className="bg-[#7e22ce] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#9b59d6] transition-colors"
            >
              {t('Choose Plan')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;