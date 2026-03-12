// @ts-ignore;
import React from 'react';

export function TouchButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  ...props
}) {
  const baseClasses = 'relative overflow-hidden transition-all duration-200 transform active:scale-95 touch-target focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]';
  const variants = {
    primary: 'bg-[#D4AF37] text-[#0A1628] hover:bg-[#C0C0C0]',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
    outline: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628]',
    ghost: 'text-white hover:bg-white/10'
  };
  return <button onClick={onClick} disabled={disabled} className={`
        ${baseClasses}
        ${variants[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `} {...props}>
      {/* 涟漪效果层 */}
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute inset-0 bg-white/20 opacity-0 transform scale-0 transition-all duration-300 active:opacity-100 active:scale-100" />
      </span>
      
      {/* 内容层 */}
      <span className="relative z-10">
        {children}
      </span>
    </button>;
}
export function TouchScale({
  children,
  className = ''
}) {
  return <div className={`transform transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}>
      {children}
    </div>;
}
export function TouchCard({
  children,
  onClick,
  className = ''
}) {
  return <div onClick={onClick} className={`
        relative overflow-hidden cursor-pointer
        transform transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        active:scale-98 active:shadow-lg
        touch-target
        ${className}
      `}>
      {/* 悬停光效 */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      {children}
    </div>;
}
export default TouchButton;