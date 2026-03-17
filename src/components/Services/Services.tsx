"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './Services.module.css';

const Services = () => {
  const t = useTranslations('services');

  // Definimos las llaves para iterar sobre las traducciones
  const serviceKeys = ['theme', 'custom', 'design', 'cms', 'ecommerce', 'automation'] as const;

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('title')} <span>{t('titleHighlight')}</span>
        </motion.h2>

        <div className={styles.grid}>
          {serviceKeys.map((key, index) => (
            <motion.div 
              key={key}
              /* Marcamos 'theme' como el destacado (naranja) por defecto, 
                 o puedes cambiar la lógica según prefieras */
              className={`${styles.card} ${key === 'theme' ? styles.highlighted : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>
                  {key === 'design' ? '🎨' : '</>'}
                </span>
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