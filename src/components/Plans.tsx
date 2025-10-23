// src/components/Plans.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import parking2 from '../assets/images/parkhub/parking2.jpeg';

const Plans: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="pricing"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-gray-100 transition-colors duration-300"
      aria-labelledby="pricing-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="pricing-title"
          className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-4"
        >
          {t('Our Subscription Plans')}
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-10">
          {t('Choose the plan that fits your parking routine in Baku.')}
        </p>

        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src={parking2}
            alt={t('Parking lot illustration')}
            className="w-48 h-auto rounded-lg shadow-md"
            loading="lazy"
          />
        </motion.div>

        <motion.ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Plan 1 */}
          <motion.li variants={itemVariants}>
            <article
              className="h-full bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center flex flex-col"
              aria-labelledby="plan-office"
            >
              <h3 id="plan-office" className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                {t('Office Employees')}
              </h3>
              <div className="text-2xl font-bold text-gray-900 dark:text-[#aebcff] mb-3">
                149 AZN<span className="text-base font-medium text-gray-600 dark:text-gray-300">/</span>
                <span className="sr-only">{t('per month')}</span>
                <span aria-hidden className="text-base font-medium text-gray-600 dark:text-gray-300">
                  {t('month')}
                </span>
              </div>
              <p className="dark:text-gray-200 text-gray-700 mb-6">
                {t('8:30 AM - 6:30 PM across all locations.')}
              </p>
              <a
                href="#contact"
                className="mt-auto inline-block bg-[#1653ff] text-white px-6 py-2 rounded-full font-semibold hover:brightness-110 transition"
                aria-label={t('Choose plan: Office Employees')}
              >
                {t('Choose Plan')}
              </a>
            </article>
          </motion.li>

          {/* Plan 2 */}
          <motion.li variants={itemVariants}>
            <article
              className="h-full bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center flex flex-col"
              aria-labelledby="plan-daily"
            >
              <h3 id="plan-daily" className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                {t('Daily Parking Users')}
              </h3>
              <div className="text-2xl font-bold text-gray-900 dark:text-[#aebcff] mb-3">
                199 AZN<span className="text-base font-medium text-gray-600 dark:text-gray-300">/</span>
                <span className="sr-only">{t('per month')}</span>
                <span aria-hidden className="text-base font-medium text-gray-600 dark:text-gray-300">
                  {t('month')}
                </span>
              </div>
              <p className="dark:text-gray-200 text-gray-700 mb-6">
                {t('16 hours/day, save up to 25%.')}
              </p>
              <a
                href="#contact"
                className="mt-auto inline-block bg-[#1653ff] text-white px-6 py-2 rounded-full font-semibold hover:brightness-110 transition"
                aria-label={t('Choose plan: Daily Parking Users')}
              >
                {t('Choose Plan')}
              </a>
            </article>
          </motion.li>

          {/* Plan 3 */}
          <motion.li variants={itemVariants}>
            <article
              className="h-full bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center flex flex-col"
              aria-labelledby="plan-maximum"
            >
              <h3 id="plan-maximum" className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                {t('Maximum Plan')}
              </h3>
              <div className="text-2xl font-bold text-gray-900 dark:text-[#aebcff] mb-3">
                259 AZN<span className="text-base font-medium text-gray-600 dark:text-gray-300">/</span>
                <span className="sr-only">{t('per month')}</span>
                <span aria-hidden className="text-base font-medium text-gray-600 dark:text-gray-300">
                  {t('month')}
                </span>
              </div>
              <p className="dark:text-gray-200 text-gray-700 mb-6">
                {t('24 hours access with insurance and availability info.')}
              </p>
              <a
                href="#contact"
                className="mt-auto inline-block bg-[#1653ff] text-white px-6 py-2 rounded-full font-semibold hover:brightness-110 transition"
                aria-label={t('Choose plan: Maximum Plan')}
              >
                {t('Choose Plan')}
              </a>
            </article>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Plans;
