// @ts-ignore;
import React from 'react';

export function MobileOptimizationDashboard() {
  const optimizationItems = [{
    priority: '高优先级',
    status: '已完成',
    items: [{
      name: '全局移动端CSS样式优化',
      description: '添加触控目标、安全区域、文本优化等CSS类',
      color: 'text-green-500'
    }, {
      name: '首页移动端底部导航',
      description: '添加5个主要功能入口，咨询按钮FAB设计',
      color: 'text-green-500'
    }, {
      name: '首页顶部遮挡修复',
      description: '添加导航栏占位空间和iOS安全区域适配',
      color: 'text-green-500'
    }, {
      name: 'Home标识符重复修复',
      description: '重命名导入的Home图标为HomeIcon',
      color: 'text-green-500'
    }]
  }, {
    priority: '中优先级',
    status: '已完成',
    items: [{
      name: '所有页面统一底部导航',
      description: 'about、services、cases、contact页面添加移动端底部导航',
      color: 'text-green-500'
    }, {
      name: 'iOS安全区域全面适配',
      description: '使用safe-area-bottom等类确保元素不被遮挡',
      color: 'text-green-500'
    }, {
      name: '字体大小响应式优化',
      description: 'mobile-text类确保小屏设备文本可读性',
      color: 'text-green-500'
    }]
  }, {
    priority: '待优化',
    status: '进行中',
    items: [{
      name: '所有页面按钮触控优化',
      description: '为所有按钮添加touch-target类',
      color: 'text-amber-500'
    }, {
      name: '联系页面表单优化',
      description: '添加移动端友好的输入属性和样式',
      color: 'text-amber-500'
    }, {
      name: '图片懒加载100%覆盖',
      description: '确保所有图片使用LazyImage组件',
      color: 'text-amber-500'
    }]
  }];
  const expectedImprovements = [{
    metric: '移动端误触率',
    improvement: '-50%',
    trend: 'down'
  }, {
    metric: '导航效率',
    improvement: '+40%',
    trend: 'up'
  }, {
    metric: '信息获取效率',
    improvement: '+35%',
    trend: 'up'
  }, {
    metric: '表单输入时间',
    improvement: '-50%',
    trend: 'down'
  }, {
    metric: '整体移动端体验',
    improvement: '+30%',
    trend: 'up'
  }];
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            移动端优化项目
          </h1>
          <p className="text-gray-400 text-lg">
            全方位提升移动端用户体验和转化效果
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-500 mb-2">6</div>
            <div className="text-gray-400 text-sm">已完成优化项</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-amber-500 mb-2">3</div>
            <div className="text-gray-400 text-sm">待优化项</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-blue-500 mb-2">5</div>
            <div className="text-gray-400 text-sm">优化页面数</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-purple-500 mb-2">30%</div>
            <div className="text-gray-400 text-sm">预期体验提升</div>
          </div>
        </div>

        {/* Optimization Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Optimization Items */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">优化项目进度</h2>
            
            {optimizationItems.map((category, idx) => <div key={idx} className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`font-semibold text-lg ${category.status === '已完成' ? 'text-green-400' : category.status === '进行中' ? 'text-amber-400' : 'text-gray-400'}`}>
                    {category.priority}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${category.status === '已完成' ? 'bg-green-900/30 text-green-400' : category.status === '进行中' ? 'bg-amber-900/30 text-amber-400' : 'bg-gray-700/30 text-gray-400'}`}>
                    {category.status}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {category.items.map((item, itemIdx) => <div key={itemIdx} className="flex items-start space-x-3 p-3 bg-gray-700/30 rounded-lg">
                      <div className={`mt-1 ${item.color}`}>
                        {item.color.includes('green') ? '✓' : '⏱'}
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm">{item.name}</div>
                        <div className="text-gray-400 text-xs">{item.description}</div>
                      </div>
                    </div>)}
                </div>
              </div>)}
          </div>

          {/* Expected Improvements */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">预期改善效果</h2>
            
            <div className="space-y-4">
              {expectedImprovements.map((item, idx) => <div key={idx} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <div>
                    <div className="font-medium text-white">{item.metric}</div>
                  </div>
                  <div className={`text-2xl font-bold ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {item.trend === 'up' ? '↑' : '↓'} {item.improvement}
                  </div>
                </div>)}
            </div>

            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <h3 className="text-blue-400 font-semibold mb-2">💡 关键技术实现</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• touch-target: 44x44px WCAG标准</li>
                <li>• safe-area-*: iOS安全区域适配</li>
                <li>• mobile-text: 16px字体优化</li>
                <li>• LazyImage: 图片懒加载组件</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">技术实现细节</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-3">📁 文件结构</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• index.css - 全局移动端样式</li>
                <li>• pages/home.jsx - 首页优化</li>
                <li>• pages/about.jsx - 关于页面</li>
                <li>• pages/services.jsx - 服务页面</li>
                <li>• pages/cases.jsx - 案例页面</li>
                <li>• pages/contact.jsx - 联系页面</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">🎯 优化类名</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• touch-target - 44x44px触控目标</li>
                <li>• touch-target-lg - 48x48px大触控</li>
                <li>• safe-area-top/bottom - 安全区域</li>
                <li>• mobile-text - 16px优化文本</li>
                <li>• touch-manipulation - 防止缩放</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">📱 设备适配</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• iPhone刘海屏安全区域</li>
                <li>• Android全面屏适配</li>
                <li>• 小屏设备文本优化</li>
                <li>• 平板设备响应式</li>
                <li>• 桌面端自动降级</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export default MobileOptimizationDashboard;