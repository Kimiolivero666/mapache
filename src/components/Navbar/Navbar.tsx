"use client";

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing'; 
import Image from 'next/image';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useChangeLanguage } from '@/hooks/useChangeLanguage';
import GetStartedButton from '@/components/GetStartedButton/GetStartedButton';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  
  const locale = useLocale();
  const t = useTranslations('navbar');
  const { changeLanguage, isPending } = useChangeLanguage();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 992; // Umbral para tablets/móvil
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '#services' },
    { name: t('projects'), href: '#projects' },
    { name: t('about'), href: '#about' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <motion.header 
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={styles.headerLeft}>
        {/* 1. LOGO (Siempre a la izquierda) */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/mapache-logo.png"
            alt="Mapache Logo"
            width={180}
            height={40}
            priority
          />
        </Link>

        {isMobile && (
          <div className={styles.langContainer}>
            <button className={styles.languageBtn} onClick={() => setShowLanguageMenu(!showLanguageMenu)}>
              {locale.toUpperCase()}
            </button>
            <AnimatePresence>
              {showLanguageMenu && (
                <motion.div 
                  className={styles.languageMenu}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  {['es', 'en', 'de'].map((lng) => (
                    <button key={lng} onClick={() => { changeLanguage(lng as 'es' | 'en' | 'de'); setShowLanguageMenu(false); }}>
                      {lng === 'es' ? 'Español' : lng === 'en' ? 'English' : 'Deutsch'}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* 2. NAVEGACIÓN CENTRAL (Solo Desktop) */}
      {!isMobile && (
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      )}

      {/* 3. BOTONES DERECHA (Desktop) */}
      {!isMobile && (
        <div className={styles.desktopRight}>
          <GetStartedButton />
          <div className={styles.langContainer}>
            <button className={styles.languageBtn} onClick={() => setShowLanguageMenu(!showLanguageMenu)}>
              {locale.toUpperCase()}
            </button>
            <AnimatePresence>
              {showLanguageMenu && (
                <motion.div 
                  className={styles.languageMenu}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  {['es', 'en', 'de'].map((lng) => (
                    <button key={lng} onClick={() => { changeLanguage(lng as 'es' | 'en' | 'de'); setShowLanguageMenu(false); }}>
                      {lng === 'es' ? 'Español' : lng === 'en' ? 'English' : 'Deutsch'}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="https://instagram.com" target="_blank" className={styles.instagramIcon}><FaInstagram /></a>
        </div>
      )}

      {/* 4. MENÚ MÓVIL (Solo Mobile) */}
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div 
            className={styles.navContainerMobile}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className={styles.navLinksMobile}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setIsOpen(false)}>{link.name}</Link>
                </li>
              ))}
            </ul>

            <div className={styles.mobileBottomSection}>
              <GetStartedButton />
              <a href="#" className={styles.instagramIcon}><FaInstagram /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
