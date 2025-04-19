import React, { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import phone3 from '../assets/images/home/phone3.png';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' }));
    setSuccessMessage('');
    setSubmitError('');
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = t('Name is required');
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = t('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('Email is invalid');
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = t('Message is required');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    setSubmitError('');
  
    if (!validateForm()) {
      return;
    }
  
    try {
      const response = await fetch('https://parkhub-456312.appspot.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
  
      const result = await response.json();
      setSuccessMessage(t('Message sent successfully!'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(t('Failed to send message. Please try again later.'));
      console.error('Error submitting form:', error);
    }
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
            <img src={phone3} alt="ParkHub App on Phone Screen" className="w-full max-w-sm rounded-lg shadow-lg" loading="lazy" />
            <p className="dark:text-gray-200 text-gray-700 mb-4 text-center">
              {t('Have questions or need support? Reach out to us!')}
            </p>
            <p className="dark:text-gray-200 text-gray-700 flex items-center">
              <i className="bi bi-envelope text-2xl dark:text-[#1653ff] text-gray-700 mr-2" aria-hidden="true"></i>
              <span className="sr-only">{t('Email')}:</span> parkhubbaku@gmail.com
            </p>
            <p className="dark:text-gray-200 text-gray-700 flex items-center">
              <i className="bi bi-telephone text-2xl dark:text-[#1653ff] text-gray-700 mr-2" aria-hidden="true"></i>
              <span className="sr-only">{t('Phone')}:</span> +994 50 490 32 50
            </p>
            <p className="dark:text-gray-200 text-gray-700 flex items-center">
              <i className="bi bi-geo-alt text-2xl dark:text-[#1653ff] text-gray-700 mr-2" aria-hidden="true"></i>
              <span className="sr-only">{t('Address')}:</span> Port Baku 153, Neftçilər prospekti, AZ 1010, Bakı, Azərbaycan
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">
              {t('Send a Message')}
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              {successMessage && (
                <p className="text-green-500 text-sm" role="alert">
                  {successMessage}
                </p>
              )}
              {submitError && (
                <p className="text-red-500 text-sm" role="alert">
                  {submitError}
                </p>
              )}
              <div>
                <label htmlFor="name" className="block dark:text-gray-200 text-gray-700">
                  {t('Name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-2 border rounded dark:bg-gray-700 dark:text-white ${errors.name ? 'border-red-500' : ''}`}
                  placeholder={t('Your Name')}
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block dark:text-gray-200 text-gray-700">
                  {t('Email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-2 border rounded dark:bg-gray-700 dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                  placeholder={t('Your Email')}
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block dark:text-gray-200 text-gray-700">
                  {t('Message')}
                </label>
                <textarea
                  id="message"
                  className={`w-full p-2 border rounded dark:bg-gray-700 dark:text-white ${errors.message ? 'border-red-500' : ''}`}
                  rows={4}
                  placeholder={t('Your Message')}
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#1653ff] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1653ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9F2305] focus:ring-offset-2"
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