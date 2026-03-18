// @ts-ignore;
import React from 'react';

import { MobileViewportOptimizer, TouchOptimizer } from './MobileSEOEnhancer.jsx';
export const CompleteMobilePackage = ({
  children
}) => {
  return <MobileViewportOptimizer>
      <TouchOptimizer>
        {/* 移动设备检测样式 */}
        <style jsx>{`
          /* 移动端专属优化 */
          @media (max-width: 768px) {
            .mobile-optimized-padding {
              padding: 1rem;
            }
            
            .mobile-text-adjust {
              font-size: 90%;
              line-height: 1.5;
            }
            
            .mobile-button {
              width: 100%;
              justify-content: center;
            }
          }
          
          /* 平板设备优化 */
          @media (min-width: 769px) and (max-width: 1024px) {
            .tablet-optimized {
              padding: 1.5rem;
            }
          }
          
          /* 桌面设备优化 */
          @media (min-width: 1025px) {
            .desktop-optimized {
              padding: 2rem;
            }
          }
          
          /* 横屏优化 */
          @media (orientation: landscape) and (max-height: 500px) {
            .landscape-optimized {
              padding: 0.5rem;
            }
            
            .landscape-hide {
              display: none;
            }
          }
        `}</style>
        
        <div className="mobile-optimized-padding tablet-optimized desktop-optimized">
          {children}
        </div>
      </TouchOptimizer>
    </MobileViewportOptimizer>;
};
export const MobileFirstButton = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = true,
  className = ''
}) => {
  const baseClasses = 'mobile-button touch-target px-6 py-4 rounded-xl font-semibold transition-all duration-300 active:scale-95';
  const variantClasses = {
    primary: 'bg-[#D4AF37] text-[#0A1628] hover:bg-[#C0C0C0] shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628]',
    outline: 'border-2 border-gray-600 text-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37]'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  return <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}>
      {children}
    </button>;
};
export const MobileOptimizationCard = ({
  children,
  padding = 'p-6',
  className = ''
}) => {
  return <div className={`bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-2xl border border-[#2D3748] hover:border-[#D4AF37]/30 transition-all duration-300 ${padding} ${className}`}>
      {children}
    </div>;
};
export const MobileGrid = ({
  children,
  cols = {
    sm: 1,
    md: 2,
    lg: 3
  },
  gap = 'gap-4'
}) => {
  return <div className={`grid grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg} ${gap}`}>
      {children}
    </div>;
};
export const MobileSection = ({
  title,
  description,
  children,
  className = ''
}) => {
  return <section className={`py-12 md:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
                {title}
              </h2>}
            {description && <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {description}
              </p>}
          </div>}
        {children}
      </div>
    </section>;
};