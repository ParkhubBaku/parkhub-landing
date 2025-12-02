import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import QRCodeImage from '../assets/images/brand-logos/qr.jpeg';

const QRCodeCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div 
      className="fixed right-8 bottom-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl z-50 flex flex-col items-center space-y-3 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-4">
        <img 
          src={QRCodeImage} 
          alt="QR Code" 
          className="w-20 h-20 object-contain"
        />
        <div className="max-w-[200px]">
          <h3 className="font-semibold text-gray-800 dark:text-white">{t('qr_code.scan_to_download')}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{t('qr_code.download_description')}</p>
        </div>
      </div>
      <a 
        href="https://onelink.to/cj65mh" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
      >
        {t('qr_code.download_button')}
      </a>
    </motion.div>
  );
};

export default QRCodeCard;
