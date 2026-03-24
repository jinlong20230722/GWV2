// @ts-ignore;
import React, { useState } from 'react';

export default function ImageWithLoader(props) {
  const {
    src,
    alt,
    className,
    ...rest
  } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  return <div className="relative overflow-hidden bg-[#2D3748]">
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && <div className="absolute inset-0 animate-pulse bg-[#2D3748] flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />
        </div>}
      
      {/* Error Fallback */}
      {hasError && <div className="absolute inset-0 bg-[#2D3748] flex items-center justify-center">
          <div className="text-gray-500 text-sm">图片加载失败</div>
        </div>}
      
      {/* Actual Image */}
      <img src={src} alt={alt} className={`${className} transition-opacity duration-500 ${isLoaded && !hasError ? 'opacity-100' : 'opacity-0'}`} loading="lazy" onLoad={() => setIsLoaded(true)} onError={() => setHasError(true)} {...rest} />
    </div>;
}