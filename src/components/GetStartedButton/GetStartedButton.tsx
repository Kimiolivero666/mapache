"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './GetStartedButton.module.css';

const GetStartedButton = () => {
  const t = useTranslations('navbar');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Link href="/contacto" className={styles.getStartedBtn}>
        {t('contact') || 'contacto'}
      </Link>
    </motion.div>
  );
};

export default GetStartedButton;
