"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './FeaturedProjects.module.css';
import { LuArrowUpRight } from "react-icons/lu";

const FeaturedProjects = () => {
  const t = useTranslations('projects');

  const projectKeys = [
    'gestoria',
    'aseguradora',
    'restaurante',
    'agencia',
    'community',
    'nft'
  ] as const;

  const fadeInProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className={styles.projectsSection}>
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
          </motion.div>
        </div>

        <div className={styles.grid}>
          {projectKeys.map((key, index) => {
            // CORRECCIÓN CLAVE: Usamos la ruta /images/ que tienes en tu proyecto
            // Y ajustamos los nombres para que coincidan con tus archivos
            let imagePath = "";

            // Lógica de rutas optimizada
            if (key === 'gestoria') {
              imagePath = "/images/gestoria-gcr.webp";
            } else if (key === 'aseguradora') {
              imagePath = "/images/Nani-Seguros.webp";
            } else if (key === 'restaurante') {
              imagePath = "/images/chimichurri.webp";
            } else if (key === 'agencia') {
              imagePath = "/images/little.webp";
              
            } else {
              imagePath = `/images/${key}.png`;
            }

            return (
              <motion.div
                key={key}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={imagePath}
                    alt={t(`items.${key}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index < 2}
                    className={styles.projectImage}
                    style={{ objectFit: 'contain', padding: '20px' }}
                  />
                  <div className={styles.hoverOverlay}>
                    <LuArrowUpRight size={40} className={styles.cardArrow} />
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{t(`items.${key}.title`)}</h3>
                  <p className={styles.cardType}>{t(`items.${key}.type`)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;