import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  href,
  target
}) => {
  const baseStyles = "px-6 py-3 font-medium transition-all duration-300 tracking-wide font-sans text-sm md:text-base";
  const variants = {
    primary: "bg-stone-900 text-cream hover:bg-ocean-700 shadow-md",
    outline: "border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-cream"
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return content;
};