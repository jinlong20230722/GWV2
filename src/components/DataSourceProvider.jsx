// @ts-ignore;
import React, { createContext, useContext, useCallback } from 'react';

import { useWebsiteData, safeText, safeURL, sanitizeHTML } from '@/hooks/useWebsiteData.js';
const DataSourceContext = createContext(null);
export function DataSourceProvider({
  children,
  props
}) {
  const websiteData = useWebsiteData(props);
  return <DataSourceContext.Provider value={websiteData}>
      {children}
    </DataSourceContext.Provider>;
}
export function useDataSourceContext() {
  const context = useContext(DataSourceContext);
  if (!context) {
    throw new Error('useDataSourceContext must be used within a DataSourceProvider');
  }
  return context;
}

// 安全文本组件
export function SafeText({
  children,
  className = ''
}) {
  return <span className={className}>{safeText(children)}</span>;
}

// 安全链接组件
export function SafeLink({
  href,
  children,
  className = '',
  ...props
}) {
  const safeHref = safeURL(href);
  return <a href={safeHref || '#'} className={className} {...props}>
      {children}
    </a>;
}

// 安全图片组件
export function SafeImage({
  src,
  alt,
  className = '',
  ...props
}) {
  const safeSrc = safeURL(src);
  return <img src={safeSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%232D3748" width="400" height="300"/%3E%3C/svg%3E'} alt={safeText(alt)} className={className} {...props} />;
}

// 安全HTML组件（只用于可信内容）
export function SafeHTML({
  html,
  className = ''
}) {
  return <div className={className} dangerouslySetInnerHTML={{
    __html: sanitizeHTML(html)
  }} />;
}