// src/components/TermsOfUse.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfUse: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="terms"
      className="py-16 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-8">
          {t('Terms of Use')}
        </h2>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-8">
          {t('Last updated')}: {new Date().toLocaleDateString(i18n.language)}
        </p>

        <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 leading-relaxed text-center">
          {t('terms.summary_intro_1')}
        </p>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 leading-relaxed text-center">
          {t('terms.summary_intro_2')}
        </p>

        <details className="group bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
          <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900 dark:text-white flex items-center justify-between">
            {t('Read full Terms and Conditions')}
            <span className="transition-transform group-open:rotate-45 text-2xl leading-none">
              +
            </span>
          </summary>

          <div className="mt-6 text-gray-700 dark:text-gray-200 space-y-4 text-sm leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
            <h3 className="font-semibold mt-6">{t('terms.definitions_h')}</h3>
            <p>{t('terms.definitions_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.info_h')}</h3>
            <p>{t('terms.info_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.services_h')}</h3>
            <p>{t('terms.services_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.registration_h')}</h3>
            <p>{t('terms.registration_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.responsibilities_h')}</h3>
            <p>{t('terms.responsibilities_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.subscriptions_h')}</h3>
            <p>{t('terms.subscriptions_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.refunds_h')}</h3>
            <p>{t('terms.refunds_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.ip_h')}</h3>
            <p>{t('terms.ip_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.providers_h')}</h3>
            <p>{t('terms.providers_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.liability_h')}</h3>
            <p>{t('terms.liability_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.force_h')}</h3>
            <p>{t('terms.force_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.privacy_h')}</h3>
            <p>{t('terms.privacy_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.changes_h')}</h3>
            <p>{t('terms.changes_p')}</p>

            <h3 className="font-semibold mt-6">{t('terms.governing_h')}</h3>
            <p>{t('terms.governing_p')}</p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default TermsOfUse;
