
import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = "" }) => {
  // Uses logo.png for light backgrounds and white_logo.png for dark backgrounds
  const src = variant === 'dark' ? 'logo.png' : 'white_logo.png';

  return (
    <img
      src={src}
      alt="Central Bistro Sochi"
      className={`object-contain pointer-events-none select-none ${className}`}
    />
  );
};

export default Logo;
