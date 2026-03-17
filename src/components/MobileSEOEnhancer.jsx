// @ts-ignore;
import React from 'react';

export const MobileViewportOptimizer = ({
  children
}) => {
  return <div className="min-h-screen w-full overflow-x-hidden">
      {/* 移动端视口优化 */}
      <style jsx>{`
        @viewport {
          width: device-width;
          initial-scale: 1.0;
          maximum-scale: 1.0;
          user-scalable: no;
        }
        
        /* 防止移动端双击缩放 */
        * {
          touch-action: manipulation;
        }
        
        /* 移动端文本调整 */
        html {
          -webkit-text-size-adjust: 100%;
        }
      `}</style>
      
      {/* 安全区域适配 */}
      <div className="safe-area-inset-top safe-area-inset-bottom safe-area-inset-left safe-area-inset-right">
        {children}
      </div>
    </div>;
};
export const TouchOptimizer = ({
  children
}) => {
  return <div className="select-none">
      {/* 触摸优化样式 */}
      <style jsx>{`
        /* 提升触摸体验 */
        .touch-optimized {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* 触摸目标最小尺寸 */
        .touch-target {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* 防止文本选择干扰 */
        .no-select {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
      
      <div className="touch-optimized">
        {children}
      </div>
    </div>;
};
export const SEOContentOptimizer = ({
  title,
  description,
  keywords,
  children
}) => {
  return <>
      {/* 语义化HTML结构 */}
      <article className="seo-article">
        <header>
          {title && <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>}
          {description && <meta name="description" content={description} />}
          {keywords && <meta name="keywords" content={keywords.join(', ')} />}
        </header>
        
        <main className="content">
          {children}
        </main>
      </article>
    </>;
};
export const ResponsiveGrid = ({
  children,
  columns = {
    sm: 1,
    md: 2,
    lg: 3
  },
  gap = 'gap-4 md:gap-6 lg:gap-8'
}) => {
  const gridClasses = `grid grid-cols-${columns.sm} md:grid-cols-${columns.md} lg:grid-cols-${columns.lg} ${gap}`;
  return <div className={gridClasses}>
      {children}
    </div>;
};