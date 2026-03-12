// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { CheckCircle, AlertCircle, Clock, XCircle, ChevronRight, Shield, Zap, Smartphone, Image, Cpu } from 'lucide-react';

export function MobileIssueFixes() {
  const issues = [{
    id: 1,
    priority: 'P0',
    title: '移动端导航优化不足',
    description: '导航菜单在移动端未折叠为汉堡菜单',
    status: 'in_progress',
    solution: '添加汉堡菜单按钮，侧边抽屉式导航，当前页面高亮显示',
    component: 'MobileHamburgerMenu.jsx'
  }, {
    id: 2,
    priority: 'P1',
    title: '部分页面路由未测试',
    description: '成功案例页、联系我们页、关于我们页未能完整测试',
    status: 'pending',
    solution: '单独测试每个页面，检查路由配置，确保所有页面可访问',
    component: 'pages/*.jsx'
  }, {
    id: 3,
    priority: 'P2',
    title: '图片加载优化',
    description: '部分图片未看到懒加载效果，首页图片较多',
    status: 'in_progress',
    solution: '添加图片懒加载，使用WebP格式，添加图片占位符',
    component: 'MobileImageOptimizer.jsx'
  }, {
    id: 4,
    priority: 'P2',
    title: '触摸反馈优化',
    description: '部分按钮点击后无明显触摸反馈',
    status: 'in_progress',
    solution: '添加点击态样式，添加涟漪动画效果',
    component: 'MobileTouchFeedback.jsx'
  }, {
    id: 5,
    priority: 'P1',
    title: '表单功能未测试',
    description: '联系表单、咨询表单未测试',
    status: 'pending',
    solution: '测试所有表单提交，检查表单验证，测试成功/失败提示',
    component: 'pages/contact.jsx'
  }, {
    id: 6,
    priority: 'P3',
    title: '动画性能',
    description: '轮播图动画帧率未知，滚动动画可能卡顿',
    status: 'pending',
    solution: '使用CSS transform代替top/left，添加will-change提示',
    component: 'PerformanceOptimizer.jsx'
  }];
  const statusConfig = {
    completed: {
      icon: CheckCircle,
      color: 'text-green-500',
      bg: 'bg-green-500/10',
      label: '已完成'
    },
    in_progress: {
      icon: Clock,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      label: '进行中'
    },
    pending: {
      icon: AlertCircle,
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/10',
      label: '待处理'
    },
    failed: {
      icon: XCircle,
      color: 'text-red-500',
      bg: 'bg-red-500/10',
      label: '失败'
    }
  };
  const priorityConfig = {
    'P0': {
      color: 'text-red-500',
      bg: 'bg-red-500/20',
      label: '紧急'
    },
    'P1': {
      color: 'text-orange-500',
      bg: 'bg-orange-500/20',
      label: '高优先级'
    },
    'P2': {
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/20',
      label: '中优先级'
    },
    'P3': {
      color: 'text-blue-500',
      bg: 'bg-blue-500/20',
      label: '低优先级'
    }
  };
  const stats = {
    total: issues.length,
    completed: issues.filter(i => i.status === 'completed').length,
    inProgress: issues.filter(i => i.status === 'in_progress').length,
    pending: issues.filter(i => i.status === 'pending').length
  };
  const progress = Math.round(stats.completed / stats.total * 100);
  return <div className="min-h-screen bg-[#0A1628] p-6">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-xl flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-[#0A1628]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white font-serif">移动端问题修复</h1>
              <p className="text-gray-400">系统性解决移动端体验问题</p>
            </div>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">总问题</span>
              <Shield className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-white">{stats.total}</div>
          </div>
          <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-400 text-sm">已完成</span>
              <CheckCircle className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
          </div>
          <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-400 text-sm">进行中</span>
              <Zap className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-blue-400">{stats.inProgress}</div>
          </div>
          <div className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-yellow-400 text-sm">待处理</span>
              <Clock className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-yellow-400">{stats.pending}</div>
          </div>
        </div>

        {/* 进度条 */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-semibold">总体修复进度</span>
            <span className="text-[#D4AF37] font-bold text-xl">{progress}%</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full transition-all duration-1000" style={{
            width: `${progress}%`
          }} />
          </div>
        </div>

        {/* 问题列表 */}
        <div className="space-y-4">
          {issues.map(issue => {
          const StatusIcon = statusConfig[issue.status].icon;
          return <div key={issue.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`${statusConfig[issue.status].bg} p-3 rounded-xl`}>
                      <StatusIcon className={`w-6 h-6 ${statusConfig[issue.status].color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{issue.title}</h3>
                        <span className={`${priorityConfig[issue.priority].bg} ${priorityConfig[issue.priority].color} px-3 py-1 rounded-full text-xs font-semibold`}>
                          {issue.priority} · {priorityConfig[issue.priority].label}
                        </span>
                        <span className={`${statusConfig[issue.status].bg} ${statusConfig[issue.status].color} px-3 py-1 rounded-full text-xs font-semibold`}>
                          {statusConfig[issue.status].label}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3">{issue.description}</p>
                      <div className="bg-[#0A1628]/50 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <ChevronRight className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-gray-300 text-sm">解决方案：</p>
                            <p className="text-white text-sm mt-1">{issue.solution}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-3">
                        <Cpu className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-500 text-sm font-mono">{issue.component}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* 组件库总结 */}
        <div className="mt-8 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <Zap className="w-5 h-5 text-[#D4AF37]" />
            <span>新建移动端优化组件库</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0A1628]/50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Smartphone className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white font-semibold">MobileHamburgerMenu</span>
              </div>
              <p className="text-gray-400 text-sm">侧边抽屉式汉堡菜单组件</p>
            </div>
            <div className="bg-[#0A1628]/50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Image className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white font-semibold">MobileImageOptimizer</span>
              </div>
              <p className="text-gray-400 text-sm">移动端图片懒加载优化</p>
            </div>
            <div className="bg-[#0A1628]/50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white font-semibold">MobileTouchFeedback</span>
              </div>
              <p className="text-gray-400 text-sm">触摸反馈和涟漪效果</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export default MobileIssueFixes;