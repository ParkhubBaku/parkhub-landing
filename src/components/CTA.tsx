// src/components/CTA.jsx
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import phone from '../assets/images/home/phone.png';

const CTA = () => {
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
    <section className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-gray-100 transition-colors duration-300">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-6"
          variants={itemVariants}
        >
          {t('Join the Parking Revolution')}
        </motion.h2>
        <motion.img
          src={phone}
          alt="Download ParkHub App"
          className="w-48 h-auto mx-auto mb-6"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
        <motion.p
          className="text-lg sm:text-xl dark:text-gray-200 text-gray-700 mb-8"
          variants={itemVariants}
        >
          {/*Download the PARK HUB BAKU app to transform your parking experience in
          Baku.
          */}
          PARK HUB Baku
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          variants={itemVariants}
        >
          <a
            href="#contact"
            className="bg-[#1653ff] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#9b59d6] transition-colors"
          >
            {t('Contact Us')}
          </a>
          <a
            href="#contact"
            className="border border-[#1653ff] dark:text-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#1653ff] hover:text-white transition-colors"
          >
            {t('Invest in Us')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
