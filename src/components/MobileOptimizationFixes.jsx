// @ts-ignore;
import React from 'react';

// 移动端触控优化按钮组件
export function MobileOptimizedButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'medium',
  haptic = false,
  ...props
}) {
  const handleClick = e => {
    if (haptic && navigator.vibrate) {
      navigator.vibrate(10); // 轻微触觉反馈
    }
    if (onClick) onClick(e);
  };
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 transform active:scale-95';
  const touchClasses = 'min-h-[44px] min-w-[44px]'; // 最小触控区域

  const variantClasses = {
    primary: 'bg-[#D4AF37] text-[#0A1628] hover:bg-[#C0C0C0]',
    secondary: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628]',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-[#D4AF37] hover:text-[#D4AF37]'
  };
  const sizeClasses = {
    small: 'px-4 py-2 rounded-lg text-sm',
    medium: 'px-6 py-3 rounded-xl text-base',
    large: 'px-8 py-4 rounded-2xl text-lg'
  };
  return <button onClick={handleClick} className={`
        ${baseClasses}
        ${touchClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
        touch-manipulation
      `} style={{
    touchAction: 'manipulation'
  }} {...props}>
      {children}
    </button>;
}

// iOS安全区域适配组件
export function SafeAreaView({
  children,
  className = ''
}) {
  return <div className={className} style={{
    paddingTop: 'env(safe-area-inset-top, 0px)',
    paddingBottom: 'env(safe-area-inset-bottom, 0px)',
    paddingLeft: 'env(safe-area-inset-left, 0px)',
    paddingRight: 'env(safe-area-inset-right, 0px)'
  }}>
      {children}
    </div>;
}

// 移动端优化的输入组件
export function MobileOptimizedInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  label,
  error,
  ...props
}) {
  const getInputMode = () => {
    switch (type) {
      case 'tel':
        return 'tel';
      case 'email':
        return 'email';
      case 'number':
        return 'numeric';
      case 'url':
        return 'url';
      default:
        return 'text';
    }
  };
  const getAutoComplete = () => {
    switch (type) {
      case 'email':
        return 'email';
      case 'tel':
        return 'tel';
      case 'name':
        return 'name';
      default:
        return 'off';
    }
  };
  return <div className={`mb-4 ${className}`}>
      {label && <label className="block text-gray-700 font-medium mb-2 text-lg">
          {label}
        </label>}
      <input type={type} inputMode={getInputMode()} autoComplete={getAutoComplete()} placeholder={placeholder} value={value} onChange={onChange} className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors min-h-[56px]" style={{
      touchAction: 'manipulation',
      fontSize: '16px'
    }} // 防止iOS缩放
    {...props} />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>;
}

// 移动端优化的图片组件
export function SimpleMobileImage({
  src,
  alt,
  className = '',
  priority = false,
  ...props
}) {
  return <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} className={className} {...props} />;
}

// 移动端底部导航栏
export function MobileBottomNavigation({
  activeTab,
  onTabChange,
  tabs
}) {
  return <SafeAreaView className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab, index) => <button key={index} onClick={() => onTabChange(tab.id)} className={`flex flex-col items-center justify-center min-h-[60px] min-w-[60px] rounded-xl transition-colors ${activeTab === tab.id ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-gray-500 hover:text-gray-700'}`}>
            <tab.icon className={`w-6 h-6 mb-1 ${activeTab === tab.id ? 'text-[#D4AF37]' : 'text-gray-400'}`} />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>)}
      </div>
    </SafeAreaView>;
}

// 移动端响应式文本组件
export function MobileResponsiveText({
  children,
  className = '',
  size = 'base',
  ...props
}) {
  const sizeClasses = {
    xs: 'text-[14px] leading-relaxed',
    sm: 'text-[15px] leading-relaxed',
    base: 'text-[16px] leading-relaxed',
    lg: 'text-[18px] leading-relaxed',
    xl: 'text-[20px] leading-relaxed',
    '2xl': 'text-[24px] leading-snug',
    '3xl': 'text-[30px] leading-snug'
  };
  return <p className={`${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </p>;
}

// 移动端性能优化包装器
export function MobilePerformanceOptimizer({
  children
}) {
  return <div className="mobile-optimized">
      <style>{`
        .mobile-optimized {
          -webkit-tap-highlight-color: transparent;
          -webkit-overflow-scrolling: touch;
        }
        .mobile-optimized * {
          touch-action: manipulation;
        }
      `}</style>
      {children}
    </div>;
}