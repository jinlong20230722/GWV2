// @ts-ignore;
import React, { useState, useEffect, useRef, useCallback } from 'react';

// 性能监控组件
export const PerformanceMetrics = ({
  showDetails = false
}) => {
  const [metrics, setMetrics] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  const collectMetrics = useCallback(() => {
    if (!isMounted || !window.performance) return;
    try {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      const resources = performance.getEntriesByType('resource');
      const now = performance.now();
      const pageLoadTime = navigation ? navigation.loadEventEnd : now;
      const domReadyTime = navigation ? navigation.domContentLoadedEventEnd : now;
      const firstPaint = paint.find(p => p.name === 'first-paint')?.startTime || 0;
      const firstContentfulPaint = paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0;
      const memoryUsage = performance.memory ? {
        used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024),
        percent: Math.round(performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit * 100)
      } : null;
      const newMetrics = {
        timestamp: new Date().toISOString(),
        pageLoad: Math.round(pageLoadTime),
        domReady: Math.round(domReadyTime),
        firstPaint: Math.round(firstPaint),
        firstContentfulPaint: Math.round(firstContentfulPaint),
        resourceCount: resources.length,
        memory: memoryUsage,
        score: calculatePerformanceScore({
          pageLoadTime,
          domReadyTime,
          firstContentfulPaint
        })
      };
      if (isMounted) {
        setMetrics(newMetrics);
      }
    } catch (error) {
      console.warn('性能指标收集失败:', error);
    }
  }, [isMounted]);
  const calculatePerformanceScore = data => {
    let score = 100;
    if (data.pageLoadTime > 3000) score -= 20;else if (data.pageLoadTime > 2000) score -= 10;else if (data.pageLoadTime > 1000) score -= 5;
    if (data.firstContentfulPaint > 2000) score -= 25;else if (data.firstContentfulPaint > 1000) score -= 15;else if (data.firstContentfulPaint > 500) score -= 5;
    if (data.domReadyTime > 2500) score -= 15;else if (data.domReadyTime > 1500) score -= 8;
    return Math.max(0, Math.min(100, score));
  };
  const getScoreColor = score => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };
  const getScoreBg = score => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    if (score >= 50) return 'bg-orange-100';
    return 'bg-red-100';
  };
  useEffect(() => {
    if (window.performance) {
      if (document.readyState === 'complete') {
        setTimeout(collectMetrics, 100);
      } else {
        const handleLoad = () => setTimeout(collectMetrics, 100);
        window.addEventListener('load', handleLoad, {
          once: true
        });
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, [collectMetrics]);
  const formatTime = ms => {
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(1)}s`;
  };
  if (!metrics) return null;
  return <div className="fixed bottom-4 right-4 z-50">
      {!isVisible ? <button onClick={() => setIsVisible(true)} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
          <span className="font-bold">⚡</span>
          <span className={`font-bold ${getScoreColor(metrics.score)}`}>
            {metrics.score}
          </span>
        </button> : <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800 text-lg">性能监控</h3>
            <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600">
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <div className={`text-center p-4 rounded-xl ${getScoreBg(metrics.score)}`}>
              <div className={`text-4xl font-bold ${getScoreColor(metrics.score)}`}>
                {metrics.score}
              </div>
              <div className="text-sm text-gray-600 mt-1">性能评分</div>
            </div>

            {showDetails && <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">页面加载</span>
                  <span className="font-mono font-semibold">{formatTime(metrics.pageLoad)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">DOM准备</span>
                  <span className="font-mono font-semibold">{formatTime(metrics.domReady)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">首次绘制</span>
                  <span className="font-mono font-semibold">{formatTime(metrics.firstPaint)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">内容绘制</span>
                  <span className="font-mono font-semibold">{formatTime(metrics.firstContentfulPaint)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">资源数量</span>
                  <span className="font-mono font-semibold">{metrics.resourceCount}</span>
                </div>
                {metrics.memory && <div className="flex justify-between">
                    <span className="text-gray-600">内存使用</span>
                    <span className="font-mono font-semibold">
                      {metrics.memory.used}MB / {metrics.memory.total}MB ({metrics.memory.percent}%)
                    </span>
                  </div>}
              </div>}

            <button onClick={collectMetrics} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
              刷新数据
            </button>
          </div>
        </div>}
    </div>;
};
export default PerformanceMetrics;