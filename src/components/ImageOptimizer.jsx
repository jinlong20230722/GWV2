// @ts-ignore;
import React, { useState, useEffect, useRef } from 'react';

// 图片懒加载组件
export function LazyImage({
  src,
  alt,
  className = "",
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%232D3748' width='400' height='300'/%3E%3C/svg%3E",
  threshold = 0.1
}) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // 开始加载真实图片
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImageSrc(src);
          setIsLoaded(true);
        };
        observer.unobserve(entry.target);
      }
    }, {
      threshold
    });
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, threshold]);
  return <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      <img src={imageSrc} alt={alt} className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} loading="lazy" />
      {!isLoaded && <div className="absolute inset-0 bg-[#2D3748] animate-pulse" />}
    </div>;
}

// 图片预加载组件
export function ImagePreloader({
  sources = []
}) {
  useEffect(() => {
    if (sources.length > 0) {
      sources.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [sources]);
  return null;
}

// 响应式图片组件
export function ResponsiveImage({
  srcSet,
  sizes = "100vw",
  alt,
  className = ""
}) {
  return <img srcSet={srcSet} sizes={sizes} alt={alt} className={className} loading="lazy" />;
}

// 图片优化工具函数
export const imageUtils = {
  // 生成优化的图片URL
  optimizeImage: (url, width = 800, quality = 80) => {
    try {
      const urlObj = new URL(url);
      // 这里可以根据图片服务添加优化参数
      return url;
    } catch {
      return url;
    }
  },
  // 检查图片是否在缓存中
  isImageCached: url => {
    const img = new Image();
    img.src = url;
    return img.complete;
  },
  // 批量预加载图片
  preloadImages: urls => {
    return Promise.all(urls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    }));
  }
};
export default LazyImage;