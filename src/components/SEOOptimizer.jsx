// @ts-ignore;
import React, { useEffect } from 'react';

export const SEOOptimizer = ({
  title = 'SecureGuard - 四防一体化安全解决方案',
  description = 'SecureGuard提供专业的四防一体化安全服务：人防、技防、物防、智防',
  keywords = ['安保服务', '四防一体化', '安全解决方案', '人防服务', '技防系统', '物防设施', '智防方案'],
  ogImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  children
}) => {
  useEffect(() => {
    // 更新文档标题
    document.title = title;

    // 更新meta标签
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));

    // Open Graph标签
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');

    // Twitter卡片标签
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonicalUrl) {
      updateCanonicalLink(canonicalUrl);
    }
    return () => {
      // 清理函数
    };
  }, [title, description, keywords, ogImage, ogType, twitterCard, canonicalUrl]);
  const updateMetaTag = (name, content, attribute = 'name') => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };
  const updateCanonicalLink = url => {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  };
  return <>{children}</>;
};
export const StructuredData = ({
  type,
  data
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData)
  }} />;
};