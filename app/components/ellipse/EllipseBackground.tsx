import React from "react";

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
}: EllipseBackgroundProps) {
  return (
    <div
      className={`absolute pointer-events-none ${otherClasses}`}
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
