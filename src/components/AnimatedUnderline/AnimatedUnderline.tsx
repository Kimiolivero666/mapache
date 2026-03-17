"use client";

import { motion } from "framer-motion";

const AnimatedUnderline = () => {
  return (
    <div 
      style={{ 
        position: "absolute", 
        width: "100%", 
        left: 0, 
        bottom: "-10px", // Ajustado para que roce la base de las letras
        zIndex: -1,    // Envía la línea por detrás del texto
        pointerEvents: "none" // Evita que la línea interfiera con clicks en el texto
      }}
    >
      <motion.svg
        width="110%" // Un poco más ancho para que sobresalga de los lados
        height="20"
        viewBox="0 0 400 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ overflow: "visible", marginLeft: "-5%" }} // Centra el excedente del 110%
      >
        <motion.path
          d="M5 15C100 8 300 8 395 15" // Curva orgánica
          stroke="var(--naranja)" 
          strokeWidth="10" // Un poco más gruesa para que se note detrás del texto
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.45, 0.05, 0.55, 0.95],
            delay: 0.3,
          }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedUnderline;