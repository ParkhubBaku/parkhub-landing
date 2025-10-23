// src/components/FAQ.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const faqs = [
    { q: 'FAQ_What is PARK HUB?', a: 'FAQ_PARK HUB is a subscription-based parking app...' },
    { q: 'FAQ_How do I choose a plan?', a: 'FAQ_You can choose a plan directly in the app...' },
    { q: 'FAQ_Can I cancel my subscription?', a: 'FAQ_Yes, you can cancel your subscription at any time...' },
    { q: 'FAQ_What payment methods are accepted?', a: 'FAQ_We accept all major credit cards...' },
    { q: 'FAQ_Is there a free trial?', a: 'FAQ_Yes, we offer a 7-day free trial...' },
  ];

  // Allow multiple items open at once
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section
      id="faq"
      className="py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-gray-50 transition-colors duration-300"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
          {t('Frequently Asked Questions')}
        </h2>

        <ul className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open.has(i);
            const qId = `faq-q-${i}`;
            const pId = `faq-a-${i}`;
            return (
              <li
                key={i}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  id={qId}
                  aria-expanded={isOpen}
                  aria-controls={pId}
                  onClick={() => toggle(i)}
                  className="w-full text-left p-4 flex justify-between items-center dark:text-white text-gray-900 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1653ff] rounded-lg"
                >
                  <span itemProp="name">{t(f.q)}</span>
                  <i
                    className={`bi bi-chevron-down transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={pId}
                      role="region"
                      aria-labelledby={qId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0">
                        <p className="dark:text-gray-200 text-gray-700" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                          <span itemProp="text">{t(f.a)}</span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
