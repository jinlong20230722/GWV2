// @ts-ignore;
import React, { createContext, useContext } from 'react';

import { useWebsiteData } from '@/hooks/useWebsiteData.js';
import { SafeText, SafeLink, SafeImage, SafeHTML } from '@/components/SecurityOptimizer.jsx';
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
export { SafeText, SafeLink, SafeImage, SafeHTML };