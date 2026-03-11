// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { RefreshCw, Check, AlertCircle, Clock, Calendar } from 'lucide-react';

// 内容版本管理组件
const ContentUpdater = ({
  children,
  contentId,
  refreshInterval = 300000
}) => {
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [updateHistory, setUpdateHistory] = useState([]);
  useEffect(() => {
    const savedHistory = localStorage.getItem(`content-history-${contentId}`);
    if (savedHistory) {
      setUpdateHistory(JSON.parse(savedHistory));
    }
    const lastUpdate = localStorage.getItem(`last-updated-${contentId}`);
    if (lastUpdate) {
      setLastUpdated(new Date(lastUpdate));
    }
  }, [contentId]);
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      // 模拟内容刷新
      await new Promise(resolve => setTimeout(resolve, 1000));
      const now = new Date();
      setLastUpdated(now);
      localStorage.setItem(`last-updated-${contentId}`, now.toISOString());
      const newHistory = [{
        timestamp: now.toISOString(),
        action: 'manual_refresh',
        id: Date.now()
      }, ...updateHistory.slice(0, 9)];
      setUpdateHistory(newHistory);
      localStorage.setItem(`content-history-${contentId}`, JSON.stringify(newHistory));
    } catch (error) {
      console.error('Content refresh failed:', error);
    } finally {
      setIsRefreshing(false);
    }
  };
  const formatLastUpdated = () => {
    if (!lastUpdated) return '从未更新';
    const now = new Date();
    const diffMs = now - lastUpdated;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    if (diffMins < 1) return '刚刚更新';
    if (diffMins < 60) return `${diffMins}分钟前`;
    if (diffHours < 24) return `${diffHours}小时前`;
    return lastUpdated.toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return <div className="relative">
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center space-x-2">
          <ContentStatusIndicator lastUpdated={lastUpdated} />
          <button onClick={handleRefresh} disabled={isRefreshing} className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" aria-label="刷新内容">
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="text-sm">刷新</span>
          </button>
        </div>
      </div>
      
      {children}
    </div>;
};

// 内容状态指示器
const ContentStatusIndicator = ({
  lastUpdated
}) => {
  const [status, setStatus] = useState('fresh');
  useEffect(() => {
    if (!lastUpdated) {
      setStatus('unknown');
      return;
    }
    const now = new Date();
    const ageMs = now - lastUpdated;
    const ageHours = ageMs / (1000 * 60 * 60);
    if (ageHours < 1) setStatus('fresh');else if (ageHours < 24) setStatus('recent');else if (ageHours < 168) setStatus('stale');else setStatus('outdated');
  }, [lastUpdated]);
  const statusConfig = {
    fresh: {
      color: 'bg-green-500',
      icon: Check,
      label: '最新'
    },
    recent: {
      color: 'bg-blue-500',
      icon: Clock,
      label: '近期'
    },
    stale: {
      color: 'bg-yellow-500',
      icon: Calendar,
      label: '待更新'
    },
    outdated: {
      color: 'bg-red-500',
      icon: AlertCircle,
      label: '已过期'
    },
    unknown: {
      color: 'bg-gray-500',
      icon: Clock,
      label: '未知'
    }
  };
  const config = statusConfig[status];
  const StatusIcon = config.icon;
  return <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
      <div className={`w-2 h-2 rounded-full ${config.color} animate-pulse`} />
      <StatusIcon className="w-3 h-3 text-white/70" />
      <span className="text-xs text-white/70">{config.label}</span>
    </div>;
};

// 自动内容刷新Hook
const useAutoRefresh = (callback, interval = 300000, enabled = true) => {
  const [isActive, setIsActive] = useState(enabled);
  const [lastRefresh, setLastRefresh] = useState(null);
  useEffect(() => {
    if (!isActive) return;
    const refreshInterval = setInterval(() => {
      callback();
      setLastRefresh(new Date());
    }, interval);
    return () => clearInterval(refreshInterval);
  }, [callback, interval, isActive]);
  return {
    isActive,
    setIsActive,
    lastRefresh,
    triggerRefresh: () => {
      callback();
      setLastRefresh(new Date());
    }
  };
};

// 内容版本对比组件
const ContentVersionCompare = ({
  oldContent,
  newContent,
  onApply,
  onReject
}) => {
  const [changes, setChanges] = useState([]);
  useEffect(() => {
    // 简单的内容差异检测
    const detectedChanges = [];
    Object.keys(newContent).forEach(key => {
      if (oldContent[key] !== newContent[key]) {
        detectedChanges.push({
          field: key,
          oldValue: oldContent[key],
          newValue: newContent[key],
          type: typeof oldContent[key] === 'undefined' ? 'added' : typeof newContent[key] === 'undefined' ? 'removed' : 'modified'
        });
      }
    });
    setChanges(detectedChanges);
  }, [oldContent, newContent]);
  return <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold mb-4">内容变更检测</h3>
      
      {changes.length === 0 ? <div className="text-center py-8 text-gray-500">
          <Check className="w-12 h-12 mx-auto mb-2 text-green-500" />
          <p>内容未发生变化</p>
        </div> : <>
          <div className="space-y-3 mb-6">
            {changes.map((change, index) => <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium">{change.field}</span>
                  <span className={`ml-2 text-xs px-2 py-1 rounded ${change.type === 'added' ? 'bg-green-100 text-green-800' : change.type === 'removed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {change.type === 'added' ? '新增' : change.type === 'removed' ? '删除' : '修改'}
                  </span>
                </div>
              </div>)}
          </div>
          
          <div className="flex space-x-3">
            <button onClick={onApply} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              应用变更
            </button>
            <button onClick={onReject} className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
              拒绝变更
            </button>
          </div>
        </>}
    </div>;
};
export { ContentUpdater, ContentStatusIndicator, useAutoRefresh, ContentVersionCompare };