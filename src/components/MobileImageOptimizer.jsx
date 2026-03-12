// @ts-ignore;
import React from 'react';

import { LazyImage } from '@/components/ImageOptimizer.jsx';
export function MobileOptimizedImage({
  src,
  alt,
  className = '',
  placeholder = true,
  priority = false
}) {
  return <div className={`relative overflow-hidden ${className}`}>
      <LazyImage src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" placeholder={placeholder} priority={priority} loading={priority ? 'eager' : 'lazy'} />
    </div>;
}
export function MobileImageGrid({
  images,
  className = ''
}) {
  return <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {images.map((image, index) => <MobileOptimizedImage key={index} src={image.src} alt={image.alt} className="aspect-video rounded-xl" priority={index < 2} />)}
    </div>;
}
export default MobileOptimizedImage;