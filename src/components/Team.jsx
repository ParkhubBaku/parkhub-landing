// src/components/Team.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import man from '../assets/images/people/man.jpg';
import man2 from '../assets/images/people/man2.jpg';
import women from '../assets/images/people/women.jpg';

const Team = () => {
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
      id="team"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-gray-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('Our Team')}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
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
            <img
              src={man}
              alt="Samir Gadirov"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">{t('Samir Gadirov')}</h3>
            <p className="dark:text-gray-200 text-gray-700">{t('Founder & Head of Marketing')}</p>
            <p className="dark:text-gray-200 text-gray-700">{t('3+ successful startups')}</p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={man2}
              alt="Orman Sultanly"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">{t('Orman Sultanly')}</h3>
            <p className="dark:text-gray-200 text-gray-700">{t('Co-founder & Head of Sales')}</p>
            <p className="dark:text-gray-200 text-gray-700">{t('Silicon Valley experience')}</p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={women}
              alt="Jamal Sattarov"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">{t('Jamal Sattarov')}</h3>
            <p className="dark:text-gray-200 text-gray-700">{t('Head of Research')}</p>
            <p className="dark:text-gray-200 text-gray-700">{t('Government policy author')}</p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={man}
              alt="Zakir Mammadov"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">{t('Zakir Mammadov')}</h3>
            <p className="dark:text-gray-200 text-gray-700">{t('Head of Technology')}</p>
            <p className="dark:text-gray-200 text-gray-700">{t('Tech lead at ABB Digital')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;