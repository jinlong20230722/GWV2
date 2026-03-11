// @ts-ignore;
import React from 'react';

import { AccessibilityProvider, AccessibilityToolbar } from './AccessibilityOptimizer';
import { SkipLink } from './AriaLiveRegion';
export const AccessibilityWrapper = ({
  children
}) => {
  return <AccessibilityProvider>
      <SkipLink />
      {children}
      <AccessibilityToolbar />
    </AccessibilityProvider>;
};