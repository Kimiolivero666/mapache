"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import styles from './Carousel.module.css';

export interface CarouselItem {
  id: number;
  name: string;
  title: string;
  avatar: string;
  quote: string;
}

interface CarouselProps {
  items: CarouselItem[];
  renderItem: (item: CarouselItem, index: number) => React.ReactNode;
}

export default function Carousel({ items, renderItem }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    // Set initial visible cards on mount
    setVisibleCards(getVisibleCards());
    
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextItem = () => {
    const maxIndex = Math.max(0, items.length - visibleCards);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevItem = () => {
    const maxIndex = Math.max(0, items.length - visibleCards);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getVisibleItems = () => {
    return items.slice(currentIndex, currentIndex + visibleCards);
  };

  return (
    <div className={styles.carouselContainer} ref={containerRef}>
      <motion.div 
        className={styles.itemsGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {getVisibleItems().map((item, index) => (
          <motion.div
            key={`${item.id}-${currentIndex}`}
            className={styles.itemWrapper}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.navigation}>
        <button 
          className={styles.navButton}
          onClick={prevItem}
          aria-label="Previous item"
        >
          <LuChevronLeft />
        </button>
        <div className={styles.dots}>
          {Array.from({ length: Math.max(1, items.length - visibleCards + 1) }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className={styles.navButton}
          onClick={nextItem}
          aria-label="Next item"
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
}
