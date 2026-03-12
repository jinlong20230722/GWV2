// @ts-ignore;
import React from 'react';

export default function MobileOptimizationSummary() {
  const optimizations = [{
    priority: '🔴 高优先级',
    items: [{
      title: '1. 按钮触控区域优化',
      status: '进行中',
      description: '为所有页面按钮添加touch-target类，确保最小44x44px触控区域',
      expected: '减少50%移动端误触率'
    }, {
      title: '2. 联系页面表单优化',
      status: '待开始',
      description: '添加移动端友好的输入属性：inputmode、autocomplete、pattern等',
      expected: '减少50%输入时间'
    }, {
      title: '3. 图片懒加载100%覆盖',
      status: '待开始',
      description: '确保所有图片使用LazyImage组件实现懒加载',
      expected: '节省50%图片带宽'
    }]
  }, {
    priority: '🟡 中优先级',
    items: [{
      title: '各页面统一底部导航',
      status: '部分完成',
      description: '在所有页面添加MobileTabBar组件',
      expected: '提升40%导航效率'
    }, {
      title: '字体大小响应式优化',
      status: '待开始',
      description: '确保小屏设备文本可读性（最小14px）',
      expected: '提升30%可读性'
    }, {
      title: 'iOS安全区域全面适配',
      status: '已完成',
      description: '使用env(safe-area-inset-*)适配所有页面',
      expected: '完整适配所有iOS设备'
    }]
  }];
  return <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-[#D4AF37]">
        移动端优化实施计划
      </h1>
      
      {optimizations.map((section, sectionIndex) => <div key={sectionIndex} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            {section.priority}
          </h2>
          <div className="space-y-4">
            {section.items.map((item, itemIndex) => <div key={itemIndex} className="bg-[#2D3748]/50 p-6 rounded-lg border border-[#2D3748]">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${item.status === '已完成' ? 'bg-green-500/20 text-green-400' : item.status === '进行中' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-500/20 text-gray-400'}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">{item.description}</p>
                <p className="text-[#D4AF37] font-medium">
                  预期效果：{item.expected}
                </p>
              </div>)}
          </div>
        </div>)}
    </div>;
}