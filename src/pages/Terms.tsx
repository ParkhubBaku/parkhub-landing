// src/pages/Terms.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Terms: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="pt-28 md:pt-32 pb-16 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-6">

          {t('')}
          {t('Terms of Use')}
        </h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-10">
          {t('Last updated')}: {new Date().toLocaleDateString(i18n.language)}
        </p>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <p>{t('terms.summary_intro_1')}</p>
          <p>{t('terms.summary_intro_2')}</p>

          <h2>{t('terms.definitions_h')}</h2>
          <p>{t('terms.definitions_p')}</p>

          <h2>{t('terms.info_h')}</h2>
          <p>{t('terms.info_p')}</p>

          <h2>{t('terms.services_h')}</h2>
          <p>{t('terms.services_p')}</p>

          <h2>{t('terms.registration_h')}</h2>
          <p>{t('terms.registration_p')}</p>

          <h2>{t('terms.responsibilities_h')}</h2>
          <p>{t('terms.responsibilities_p')}</p>

          <h2>{t('terms.subscriptions_h')}</h2>
          <p>{t('terms.subscriptions_p')}</p>

          <h2>{t('terms.refunds_h')}</h2>
          <p>{t('terms.refunds_p')}</p>

          <h2>{t('terms.ip_h')}</h2>
          <p>{t('terms.ip_p')}</p>

          <h2>{t('terms.providers_h')}</h2>
          <p>{t('terms.providers_p')}</p>

          <h2>{t('terms.liability_h')}</h2>
          <p>{t('terms.liability_p')}</p>

          <h2>{t('terms.force_h')}</h2>
          <p>{t('terms.force_p')}</p>

          <h2>{t('terms.privacy_h')}</h2>
          <p>{t('terms.privacy_p')}</p>

          <h2>{t('terms.changes_h')}</h2>
          <p>{t('terms.changes_p')}</p>

          <h2>{t('terms.governing_h')}</h2>
          <p>{t('terms.governing_p')}</p>
        </article>
      </div>
    </section>
  );
};

export default Terms;
