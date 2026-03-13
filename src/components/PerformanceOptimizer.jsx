// @ts-ignore;
import React, { useState, useEffect, useRef, useCallback } from 'react';

// 性能指标收集
const PerformanceOptimizer = ({
  children,
  enableMonitoring = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const observerRef = useRef(null);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  useEffect(() => {
    if (!enableMonitoring || typeof window === 'undefined' || !isMounted) return;
    const collectMetrics = () => {
      if (!isMounted) return;
      try {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        const resources = performance.getEntriesByType('resource');
        const metrics = {
          domContentLoaded: navigation?.domContentLoadedEventEnd || 0,
          loadComplete: navigation?.loadEventEnd || 0,
          firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
          resourceCount: resources.length,
          totalTransferSize: resources.reduce((acc, r) => acc + (r.transferSize || 0), 0),
          timestamp: new Date().toISOString()
        };
        if (isMounted) {
          setPerformanceMetrics(metrics);
          setIsLoaded(true);
        }
        if (process.env.NODE_ENV === 'development') {
          console.log('📊 Performance Metrics:', metrics);
        }
      } catch (error) {
        console.warn('Performance metrics collection failed:', error);
      }
    };
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics, {
        once: true
      });
    }
    return () => {
      window.removeEventListener('load', collectMetrics);
    };
  }, [enableMonitoring, isMounted]);

  // 内存使用监控（仅开发环境）
  useEffect(() => {
    if (!enableMonitoring || process.env.NODE_ENV !== 'development' || !isMounted) return;
    const logMemoryUsage = () => {
      if (!isMounted) return;
      if (performance.memory) {
        const usedMB = Math.round(performance.memory.usedJSHeapSize / 1048576);
        const totalMB = Math.round(performance.memory.jsHeapSizeLimit / 1048576);
        console.log(`💾 Memory Usage: ${usedMB}MB / ${totalMB}MB`);
      }
    };
    const memoryInterval = setInterval(logMemoryUsage, 30000);
    return () => clearInterval(memoryInterval);
  }, [enableMonitoring, isMounted]);
  return <>{children}</>;
};

// 虚拟滚动列表（高性能长列表）
const VirtualList = ({
  items,
  height = 600,
  itemHeight = 80,
  renderItem,
  overscan = 5
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);
  const totalHeight = items.length * itemHeight;
  const visibleCount = Math.ceil(height / itemHeight);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(items.length, startIndex + visibleCount + overscan * 2);
  const visibleItems = items.slice(startIndex, endIndex);
  const handleScroll = useCallback(e => {
    setScrollTop(e.target.scrollTop);
  }, []);
  return <div ref={containerRef} style={{
    height,
    overflow: 'auto'
  }} onScroll={handleScroll} className="relative">
      <div style={{
      height: totalHeight
    }}>
        {visibleItems.map((item, index) => {
        const actualIndex = startIndex + index;
        return <div key={item.id || actualIndex} style={{
          position: 'absolute',
          top: actualIndex * itemHeight,
          height: itemHeight,
          width: '100%'
        }}>
              {renderItem(item, actualIndex)}
            </div>;
      })}
      </div>
    </div>;
};

// 批量状态更新优化器
const useBatchState = initialState => {
  const [state, setState] = useState(initialState);
  const pendingUpdates = useRef([]);
  const timeoutRef = useRef(null);
  const batchSetState = useCallback((updates, immediate = false) => {
    if (immediate) {
      setState(prev => ({
        ...prev,
        ...updates
      }));
    } else {
      pendingUpdates.current.push(updates);
      if (!timeoutRef.current) {
        timeoutRef.current = requestAnimationFrame(() => {
          const mergedUpdates = pendingUpdates.current.reduce((acc, curr) => ({
            ...acc,
            ...curr
          }), {});
          setState(prev => ({
            ...prev,
            ...mergedUpdates
          }));
          pendingUpdates.current = [];
          timeoutRef.current = null;
        });
      }
    }
  }, []);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        cancelAnimationFrame(timeoutRef.current);
      }
    };
  }, []);
  return [state, batchSetState];
};

// 防抖Hook
const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

// 节流Hook
const useThrottle = (callback, delay = 300) => {
  const lastCall = useRef(0);
  const timeoutRef = useRef(null);
  const throttledCallback = useCallback((...args) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall.current;
    if (timeSinceLastCall >= delay) {
      lastCall.current = now;
      callback(...args);
    } else if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        lastCall.current = Date.now();
        timeoutRef.current = null;
        callback(...args);
      }, delay - timeSinceLastCall);
    }
  }, [callback, delay]);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return throttledCallback;
};

// 网络状态检测Hook
const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [connectionType, setConnectionType] = useState('unknown');
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 检测网络类型
    if (navigator.connection) {
      setConnectionType(navigator.connection.effectiveType || 'unknown');
      const handleConnectionChange = () => {
        setConnectionType(navigator.connection.effectiveType || 'unknown');
      };
      navigator.connection.addEventListener('change', handleConnectionChange);
      return () => {
        navigator.connection.removeEventListener('change', handleConnectionChange);
      };
    }
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return {
    isOnline,
    connectionType
  };
};
export { PerformanceOptimizer, VirtualList, useBatchState, useDebounce, useThrottle, useNetworkStatus };