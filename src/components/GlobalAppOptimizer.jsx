// @ts-ignore;
import React from 'react';

import { MobileProvider } from './MobileOptimizer.jsx';
import { AccessibilityProvider } from './AccessibilityOptimizer.jsx';
import { PageAnalytics } from './WebsiteAnalytics.jsx';
import { GlobalOptimizer } from './GlobalOptimizer.jsx';

// 全局应用优化器 - 一站式所有优化集成
export function GlobalAppOptimizer({
  children,
  pageId
}) {
  return <MobileProvider>
      <AccessibilityProvider>
        <GlobalOptimizer enablePerformance enableSEO enableAccessibility>
          {pageId && <PageAnalytics pageId={pageId} />}
          {children}
        </GlobalOptimizer>
      </AccessibilityProvider>
    </MobileProvider>;
}

// 页面包装器 - 包含所有页面级优化
export function PageWrapper({
  children,
  pageId,
  className = ''
}) {
  return <GlobalAppOptimizer pageId={pageId}>
      <div id="main-content" className={className}>
        {children}
      </div>
    </GlobalAppOptimizer>;
}