"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('Footer');

  const fadeInProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo y descripción */}
          <div className={styles.brand}>
            <motion.div {...fadeInProps}>
              <div className={styles.logoContainer}>
                <Image 
                  src="/images/logo.png" 
                  alt="Mapache Logo" 
                  width={40}
                  height={40}
                  className={styles.logo}
                  style={{ objectFit: 'contain' }}
                />
                <span className={styles.brandName}>Mapache</span>
              </div>
              <p className={styles.description}>
                {t('description')}
              </p>
            </motion.div>
          </div>

          {/* Enlaces rápidos */}
          <div className={styles.links}>
            <motion.h3 {...fadeInProps} transition={{ ...fadeInProps.transition, delay: 0.1 }}>
              {t('quickLinks')}
            </motion.h3>
            <motion.ul {...fadeInProps} transition={{ ...fadeInProps.transition, delay: 0.2 }}>
              <li><Link href="#services">{t('services')}</Link></li>
              <li><Link href="#projects">{t('projects')}</Link></li>
              <li><Link href="#about">{t('about')}</Link></li>
              <li><Link href="#contact">{t('contact')}</Link></li>
            </motion.ul>
          </div>

          {/* Servicios */}
          <div className={styles.services}>
            <motion.h3 {...fadeInProps} transition={{ ...fadeInProps.transition, delay: 0.2 }}>
              {t('services')}
            </motion.h3>
            <motion.ul {...fadeInProps} transition={{ ...fadeInProps.transition, delay: 0.3 }}>
              <li>{t('webDevelopment')}</li>
              <li>{t('uiDesign')}</li>
              <li>{t('cmsIntegration')}</li>
              <li>{t('consulting')}</li>
            </motion.ul>
          </div>

          {/* Contacto */}
          <div className={styles.contact}>
            <motion.h3 {...fadeInProps} transition={{ ...fadeInProps.transition, delay: 0.3 }}>
              {t('contact')}
            </motion.h3>
            <motion.div className={styles.contactInfo} {...fadeInProps} transition={{ ...fadeInProps.transition, delay: 0.4 }}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>hola@mapache.dev</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+34 600 000 000</span>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>Barcelona, España</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Redes sociales y copyright */}
        <div className={styles.bottom}>
          <motion.div 
            className={styles.socialLinks}
            {...fadeInProps}
            transition={{ ...fadeInProps.transition, delay: 0.5 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram />
            </a>
          </motion.div>

          <motion.div 
            className={styles.copyright}
            {...fadeInProps}
            transition={{ ...fadeInProps.transition, delay: 0.6 }}
          >
            <p>&copy; 2024 Mapache. {t('rights')}</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
