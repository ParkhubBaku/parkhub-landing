// src/components/FAQ.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import dots from '../assets/images/background/dots.svg';

const FAQ = () => {
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
      id="faq"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-white transition-colors duration-300"
      style={{ backgroundImage: `url(${dots})`, backgroundRepeat: 'repeat', backgroundSize: 'auto' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('Frequently Asked Questions')}
        </h2>
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex items-start" variants={itemVariants}>
            <i className="bi bi-question-circle text-2xl dark:text-[#7e22ce] text-gray-700 mr-4"></i>
            <div>
              <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                {t('What is PARK HUB BAKU?')}
              </h3>
              <p className="dark:text-gray-200 text-gray-700">
                {t('PARK HUB BAKU is a unified parking subscription service that allows you to access multiple parking locations in Baku with a single plan.')}
              </p>
            </div>
          </motion.div>
          <motion.div className="flex items-start" variants={itemVariants}>
            <i className="bi bi-question-circle text-2xl dark:text-[#7e22ce] text-gray-700 mr-4"></i>
            <div>
              <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                {t('How do I choose a subscription plan?')}
              </h3>
              <p className="dark:text-gray-200 text-gray-700">
                {t('We offer three plans: Office Employees (120 AZN/month), Daily Parking Users (180 AZN/month), and Maximum Plan (240 AZN/month). Choose the one that fits your parking needs.')}
              </p>
            </div>
          </motion.div>
          <motion.div className="flex items-start" variants={itemVariants}>
            <i className="bi bi-question-circle text-2xl dark:text-[#7e22ce] text-gray-700 mr-4"></i>
            <div>
              <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                {t('Can I use PARK HUB BAKU at any parking lot in Baku?')}
              </h3>
              <p className="dark:text-gray-200 text-gray-700">
                {t('Yes, our subscription plans give you access to all partner parking locations across Baku, including offices, malls, and residential areas.')}
              </p>
            </div>
          </motion.div>
          <motion.div className="flex items-start" variants={itemVariants}>
            <i className="bi bi-question-circle text-2xl dark:text-[#7e22ce] text-gray-700 mr-4"></i>
            <div>
              <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                {t('How do I pay for my subscription?')}
              </h3>
              <p className="dark:text-gray-200 text-gray-700">
                {t('Payments will be available through our app using PASHA Bank Pay by Link for the initial launch, with more options coming soon.')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;