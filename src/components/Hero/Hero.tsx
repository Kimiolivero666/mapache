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
      {/* El logo sutil ahora se controla principalmente por CSS para responsividad */}
      <motion.div 
        className={styles.logoBg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }} // La opacidad final se modula en el CSS
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/logo.png"
          alt=""
          fill
          priority
          className={styles.bgImage}
        />
      </motion.div>

      <div className={styles.grid}>
        {/* Columna Izquierda: Texto */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }} // Inicia ligeramente abajo
          animate={{ opacity: 1, y: 0 }} // Termina en su posición natural
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            {t('titleLine1')}{" "}
            <span className={styles.highlightWrapper}>
              {t('titleLine2')}
              <AnimatedUnderline />
            </span>
          </h1>
        </motion.div>

        {/* Columna Derecha: Imagen Principal */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src="/images/hero-work.png"
            alt="Development work"
            width={1200} // Proporciona un tamaño base para la calidad de la imagen
            height={800}
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 55vw"
            className={styles.mainImage}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;