"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './MethodCard.module.css'; // Importamos el module del padre para compartir clases

export interface MethodCardProps {
  translationKey: `step${1 | 2 | 3 | 4}`;
  imagePath: `/images/metodo-${1 | 2 | 3 | 4}.png`;
}

const MethodCard: React.FC<MethodCardProps> = ({ translationKey, imagePath }) => {
  const t = useTranslations('method');

  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imagePath}
          alt={t(`${translationKey}.title`)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className={styles.projectImage}
          priority={translationKey === 'step1'}
          style={{ objectFit: 'cover' }}
        />
        
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>
          {t(`${translationKey}.title`)}
        </h3>
        <p className={styles.cardType}>
          {t(`${translationKey}.desc`)}
        </p>
      </div>
    </div>
  );
};

export default MethodCard;