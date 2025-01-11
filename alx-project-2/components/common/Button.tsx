import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, onClick, children }) => {
  // Define size classes
  const sizeClass = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Combine classes
  const buttonClass = `bg-blue-500 text-white ${sizeClass[size]} ${shape} hover:bg-blue-600 transition-all`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
