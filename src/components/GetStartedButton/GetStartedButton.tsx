"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './GetStartedButton.module.css';

const GetStartedButton = () => {
  const t = useTranslations('navbar');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <a href="mailto:hello@mapachestudio.com" className={styles.getStartedBtn}>
        {t('contact') || 'contacto'}
      </a>
    </motion.div>
  );
};

export default GetStartedButton;
