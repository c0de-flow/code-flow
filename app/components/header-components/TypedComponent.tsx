"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";


interface TypedComponentProps {
  text: string[];
  className?: string;
}

function TypedComponent({ text, className }: TypedComponentProps) {
  const el = useRef<HTMLSpanElement | null>(null);

// Options of text typing effect

  useEffect(() => {
    const options: Typed.Options = {
      strings: text,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(el.current as HTMLElement, options);

    // Cleanup function to destroy Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, [text]);

  return (
    <div>
      <h1 className={className}>
        <span ref={el} />
      </h1>
    </div>
  );
}

export default TypedComponent;
