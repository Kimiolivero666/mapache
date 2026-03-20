"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './Testimonials.module.css';
import Carousel from '../Carousel/Carousel';

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  // t.raw nos permite obtener el array completo de los JSON
  const testimonials = t.raw('items'); 

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <motion.h2 className={styles.mainTitle}>
            <span className={styles.orangeText}>{t('titleOrange')}</span> {t('titleWhite')}
          </motion.h2>
        </div>
        
        <Carousel 
          items={testimonials}
          renderItem={(item: any) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.quote}>"{item.quote}"</p>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>{item.avatar}</div>
                <div className={styles.userText}>
                  <h3 className={styles.name}>{item.name}</h3>
                  <p className={styles.userTitle}>{item.title}</p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}