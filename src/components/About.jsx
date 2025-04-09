// src/components/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import phone from '../assets/images/home/phone.png';

const About = () => {
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
      id="about-us"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center dark:text-white text-gray-900 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t('About PARK HUB BAKU')}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold dark:text-white text-gray-900">
              {t('The Problem')}
            </h3>
            <p className="dark:text-gray-200 text-gray-800 text-lg leading-relaxed">
              {t('Parking in Baku is fragmented and expensive. Businesses pay up to 180 AZN per employee, and drivers juggle multiple subscriptions.')}
            </p>
            <p className="dark:text-gray-200 text-gray-800 text-lg leading-relaxed">
              {t('Parking operators face empty slots and payment delays, making operations inefficient.')}
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start space-y-6"
          >
            <h3 className="text-2xl font-semibold dark:text-white text-gray-900">
              {t('Our Solution')}
            </h3>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={phone}
                alt="ParkHub App"
                className="w-full max-w-sm rounded-lg shadow-lg border-4 border-[#7e22ce]"
              />
              <div className="absolute inset-0 bg-[#7e22ce] opacity-10 rounded-lg"></div>
            </motion.div>
            <p className="dark:text-gray-200 text-gray-800 text-lg leading-relaxed text-center lg:text-left">
              {t('PARK HUB BAKU offers a unified subscription plan, giving access to all parking locations in Baku with one app.')}
            </p>
            <p className="dark:text-gray-200 text-gray-800 text-lg leading-relaxed text-center lg:text-left">
              {t('Employees save money, HR boosts engagement, and parking providers reduce challenges while increasing occupancy.')}
            </p>
            <motion.a
              href="#cta"
              className="bg-[#7e22ce] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#9b59d6] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('Download the App')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;