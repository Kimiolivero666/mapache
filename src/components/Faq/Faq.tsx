"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FiPlus } from 'react-icons/fi';
import styles from './Faq.module.css';

export default function Faq() {
  const t = useTranslations('Faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Definimos las variantes de animación para el título y los items
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Mapeamos los 6 items que definimos en el JSON
  const faqItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Título corregido con animación manual y claves del JSON */}
        <div className={styles.headerContent}>
        <motion.h2 
          className={styles.mainTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          {t('titlePart1')} <span>{t('titlePart2')}</span>
        </motion.h2>
        </div>
        
        <div className={styles.accordion}>
          {faqItems.map((i) => (
            <motion.div 
              key={i} 
              className={`${styles.item} ${openIndex === i ? styles.active : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
              }}
            >
              <button 
                className={styles.question} 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{t(`items.${i}.q`)}</span>
                <motion.div 
                  className={styles.iconCircle}
                  animate={{ 
                    rotate: openIndex === i ? 45 : 0,
                    backgroundColor: openIndex === i ? "#000" : "#333" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FiPlus />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className={styles.answerWrapper}
                  >
                    <p className={styles.answer}>{t(`items.${i}.a`)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}