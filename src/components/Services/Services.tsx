"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './Services.module.css';

// Importación de iconos (Lucide)
import { 
  LuLayoutTemplate, 
  LuCode, 
  LuPalette, 
  LuDatabase, 
  LuShoppingBag, 
  LuZap, 
  LuGem, 
  LuInstagram, 
  LuSearch 
} from "react-icons/lu";

const Services = () => {
  const t = useTranslations('services');

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

  const getIcon = (key: string) => {
    const iconSize = 28;
    switch (key) {
      case 'theme': return <LuLayoutTemplate size={iconSize} />;
      case 'custom': return <LuCode size={iconSize} />;
      case 'design': return <LuPalette size={iconSize} />;
      case 'cms': return <LuDatabase size={iconSize} />;
      case 'ecommerce': return <LuShoppingBag size={iconSize} />;
      case 'automation': return <LuZap size={iconSize} />;
      case 'branding': return <LuGem size={iconSize} />;
      case 'social': return <LuInstagram size={iconSize} />;
      case 'seo': return <LuSearch size={iconSize} />;
      default: return <LuCode size={iconSize} />;
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
          {serviceKeys.map((key, index) => {
            // Lógica de alternancia: Índices pares resaltados (Naranja)
            const isHighlighted = index % 2 === 0;

            return (
              <motion.div 
                key={key}
                className={`${styles.card} ${isHighlighted ? styles.highlighted : ''}`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;