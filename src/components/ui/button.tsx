import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
};

export function Button({
  className = '',
  variant = 'default',
  size = 'default',
  type = 'button',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: '',
    outline: 'border bg-transparent',
  };
  const sizes = {
    default: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 py-3',
  };

  return <button type={type} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
