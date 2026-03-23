"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedUnderline from '../AnimatedUnderline/AnimatedUnderline';
import styles from './ContactUs.module.css';

export default function ContactUs() {
  const t = useTranslations('ContactUs');

  // Transición base con as const para TypeScript
  const baseTransition = {
    duration: 0.8,
    ease: "easeOut" as const,
  };

  const fadeInProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: baseTransition
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Columna Izquierda: Texto y CTA */}
          <div className={styles.textContent}>
            <motion.h2 
              className={styles.title}
              {...fadeInProps}
            >
              {t('readyTo')}{' '}
              {/* Aplicamos la línea animada a la palabra "trabajar" */}
              <span className={styles.highlightWrapper}>
                {t('work')}
                <div className={styles.underlineContainer}>
                  <AnimatedUnderline />
                </div>
              </span>{' '}
              <br />
              {t('withUs')}
            </motion.h2>
            
            {/* Contenedor principal para el botón y el logo */}
            <motion.div 
              className={styles.buttonActionContainer}
              {...fadeInProps}
              transition={{ ...baseTransition, delay: 0.2 }}
            >
              {/* Botón CTA: Ahora solo contiene el texto */}
              <motion.button 
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('getStarted')}
              </motion.button>

              {/* Contenedor del Logo: Ahora va por ABAJO del botón */}
              <div className={styles.logoWrapper}>
                <Image 
                  src="/images/logo.png" // Asegúrate que sea el logo blanco sin fondo
                  alt="Mapache" 
                  width={50} 
                  height={35}
                  priority
                  className={styles.mapacheLogo}
                />
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha: Imagen (Sigue igual) */}
          <div className={styles.imageContent}>
            <motion.div
              className={styles.imageWrapper}
              {...fadeInProps}
              transition={{ ...baseTransition, delay: 0.4 }}
            >
              <Image
                src="/images/Img-contact-us.webp"
                alt="Workspace Setup"
                width={700}
                height={450}
                className={styles.contactImage}
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}