import React from 'react';
import {motion} from 'motion/react';

export const EASE_EDITORIAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 22,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{opacity: 0, y}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.12}}
      transition={{duration: 0.6, delay, ease: EASE_EDITORIAL}}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
  className = '',
  delay = 0,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{opacity: 0, y}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.65, delay, ease: EASE_EDITORIAL}}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({
  children,
  className = '',
  stagger = 0.07,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.08}}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: {opacity: 0, y: 20},
        visible: {
          opacity: 1,
          y: 0,
          transition: {duration: 0.55, ease: EASE_EDITORIAL},
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
