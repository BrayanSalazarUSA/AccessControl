import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outlinedBlue' | 'outlinedGreen';
  icon?: IconType;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
}) => {

  const baseStyles = 'flex items-center justify-center px-4 py-[8px] rounded-lg shadow-lg transition duration-300 ease-in-out transform';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-2xl',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark hover:shadow-2xl',
    outlinedBlue: 'border-[1px] border-white text-white hover:border-primary',
    outlinedGreen: 'border-[1px] border-white text-white hover:border-secondary',
  };

  const iconStyles = Icon ? 'mr-2' : ''; // Añade un margen si hay ícono

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.95 }}
    >
      {Icon && <Icon className={iconStyles} />}
      {text}
    </motion.button>
  );
};

export default Button;
