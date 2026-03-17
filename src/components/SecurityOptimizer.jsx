// @ts-ignore;
import React, { createContext, useContext, useCallback, useMemo } from 'react';

// XSS防护 - 安全HTML转义
export const sanitizeHTML = html => {
  if (!html) return '';
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

// 安全文本输出 - 防止XSS注入
export const safeText = text => {
  if (!text && text !== 0) return '';
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
};

// URL安全验证
export const safeURL = (url, allowedProtocols = ['http:', 'https:']) => {
  if (!url) return '';
  try {
    const parsedURL = new URL(url, window.location.origin);
    if (!allowedProtocols.includes(parsedURL.protocol)) {
      return '';
    }
    return url;
  } catch (e) {
    return '';
  }
};

// 安全JSON解析
export const safeJSONParse = (jsonString, fallback = null) => {
  if (!jsonString) return fallback;
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.warn('JSON解析失败:', e);
    return fallback;
  }
};

// 防止CSRF的安全头部
export const getSafeHeaders = () => {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block'
  };
};

// 安全组件 - 自动转义文本
const SafeText = ({
  children,
  className = ''
}) => {
  return <span className={className}>{safeText(children)}</span>;
};

// 安全链接组件
const SafeLink = ({
  href,
  children,
  className = '',
  rel = 'noopener noreferrer',
  target = '_blank'
}) => {
  const safeHref = safeURL(href);
  return <a href={safeHref} className={className} rel={rel} target={target}>{children}</a>;
};

// 安全图片组件
const SafeImage = ({
  src,
  alt,
  className = ''
}) => {
  const safeSrc = safeURL(src);
  const safeAltText = safeText(alt);
  return <img src={safeSrc} alt={safeAltText} className={className} />;
};

// 安全输入组件
const SafeInput = ({
  value,
  onChange,
  ...props
}) => {
  const handleChange = e => {
    const safeValue = safeText(e.target.value);
    onChange && onChange({
      ...e,
      target: {
        ...e.target,
        value: safeValue
      }
    });
  };
  return <input value={value} onChange={handleChange} {...props} />;
};

// 安全Context
const SecurityContext = createContext(null);
export const SecurityProvider = ({
  children
}) => {
  const securityUtils = useMemo(() => ({
    sanitizeHTML,
    safeText,
    safeURL,
    safeJSONParse,
    getSafeHeaders
  }), []);
  return <SecurityContext.Provider value={securityUtils}>
      {children}
    </SecurityContext.Provider>;
};
export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

// 内容安全策略组件
export const ContentSecurityPolicy = () => {
  return <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;" />;
};

// 安全监控Hook
export const useSecurityMonitor = () => {
  const logSecurityEvent = useCallback((eventType, details) => {
    console.log(`🔒 Security Event [${eventType}]:`, details);
    // 这里可以添加真实的安全事件上报
  }, []);
  const checkForXSS = useCallback(input => {
    const xssPatterns = [/<script[^>]*>.*?<\/script>/gi, /javascript:/gi, /on\w+\s*=/gi, /<iframe[^>]*>.*?<\/iframe>/gi];
    const hasXSS = xssPatterns.some(pattern => pattern.test(input));
    if (hasXSS) {
      logSecurityEvent('XSS_ATTEMPT', {
        input
      });
      return true;
    }
    return false;
  }, [logSecurityEvent]);
  return {
    logSecurityEvent,
    checkForXSS
  };
};
export { SafeText, SafeLink, SafeImage, SafeInput };
export default SecurityProvider;