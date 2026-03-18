"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturedProjects.module.css';
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
  title: string;
  type: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, type, imageUrl }) => {
  return (
    <motion.div
      className={styles.projectCard}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.projectImage} />
      </div>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectType}>{type}</p>
    </motion.div>
  );
};

const FeaturedProjects: React.FC = () => {
  const t = useTranslations('FeaturedProjects');

  const projects = [
    {
      title: t('figmaTemplatesTitle'),
      type: t('figmaTemplatesType'),
      imageUrl: '/images/hero-work.jpg', // Placeholder, replace with actual images
    },
    {
      title: t('youtuberDeveloperDesignerTitle'),
      type: t('youtuberDeveloperDesignerType'),
      imageUrl: '/images/hero-work.jpg', // Placeholder, replace with actual images
    },
    {
      title: t('marthaWilsonTitle'),
      type: t('marthaWilsonType'),
      imageUrl: '/images/hero-work.jpg', // Placeholder, replace with actual images
    },
    {
      title: t('bringingHopeTitle'),
      type: t('bringingHopeType'),
      imageUrl: '/images/hero-work.jpg', // Placeholder, replace with actual images
    },
    {
      title: t('nftMarketTitle'),
      type: t('nftMarketType'),
      imageUrl: '/images/hero-work.jpg', // Placeholder, replace with actual images
    },
    {
      title: t('agencyWebsiteTitle'),
      type: t('agencyWebsiteType'),
      imageUrl: '/images/hero-work.jpg', // Placeholder, replace with actual images
    },
  ];

  return (
    <section className={styles.featuredProjects}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.mainTitle}>{t('mainTitle')}</h2>
          <p className={styles.subTitle}>{t('subTitle')}</p>
        </div>
        <motion.button
          className={styles.viewAllButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('viewAllButton')}
        </motion.button>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
