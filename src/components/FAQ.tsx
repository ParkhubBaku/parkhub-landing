import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('What is PARK HUB?'),
      answer: t('PARK HUB is a subscription-based parking app...'),
    },
    {
      question: t('How do I choose a plan?'),
      answer: t('You can choose a plan directly in the app...'),
    },
    {
      question: t('Can I cancel my subscription?'),
      answer: t('Yes, you can cancel your subscription at any time...'),
    },
    {
      question: t('What payment methods are accepted?'),
      answer: t('We accept all major credit cards...'),
    },
    {
      question: t('Is there a free trial?'),
      answer: t('Yes, we offer a 7-day free trial...'),
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-gray-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('Frequently Asked Questions')}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md"
            >
              <summary className="w-full text-left p-4 flex justify-between items-center dark:text-white text-gray-900 font-semibold cursor-pointer focus:outline-none">
                <span>{faq.question}</span>
                <i className="bi bi-chevron-down"></i>
              </summary>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="p-4 dark:text-gray-200 text-gray-700">
                  {faq.answer}
                </p>
              </motion.div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
