// src/components/Features.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
// Keep only the assets you actually use
import app from '../assets/images/icons/app_icon.svg';
import card from '../assets/images/icons/money_icon.svg';
import time from '../assets/images/icons/time_icon.svg';

interface FeaturesProps {
  isDarkMode: boolean;
}

const Features: React.FC<FeaturesProps> = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: card,
      alt: 'Save Money Icon',
      titleKey: 'Save Money',
      textKey:
        'One plan for all parking needs, saving you up to 50% compared to multiple subscriptions.',
    },
    {
      icon: time,
      alt: 'Flexible Hours Icon',
      titleKey: 'Flexible Hours',
      textKey:
        // Note: your translation says "from 10 hours"; keep as-is to match t() keys.
        'Choose a plan that fits your schedule, from 10 hours to unlimited daily access.',
    },
    {
      icon: app,
      alt: 'All Locations Icon',
      titleKey: 'All Locations',
      textKey:
        'Park anywhere in Baku—office, mall, or home—with a single subscription.',
    },
  ];

  return (
    <section
      id="features"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-white transition-colors duration-300"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('Why Choose PARK HUB BAKU?')}
        </h2>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((f, idx) => (
            <motion.li
              key={idx}
              className="text-center rounded-xl dark:bg-gray-800 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-[#1653ff]"
              variants={itemVariants}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={`${idx + 1}`} />
              <img
                src={f.icon}
                alt={f.alt}
                className="w-12 h-12 mx-auto mb-4"
                loading="lazy"
              />
              <h3
                className="text-xl font-semibold dark:text-white text-gray-900 mb-2"
                itemProp="name"
              >
                {t(f.titleKey)}
              </h3>
              <p className="dark:text-gray-200 text-gray-700" itemProp="description">
                {t(f.textKey)}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Features;
