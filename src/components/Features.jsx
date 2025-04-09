// src/components/Features.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import creditCard from '../assets/images/icons/credit-card.png';
import lighting from '../assets/images/icons/lighting.png';
import unlock from '../assets/images/icons/unlock.png';

const Features = ({ isDarkMode }) => {
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
      id="features"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('Why Choose PARK HUB BAKU?')}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={creditCard} alt="Save Money Icon" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
              {t('Save Money')}
            </h3>
            <p className="dark:text-gray-200 text-gray-700">
              {t('One plan for all parking needs, saving you up to 50% compared to multiple subscriptions.')}
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={lighting} alt="Flexible Hours Icon" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
              {t('Flexible Hours')}
            </h3>
            <p className="dark:text-gray-200 text-gray-700">
              {t('Choose a plan that fits your schedule, from 10 hours to unlimited daily access.')}
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={unlock} alt="All Locations Icon" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
              {t('All Locations')}
            </h3>
            <p className="dark:text-gray-200 text-gray-700">
              {t('Park anywhere in Baku—office, mall, or home—with a single subscription.')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;