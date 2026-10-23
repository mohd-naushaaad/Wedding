import React from 'react';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs min-h-[38px]',
    md: 'px-6 py-3 text-sm min-h-[44px]',
    lg: 'px-8 py-4 text-base min-h-[50px] font-medium tracking-wide'
  }[size];

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#A88537] via-[#D6B772] to-[#C6A45B] text-emerald-950 font-semibold shadow-[0_4px_20px_rgba(198,164,91,0.35)] hover:shadow-[0_6px_25px_rgba(231,214,163,0.5)] active:scale-[0.98] border border-[#FAF4E6]/40',
    outline:
      'bg-transparent text-[#E7D6A3] border border-[#C6A45B] hover:bg-[#C6A45B]/15 hover:border-[#FAF4E6] shadow-[0_2px_15px_rgba(198,164,91,0.15)] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#E7D6A3] hover:text-[#FAF4E6] hover:bg-white/5'
  }[variant];

  return (
    <button
      className={`relative inline-flex items-center justify-center rounded-full font-serif tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6A45B] focus:ring-offset-2 focus:ring-offset-emerald-950 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${sizeClasses} ${variantClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
