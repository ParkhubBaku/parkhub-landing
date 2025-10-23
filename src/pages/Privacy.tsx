// src/pages/Privacy.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="pt-28 md:pt-32 pb-16 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-6">
          {t('Privacy Policy')}
        </h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-10">
          {t('Last updated')}: {new Date().toLocaleDateString(i18n.language)}
        </p>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <p>{t('privacy.summary')}</p>

          <h2>{t('privacy.collection_h')}</h2>
          <p>{t('privacy.collection_p')}</p>

          <h2>{t('privacy.use_h')}</h2>
          <p>{t('privacy.use_p')}</p>

          <h2>{t('privacy.sharing_h')}</h2>
          <p>{t('privacy.sharing_p')}</p>

          <h2>{t('privacy.security_h')}</h2>
          <p>{t('privacy.security_p')}</p>

          <h2>{t('privacy.rights_h')}</h2>
          <p>{t('privacy.rights_p')}</p>

          <h2>{t('privacy.contact_h')}</h2>
          <p>{t('privacy.contact_p')}</p>
        </article>
      </div>
    </section>
  );
};

export default Privacy;
