// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Layout, Dashboard, Database, FileText, Shield, Users, Settings, Bell, Menu, X, Activity, Clock, UserCheck } from 'lucide-react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';

import AdminDataSourceManager from '@/components/AdminDataSourceManager.jsx';
import OperationLogManager from '@/components/OperationLogManager.jsx';
const ADMIN_MENU_ITEMS = [{
  id: 'dashboard',
  label: '仪表盘',
  icon: Dashboard,
  color: '#D4AF37'
}, {
  id: 'data',
  label: '数据管理',
  icon: Database,
  color: '#C0C0C0'
}, {
  id: 'content',
  label: '内容管理',
  icon: FileText,
  color: '#D4AF37'
}, {
  id: 'services',
  label: '服务管理',
  icon: Shield,
  color: '#C0C0C0'
}, {
  id: 'users',
  label: '用户管理',
  icon: Users,
  color: '#D4AF37'
}, {
  id: 'logs',
  label: '操作日志',
  icon: Activity,
  color: '#C0C0C0'
}, {
  id: 'settings',
  label: '系统设置',
  icon: Settings,
  color: '#D4AF37'
}];
function MobileHeader({
  isSidebarOpen,
  onToggleSidebar
}) {
  return <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <Shield className="w-6 h-6 text-[#D4AF37]" />
        后台管理
      </h1>
      <button onClick={onToggleSidebar} className="p-2 text-gray-600">
        {isSidebarOpen ? <X /> : <Menu />}
      </button>
    </div>;
}
function AdminSidebar({
  activeTab,
  onTabChange,
  isOpen,
  onClose
}) {
  return <>
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-[#0A1628] to-[#1A2842] 
        transform transition-transform duration-300 lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#0A1628]" />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl">SecureGuard</h2>
              <p className="text-gray-400 text-sm">后台管理系统</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            {ADMIN_MENU_ITEMS.map(item => <button key={item.id} onClick={() => {
            onTabChange(item.id);
            onClose();
          }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === item.id ? 'bg-[#D4AF37] text-[#0A1628] shadow-lg' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}>
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>)}
          </nav>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm truncate">管理员</p>
              <p className="text-gray-400 text-xs">admin@secureguard.com</p>
            </div>
          </div>
        </div>
      </aside>
      
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={onClose} />}
    </>;
}
function DashboardView({
  stats
}) {
  const {
    toast
  } = useToast();
  const [quickAction, setQuickAction] = useState(null);
  const quickActions = [{
    id: 'create_content',
    label: '新建内容',
    icon: FileText,
    action: () => toast({
      title: '新建内容',
      description: '准备创建新的内容项'
    })
  }, {
    id: 'manage_services',
    label: '管理服务',
    icon: Shield,
    action: () => toast({
      title: '管理服务',
      description: '跳转到服务管理界面'
    })
  }, {
    id: 'view_stats',
    label: '查看统计',
    icon: Activity,
    action: () => toast({
      title: '查看统计',
      description: '显示详细统计数据'
    })
  }, {
    id: 'system_backup',
    label: '系统备份',
    icon: Database,
    action: () => toast({
      title: '系统备份',
      description: '正在准备系统备份...'
    })
  }];
  return <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#0A1628] to-[#1A2842] rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">欢迎回来，管理员</h1>
        <p className="text-gray-300">今天是 {new Date().toLocaleDateString('zh-CN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => <StatCard key={index} stat={stat} />)}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-[#D4AF37]" />
              快捷操作
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map(action => <button key={action.id} onClick={action.action} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all">
                  <div className="w-10 h-10 bg-[#0A1628] rounded-lg flex items-center justify-center">
                    <action.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="font-medium text-gray-900">{action.label}</span>
                </button>)}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
              最近活动
            </h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">更新了网站配置</p>
                    <p className="text-xs text-gray-500">{i * 5}分钟前</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
}
function StatCard({
  stat
}) {
  const Icon = stat.icon;
  return <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#0A1628] to-[#1A2842] rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${stat.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {stat.change}
        </span>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
      <p className="text-gray-500">{stat.label}</p>
    </div>;
}
function DefaultView({
  tabId
}) {
  const tabNames = {
    content: '内容管理',
    services: '服务管理',
    users: '用户管理',
    settings: '系统设置'
  };
  return <div className="bg-white rounded-xl shadow-sm p-12 text-center">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Layout className="w-10 h-10 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{tabNames[tabId] || '功能开发中'}</h3>
      <p className="text-gray-500 mb-6">此功能模块正在开发中，敬请期待</p>
      <Button variant="outline" onClick={() => console.log('功能待实现')}>
        了解更多
      </Button>
    </div>;
}
export default function CompleteAdminSystem() {
  const {
    toast
  } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleTabChange = tabId => {
    setActiveTab(tabId);
  };
  const stats = [{
    label: '数据模型',
    value: '17',
    change: '+2',
    positive: true,
    icon: Database
  }, {
    label: '数据记录',
    value: '234',
    change: '+18',
    positive: true,
    icon: FileText
  }, {
    label: '今日操作',
    value: '47',
    change: '+12',
    positive: true,
    icon: Activity
  }, {
    label: '系统正常',
    value: '100%',
    change: '稳定',
    positive: true,
    icon: Shield
  }];
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView stats={stats} />;
      case 'data':
        return <AdminDataSourceManager />;
      case 'logs':
        return <OperationLogManager />;
      default:
        return <DefaultView tabId={activeTab} />;
    }
  };
  return <div className="min-h-screen bg-gray-50">
      <MobileHeader isSidebarOpen={isSidebarOpen} onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex">
        <AdminSidebar activeTab={activeTab} onTabChange={handleTabChange} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="flex-1 min-w-0 p-4 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>;
}