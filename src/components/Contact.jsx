// src/components/Contact.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import phone3 from '../assets/images/home/phone3.png';

const Contact = () => {
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
      id="contact"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('Contact Us')}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">
              {t('Get in Touch')}
            </h3>
            <motion.img
              src={phone3}
              alt="Contact via App"
              className="w-32 h-auto mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p className="dark:text-gray-200 text-gray-700 mb-4 text-center">
              {t('Have questions or need support? Reach out to us!')}
            </p>
            <p className="dark:text-gray-200 text-gray-700 flex items-center">
              <i className="bi bi-envelope text-2xl dark:text-[#7e22ce] text-gray-700 mr-2"></i>
              {t('Email')}: info@parkhubbaku.com
            </p>
            <p className="dark:text-gray-200 text-gray-700 flex items-center">
              <i className="bi bi-telephone text-2xl dark:text-[#7e22ce] text-gray-700 mr-2"></i>
              {t('Phone')}: +994 12 345 67 89
            </p>
            <p className="dark:text-gray-200 text-gray-700 flex items-center">
              <i className="bi bi-geo-alt text-2xl dark:text-[#7e22ce] text-gray-700 mr-2"></i>
              {t('Address')}: 123 Park Street, Baku, Azerbaijan
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">
              {t('Send a Message')}
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block dark:text-gray-200 text-gray-700">
                  {t('Name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  placeholder={t('Your Name')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block dark:text-gray-200 text-gray-700">
                  {t('Email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  placeholder={t('Your Email')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block dark:text-gray-200 text-gray-700">
                  {t('Message')}
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  rows="4"
                  placeholder={t('Your Message')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#7e22ce] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#9b59d6] transition-colors"
              >
                {t('Send Message')}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;