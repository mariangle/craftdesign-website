import React from 'react';

interface ButtonProps {
  style?: 'services' | 'hero';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  style,
  children,
  fullWidth,
  onClick,
  className,
}) => {
  const buttonClassName = `px-3 py-2 shadow-lg whitespace-nowrap flex items-center justify-center gap-2
    ${style === 'services' ? 'bg-midnight_blue text-gray-300 hover:text-white transition hover:scale-105' : ''}
    ${style === 'hero' ? 'bg-blue-600 text-white hover:bg-blue-900 transition' : ''}
    ${fullWidth ? 'w-full' : ''}
    ${className}`

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
