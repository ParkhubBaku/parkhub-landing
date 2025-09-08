// src/components/Team.jsx
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import sam from '../assets/team/Samir.jpg';
import orm from '../assets/team/Orman.jpeg';
import hag from '../assets/team/Hagigat.jpeg';
import jam from '../assets/team/Jamal.jpg';
import zak from '../assets/team/Zakir.jpg';

const Team = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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

        {/* 1 column on xs, 2 on sm, 5 on md+ */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Samir */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md space-y-4 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={sam}
              alt="Samir Gadirov, Founder"
              className="w-32 h-32 rounded-full object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900">
              {t('Samir Gadirov')}
            </h3>
            <p className="dark:text-gray-200 text-gray-700">
              {t('Founder & Head of Marketing')}
            </p>
            <p className="dark:text-gray-200 text-gray-700">
              {t('3+ successful startups')}
            </p>
          </motion.div>

          {/* Orman */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md space-y-4 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={orm}
              alt="Orman Sultanly, Co-founder"
              className="w-32 h-32 rounded-full object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900">
              {t('Orman Sultanly')}
            </h3>
            <p className="dark:text-gray-200 text-gray-700">
              {t('Co-founder & Head of Sales')}
            </p>
            <p className="dark:text-gray-200 text-gray-700">
              {t('Silicon Valley experience')}
            </p>
          </motion.div>

          {/* Hagigat */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md space-y-4 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={hag}
              alt="Hagigat Aliyeva, Head of Product"
              className="w-32 h-32 rounded-full object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900">
              {t('Hagigat Aliyeva')}
            </h3>
            <p className="dark:text-gray-200 text-gray-700">
              {t('Head of Product')}
            </p>
            <p className="dark:text-gray-200 text-gray-700">
              {t('5+ years Venture experience')}
            </p>
          </motion.div>

          {/* Jamal 
          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md space-y-4 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={jam}
              alt="Jamal Sattarov, Head of Research"
              className="w-32 h-32 rounded-full object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900">
              {t('Jamal Sattarov')}
            </h3>
            <p className="dark:text-gray-200 text-gray-700">
              {t('Head of Research')}
            </p>
            <p className="dark:text-gray-200 text-gray-700">
              {t('Government policy author')}
            </p>
          </motion.div> 
          */}

          {/* Zakir */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md space-y-4 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={zak}
              alt="Zakir Mammadov, Head of Technology"
              className="w-32 h-32 rounded-full object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold dark:text-white text-gray-900">
              {t('Zakir Mammadov')}
            </h3>
            <p className="dark:text-gray-200 text-gray-700">
              {t('Head of Technology')}
            </p>
            <p className="dark:text-gray-200 text-gray-700">
              {t('Tech lead at ABB Bank')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
