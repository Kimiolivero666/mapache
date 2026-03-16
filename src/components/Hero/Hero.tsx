"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './Hero.module.css';
import AnimatedUnderline from '../AnimatedUnderline/AnimatedUnderline';

const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        {/* Columna Izquierda: Contenido */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >


          <h1 className={styles.title}>
            {t('titleLine1')} {" "}
            <span className={styles.highlightWrapper}>
              {t('titleLine2')}
              <AnimatedUnderline />
            </span>
          </h1>


        </motion.div>

        {/* Columna Derecha: Imagen con recorte curvo */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src="/images/hero-work.png"
            alt="Development work"
            fill
            priority
            className={styles.mainImage}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;