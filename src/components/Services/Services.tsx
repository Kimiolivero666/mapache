"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './Services.module.css';

const Services = () => {
  const t = useTranslations('services');

  // 9 Keys para un grid perfecto de 3x3
  const serviceKeys = [
    'theme', 'custom', 'design', 
    'cms', 'ecommerce', 'automation',
    'branding', 'social', 'seo'
  ] as const;

  const fadeInProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Asignación de iconos por key
  const getIcon = (key: string) => {
    switch (key) {
      case 'design': return '🎨';
      case 'branding': return '💎';
      case 'social': return '📱';
      case 'seo': return '🚀';
      case 'ecommerce': return '🛍️';
      case 'automation': return '⚙️';
      case 'cms': return '📦';
      default: return '</>';
    }
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        
        <div className={styles.headerContent}>
          <motion.h2 className={styles.mainTitle} {...fadeInProps}>
            {t('title')} <span>{t('titleHighlight')}</span>
          </motion.h2>

          <motion.div 
            className={styles.subHeader} 
            {...fadeInProps}
            transition={{ ...fadeInProps.transition, delay: 0.2 }}
          >
            <p className={styles.subTitle}>{t('subTitle')}</p>
            <button className={styles.contactBtn}>
              {t('contactBtn')}
            </button>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {serviceKeys.map((key, index) => (
            <motion.div 
              key={key}
              className={`${styles.card} ${key === 'theme' ? styles.highlighted : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{getIcon(key)}</span>
              </div>
              <h3 className={styles.cardTitle}>{t(`items.${key}.title`)}</h3>
              <p className={styles.cardDescription}>{t(`items.${key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;