import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string;
}

function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h3 className={`section-title ${className}`}>{title}</h3>
  );
}

export default SectionTitle;
