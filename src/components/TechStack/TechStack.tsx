"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  SiNextdotjs, 
  SiStrapi, 
  SiVercel, 
  SiReact, 
  SiFigma, 
  SiTailwindcss, 
  SiPostgresql, 
  SiNodedotjs, 
  SiGithub, 
  SiDocker, 
  SiTypescript 
} from 'react-icons/si';
import { TbCalendar } from 'react-icons/tb';
import AnimatedUnderline from '../AnimatedUnderline/AnimatedUnderline';
import styles from './TechStack.module.css';

const techLogos = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiStrapi />, name: "Strapi" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <TbCalendar />, name: "Calendly" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiTypescript />, name: "TypeScript" },
];

export default function TechStack() {
  const t = useTranslations('TechStack');

  // Duplicate the logos array for seamless infinite scroll
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
  <motion.h2 
    className={styles.mainTitle} // Usamos mainTitle que tiene el clamp y el weight
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {t('titlePart1')}{" "}
    <span className={styles.highlightWrapper}>
      {t('titlePart2')}
      <AnimatedUnderline /> {/* Ahora sí tiene un padre con position: relative */}
    </span>
    {" "}{t('titlePart3')}
  </motion.h2>
</div>
      </div>

      <div className={styles.orangeStrip}>
        <motion.div 
          className={styles.logosContainer}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: { 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 12, 
              ease: "linear" 
            } 
          }}
        >
          {duplicatedLogos.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className={styles.logoItem}>
              <div className={styles.logoIcon}>
                {tech.icon}
              </div>
              <span className={styles.logoName}>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
