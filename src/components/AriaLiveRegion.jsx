// @ts-ignore;
import React from 'react';

export const AriaLiveRegion = ({
  message,
  politeness = 'polite'
}) => {
  return <div aria-live={politeness} aria-atomic="true" className="sr-only">
      {message}
    </div>;
};
export const SkipLink = () => {
  return <a href="#main-content" className="fixed top-0 left-0 z-50 bg-[#D4AF37] text-[#0A1628] px-4 py-2 transform -translate-y-full transition-transform duration-200 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]">
      跳转到主要内容
    </a>;
};
export const AccessibleHeading = ({
  level,
  children,
  className = '',
  id
}) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag id={id} className={className}>
      {children}
    </HeadingTag>;
};
export const AccessibleButton = ({
  children,
  onClick,
  className = '',
  disabled = false,
  ariaLabel,
  ariaPressed,
  ariaExpanded,
  type = 'button'
}) => {
  return <button type={type} onClick={onClick} disabled={disabled} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] transition-colors ${className}`} aria-label={ariaLabel} aria-pressed={ariaPressed} aria-expanded={ariaExpanded} aria-disabled={disabled}>
      {children}
    </button>;
};
export const AccessibleImage = ({
  src,
  alt,
  className = '',
  title,
  isDecorative = false
}) => {
  if (isDecorative) {
    return <img src={src} alt="" role="presentation" className={className} title={title} />;
  }
  return <img src={src} alt={alt} className={className} title={title} />;
};
export const AccessibleLink = ({
  href,
  children,
  className = '',
  ariaLabel,
  target,
  rel
}) => {
  const isExternal = target === '_blank';
  const finalRel = isExternal ? rel || 'noopener noreferrer' : rel;
  return <a href={href} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] transition-colors ${className}`} aria-label={ariaLabel} target={target} rel={finalRel}>
      {children}
      {isExternal && <span className="sr-only">（在新窗口中打开）</span>}
    </a>;
};