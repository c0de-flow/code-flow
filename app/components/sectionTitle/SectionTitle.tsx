"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  className?: string;
}

function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    // Animated section title for all sections
    <motion.h3
      className={`section-title ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {title}
    </motion.h3>
  );
}

export default SectionTitle;
