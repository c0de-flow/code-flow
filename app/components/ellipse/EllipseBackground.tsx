"use client";
import React from "react";
import { motion } from "framer-motion";

interface EllipseBackgroundProps {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  backgroundColor?: string;
  opacity?: number;
  blur?: string;
  otherClasses?: string;
  initialOpacity?: number;
  whileInViewOpacity?: number;
  transitionDuration?: number;
}

const EllipseBackground = function ({
  // default values
  width = "396px",
  height = "395px",
  backgroundColor = "rgba(33, 103, 252, 0.09)",
  opacity = 1,
  blur = "125px",
  top,
  left,
  right,
  bottom,
  otherClasses,
  initialOpacity = 0,
  whileInViewOpacity = 1,
  transitionDuration = 1,
}: EllipseBackgroundProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${otherClasses}`}
      initial={{ opacity: initialOpacity }}
      whileInView={{ opacity: whileInViewOpacity }}
      transition={{ duration: transitionDuration }}
      style={{
        width,
        height,
        background: backgroundColor,
        opacity,
        filter: `blur(${blur})`,
        top,
        left,
        right,
        bottom,
      }}
    />
  );
};

export default EllipseBackground;
