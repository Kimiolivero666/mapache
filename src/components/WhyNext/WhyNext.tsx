"use client";

import { motion, Variants } from 'framer-motion';
import { LuZap, LuShieldCheck, LuFigma } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import styles from './WhyNext.module.css';
import AnimatedUnderline from '../AnimatedUnderline/AnimatedUnderline';

interface ReasonConfig {
  id: 'perf' | 'security' | 'design';
  icon: React.ReactNode;
}

const reasons: ReasonConfig[] = [
  { id: 'perf', icon: <LuZap /> },
  { id: 'security', icon: <LuShieldCheck /> },
  { id: 'design', icon: <LuFigma /> }
];

// Variantes para el contenedor (maneja el efecto cascada/stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Variantes para cada tarjeta individual
const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

export default function WhyNext() {
  const t = useTranslations('WhyNext');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          {t('titlePart1')}{" "}
          <span className={styles.highlightWrapper}>
            {t('titleHighlight')}
            <AnimatedUnderline />
          </span>{" "}
          {t('titlePart2')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.intro}
        >
          {t('intro')}
        </motion.p>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason) => (
            <motion.div 
              key={reason.id} 
              className={styles.card}
              variants={itemVariants} // <-- Aquí se usa itemVariants, eliminando el error de TS
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className={styles.iconWrapper}>
                {reason.icon}
              </div>
              <h3 className={styles.cardTitle}>
                {t(`reasons.${reason.id}.title`)}
              </h3>
              <p className={styles.cardText}>
                {t(`reasons.${reason.id}.desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}