"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './SectionTitle.module.css';
import AnimatedUnderline from '../AnimatedUnderline/AnimatedUnderline';

interface SectionTitleProps {
  titlePart1?: string;
  titleHighlight?: string;
  titlePart2?: string;
  subtitle?: string;
  showContactButton?: boolean;
  contactButtonText?: string;
  onContactClick?: () => void;
  highlightColor?: 'orange' | 'white' | 'blue';
  titleTranslationKey?: string;
  subtitleTranslationKey?: string;
  contactButtonTranslationKey?: string;
  translationNamespace?: string;
}

export default function SectionTitle({
  titlePart1,
  titleHighlight,
  titlePart2,
  subtitle,
  showContactButton = false,
  contactButtonText,
  onContactClick,
  highlightColor = 'orange',
  titleTranslationKey,
  subtitleTranslationKey,
  contactButtonTranslationKey,
  translationNamespace
}: SectionTitleProps) {
  const t = useTranslations(translationNamespace || '');

  const getTitleText = () => {
    if (titleTranslationKey) {
      return t(titleTranslationKey);
    }
    return '';
  };

  const getSubtitleText = () => {
    if (subtitleTranslationKey) {
      return t(subtitleTranslationKey);
    }
    return subtitle || '';
  };

  const getContactButtonText = () => {
    if (contactButtonTranslationKey) {
      return t(contactButtonTranslationKey);
    }
    return contactButtonText || '';
  };

  const fadeInProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const getHighlightClass = () => {
    switch (highlightColor) {
      case 'orange':
        return styles.orangeHighlight;
      case 'white':
        return styles.whiteHighlight;
      case 'blue':
        return styles.blueHighlight;
      default:
        return styles.orangeHighlight;
    }
  };

  const renderTitle = () => {
    if (titlePart1 && titleHighlight && titlePart2) {
      // Custom title parts (like Testimonials)
      return (
        <>
          {titlePart1}{" "}
          <span className={`${styles.highlightWrapper} ${getHighlightClass()}`}>
            {titleHighlight}
            <AnimatedUnderline />
          </span>{" "}
          {titlePart2}
        </>
      );
    } else if (titleTranslationKey) {
      // Translation-based title (like Services)
      const titleText = getTitleText();
      const parts = titleText.split('<span>');
      if (parts.length === 2) {
        const [before, after] = parts;
        return (
          <>
            {before}
            <span className={`${styles.highlightWrapper} ${getHighlightClass()}`}>
              {t('titleHighlight')}
              <AnimatedUnderline />
            </span>
            {after}
          </>
        );
      }
    }
    return titleTranslationKey ? getTitleText() : '';
  };

  return (
    <div className={styles.headerContent}>
      <motion.h2 className={styles.mainTitle} {...fadeInProps}>
        {renderTitle()}
      </motion.h2>

      {(subtitle || subtitleTranslationKey) && (
        <motion.div 
          className={styles.subHeader} 
          {...fadeInProps}
          transition={{ ...fadeInProps.transition, delay: 0.2 }}
        >
          <p className={styles.subTitle}>{getSubtitleText()}</p>
          {showContactButton && (
            <button className={styles.contactBtn} onClick={onContactClick}>
              {getContactButtonText()}
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}
