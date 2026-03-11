// @ts-ignore;
import React, { useEffect, useState, useRef } from 'react';

// 网站分析数据类型
const AnalyticsEvent = {
  PAGE_VIEW: 'page_view',
  CLICK: 'click',
  SCROLL: 'scroll',
  INTERACTION: 'interaction',
  ERROR: 'error',
  PERFORMANCE: 'performance'
};

// 分析管理器
class AnalyticsManager {
  constructor() {
    this.sessionId = this.generateSessionId();
    this.userId = this.getUserId();
    this.events = [];
    this.isInitialized = false;
  }
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  getUserId() {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }
  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;
    console.log('📊 Analytics initialized:', {
      sessionId: this.sessionId,
      userId: this.userId
    });

    // 跟踪页面加载
    this.trackPageView(window.location.pathname);

    // 监听错误
    this.setupErrorTracking();

    // 监听性能
    this.trackPerformance();
  }
  trackPageView(page) {
    const event = {
      type: AnalyticsEvent.PAGE_VIEW,
      page,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId,
      userAgent: navigator.userAgent,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      referrer: document.referrer
    };
    this.events.push(event);
    console.log('📄 Page view tracked:', page);
    this.sendToAnalytics(event);
  }
  trackClick(element, action) {
    const event = {
      type: AnalyticsEvent.CLICK,
      element,
      action,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId
    };
    this.events.push(event);
    console.log('👆 Click tracked:', element, action);
    this.sendToAnalytics(event);
  }
  trackScroll(scrollDepth) {
    const event = {
      type: AnalyticsEvent.SCROLL,
      scrollDepth,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId
    };
    this.events.push(event);
    this.sendToAnalytics(event);
  }
  trackInteraction(type, details) {
    const event = {
      type: AnalyticsEvent.INTERACTION,
      interactionType: type,
      details,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId
    };
    this.events.push(event);
    console.log('🔄 Interaction tracked:', type, details);
    this.sendToAnalytics(event);
  }
  trackError(error, context) {
    const event = {
      type: AnalyticsEvent.ERROR,
      error: error.message || String(error),
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId
    };
    this.events.push(event);
    console.error('❌ Error tracked:', error);
    this.sendToAnalytics(event);
  }
  trackPerformance() {
    if (window.performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const timing = performance.timing;
          const performanceData = {
            domLoad: timing.domContentLoadedEventEnd - timing.navigationStart,
            fullLoad: timing.loadEventEnd - timing.navigationStart,
            domReady: timing.domComplete - timing.domLoading,
            redirect: timing.redirectEnd - timing.redirectStart,
            lookup: timing.domainLookupEnd - timing.domainLookupStart,
            connect: timing.connectEnd - timing.connectStart,
            request: timing.responseEnd - timing.requestStart,
            response: timing.responseEnd - timing.responseStart
          };
          const event = {
            type: AnalyticsEvent.PERFORMANCE,
            ...performanceData,
            timestamp: new Date().toISOString(),
            sessionId: this.sessionId,
            userId: this.userId
          };
          this.events.push(event);
          console.log('⚡ Performance tracked:', performanceData);
          this.sendToAnalytics(event);
        }, 0);
      });
    }
  }
  setupErrorTracking() {
    window.addEventListener('error', event => {
      this.trackError(event.error || event, {
        type: 'window_error'
      });
    });
    window.addEventListener('unhandledrejection', event => {
      this.trackError(event.reason, {
        type: 'unhandled_rejection'
      });
    });
  }
  sendToAnalytics(event) {
    // 这里可以发送到后端分析服务
    // 目前存储在本地用于演示
    if (!localStorage.getItem('analytics_events')) {
      localStorage.setItem('analytics_events', JSON.stringify([]));
    }
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    events.push(event);

    // 只保留最近100条事件
    if (events.length > 100) {
      events.splice(0, events.length - 100);
    }
    localStorage.setItem('analytics_events', JSON.stringify(events));
  }
  getEvents() {
    return this.events;
  }
  getStoredEvents() {
    return JSON.parse(localStorage.getItem('analytics_events') || '[]');
  }
  getSessionStats() {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      eventCount: this.events.length,
      pageViews: this.events.filter(e => e.type === AnalyticsEvent.PAGE_VIEW).length,
      startTime: this.events[0]?.timestamp
    };
  }
}

// 创建全局分析实例
const analytics = new AnalyticsManager();

// React Hook
export function useAnalytics() {
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    analytics.init();
    setIsInitialized(true);
    return () => {
      // 清理
    };
  }, []);
  return {
    trackPageView: analytics.trackPageView.bind(analytics),
    trackClick: analytics.trackClick.bind(analytics),
    trackInteraction: analytics.trackInteraction.bind(analytics),
    trackError: analytics.trackError.bind(analytics),
    getSessionStats: analytics.getSessionStats.bind(analytics),
    getEvents: analytics.getEvents.bind(analytics),
    getStoredEvents: analytics.getStoredEvents.bind(analytics),
    isInitialized
  };
}

// 页面分析组件
export function PageAnalytics({
  pageId
}) {
  const {
    trackPageView
  } = useAnalytics();
  useEffect(() => {
    trackPageView(pageId);
  }, [pageId, trackPageView]);
  return null;
}

// 点击追踪组件
export function TrackedButton({
  children,
  elementName,
  action,
  onClick,
  ...props
}) {
  const {
    trackClick
  } = useAnalytics();
  const handleClick = e => {
    trackClick(elementName, action);
    if (onClick) {
      onClick(e);
    }
  };
  return <button onClick={handleClick} {...props}>
      {children}
    </button>;
}

// 分析仪表板组件
export function AnalyticsDashboard() {
  const {
    getSessionStats,
    getStoredEvents
  } = useAnalytics();
  const [stats, setStats] = useState(null);
  const [events, setEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(false);
  useEffect(() => {
    setStats(getSessionStats());
    setEvents(getStoredEvents().slice(-20).reverse());
  }, [getSessionStats, getStoredEvents]);
  if (!stats) return null;
  return <div className="fixed bottom-20 right-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-4 max-w-sm">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center justify-between">
          📊 网站分析
          <button onClick={() => setShowEvents(!showEvents)} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
            {showEvents ? '隐藏' : '详情'}
          </button>
        </h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">会话ID:</span>
            <span className="text-gray-800 font-mono text-xs">{stats.sessionId.slice(-8)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">事件数量:</span>
            <span className="text-blue-600 font-bold">{stats.eventCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">页面浏览:</span>
            <span className="text-green-600 font-bold">{stats.pageViews}</span>
          </div>
        </div>

        {showEvents && events.length > 0 && <div className="mt-4 border-t pt-4 max-h-60 overflow-y-auto">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">最近事件</h4>
            <div className="space-y-2">
              {events.map((event, index) => <div key={index} className="text-xs bg-gray-50 p-2 rounded">
                  <span className="font-semibold text-gray-700">{event.type}</span>
                  <span className="text-gray-500 ml-2">
                    {new Date(event.timestamp).toLocaleTimeString()}
                  </span>
                </div>)}
            </div>
          </div>}
      </div>
    </div>;
}