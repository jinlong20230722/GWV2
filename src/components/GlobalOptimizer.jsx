// @ts-ignore;
import React from 'react';

import { PerformanceOptimizer } from './PerformanceOptimizer';
import { SEOOptimizer } from './SEOOptimizer';
import { AccessibilityWrapper } from './AccessibilityWrapper';

// 全局优化器组合
const GlobalOptimizer = ({
  children,
  pageId,
  seoData,
  enablePerformance = true,
  enableSEO = true,
  enableAccessibility = true
}) => {
  let optimizedChildren = children;

  // 应用无障碍优化
  if (enableAccessibility) {
    optimizedChildren = <AccessibilityWrapper>
        {optimizedChildren}
      </AccessibilityWrapper>;
  }

  // 应用SEO优化
  if (enableSEO && pageId) {
    optimizedChildren = <>
        <SEOOptimizer pageId={pageId} customData={seoData} />
        {optimizedChildren}
      </>;
  }

  // 应用性能优化
  if (enablePerformance) {
    optimizedChildren = <PerformanceOptimizer>
        {optimizedChildren}
      </PerformanceOptimizer>;
  }
  return optimizedChildren;
};

// 页面优化包装器
const PageOptimizer = ({
  children,
  pageId,
  options = {}
}) => {
  const {
    enablePerf = true,
    enableSEO = true,
    enableA11y = true,
    seoData = null
  } = options;
  return <GlobalOptimizer pageId={pageId} seoData={seoData} enablePerformance={enablePerf} enableSEO={enableSEO} enableAccessibility={enableA11y}>
      {children}
    </GlobalOptimizer>;
};
export { GlobalOptimizer, PageOptimizer };