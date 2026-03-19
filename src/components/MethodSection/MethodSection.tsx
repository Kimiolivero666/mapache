"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import MethodCard from '../MethodCard/MethodCard';
import styles from './MethodSection.module.css'; 

const MethodSection: React.FC = () => {
  const t = useTranslations('method');

  const steps = [
    { id: 1, translationKey: 'step1', imagePath: '/images/metodo-1.png' },
    { id: 2, translationKey: 'step2', imagePath: '/images/metodo-2.png' },
    { id: 3, translationKey: 'step3', imagePath: '/images/metodo-3.png' },
    { id: 4, translationKey: 'step4', imagePath: '/images/metodo-4.png' }
  ] as const;

  // Configuración de animación para el header con "as const" para evitar errores de TS
  const headerFadeProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        
        <div className={styles.headerContent}>
          <motion.h2 className={styles.mainTitle} {...headerFadeProps}>
            {t('title')} <span>{t('titleHighlight')}</span>
          </motion.h2>
          
          <motion.div
            className={styles.subHeader}
            {...headerFadeProps}
            transition={{ ...headerFadeProps.transition, delay: 0.2 }}
          >
            <p className={styles.subTitle}>
              {t('subTitle')}
            </p>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.9, 
                delay: index * 0.3, // Aparecen de una en una lentamente
                ease: [0.21, 0.47, 0.32, 0.98] as const // Solución al error de TS
              }}
            >
              <MethodCard 
                translationKey={step.translationKey} 
                imagePath={step.imagePath} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;