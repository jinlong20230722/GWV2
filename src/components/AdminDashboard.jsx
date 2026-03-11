// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Layout, Users, Shield, TrendingUp, Settings, Edit2, Plus, Trash2, Save, Eye, Menu, X, Database, FileText, Bell, Search } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const menuItems = [{
    id: 'dashboard',
    label: '仪表盘',
    icon: Layout
  }, {
    id: 'content',
    label: '内容管理',
    icon: FileText
  }, {
    id: 'services',
    label: '服务管理',
    icon: Shield
  }, {
    id: 'cases',
    label: '案例管理',
    icon: Database
  }, {
    id: 'users',
    label: '用户管理',
    icon: Users
  }, {
    id: 'analytics',
    label: '数据分析',
    icon: TrendingUp
  }, {
    id: 'settings',
    label: '系统设置',
    icon: Settings
  }];
  const stats = [{
    label: '总访问量',
    value: '128,456',
    change: '+12.5%',
    positive: true
  }, {
    label: '咨询数',
    value: '1,234',
    change: '+8.2%',
    positive: true
  }, {
    label: '转化率',
    value: '3.2%',
    change: '-1.1%',
    positive: false
  }, {
    label: '用户满意度',
    value: '4.8/5',
    change: '+0.3',
    positive: true
  }];
  const recentActivities = [{
    id: 1,
    action: '更新了首页横幅',
    user: '管理员',
    time: '5分钟前',
    status: 'success'
  }, {
    id: 2,
    action: '新增成功案例',
    user: '内容编辑',
    time: '30分钟前',
    status: 'success'
  }, {
    id: 3,
    action: '修改联系信息',
    user: '管理员',
    time: '2小时前',
    status: 'info'
  }, {
    id: 4,
    action: '删除了过期内容',
    user: '内容编辑',
    time: '1天前',
    status: 'warning'
  }];
  return <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">后台管理</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-600">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-[#0A1628] to-[#1A2842] transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} lg:translate-x-0`}>
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <Shield className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-xl font-bold text-white">SecureGuard</span>
            </div>

            <nav className="space-y-2">
              {menuItems.map(item => {
              const Icon = item.icon;
              return <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${activeTab === item.id ? 'bg-[#D4AF37] text-[#0A1628] font-semibold' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}>
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>;
            })}
            </nav>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-[#0A1628]" />
              </div>
              <div>
                <p className="text-white font-medium">管理员</p>
                <p className="text-gray-400 text-sm">admin@secureguard.com</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 pt-16 lg:pt-0">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {menuItems.find(m => m.id === activeTab)?.label || '仪表盘'}
                </h2>
                <p className="text-gray-500 mt-1">欢迎回来，今天是 {new Date().toLocaleDateString('zh-CN')}</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <input type="text" placeholder="搜索..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                <button className="p-2 text-gray-600 hover:text-gray-800 relative">
                  <Bell className="w-6 h-6" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            {activeTab === 'dashboard' && <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.positive ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          <TrendingUp className={`w-6 h-6 ${stat.positive ? 'text-green-600' : 'text-yellow-600'}`} />
                        </div>
                        <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-yellow-600'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                    </div>)}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content Management */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-800">快速操作</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300">
                        <Plus className="w-8 h-8 text-gray-400 hover:text-[#D4AF37] mb-2" />
                        <span className="text-sm text-gray-600">新增内容</span>
                      </button>
                      <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300">
                        <Edit2 className="w-8 h-8 text-gray-400 hover:text-[#D4AF37] mb-2" />
                        <span className="text-sm text-gray-600">编辑内容</span>
                      </button>
                      <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300">
                        <Eye className="w-8 h-8 text-gray-400 hover:text-[#D4AF37] mb-2" />
                        <span className="text-sm text-gray-600">预览</span>
                      </button>
                      <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300">
                        <Save className="w-8 h-8 text-gray-400 hover:text-[#D4AF37] mb-2" />
                        <span className="text-sm text-gray-600">保存</span>
                      </button>
                    </div>
                  </div>

                  {/* Recent Activities */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-800">最近活动</h3>
                      <button className="text-sm text-[#D4AF37] hover:underline">查看全部</button>
                    </div>
                    <div className="space-y-4">
                      {recentActivities.map(activity => <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                          <div className="flex-1">
                            <p className="text-gray-800 text-sm font-medium">{activity.action}</p>
                            <p className="text-gray-500 text-xs">{activity.user} · {activity.time}</p>
                          </div>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>}

            {/* Other Tabs Placeholder */}
            {activeTab !== 'dashboard' && <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {menuItems.find(m => m.id === activeTab)?.label} 模块
                </h3>
                <p className="text-gray-500">此功能正在开发中，敬请期待...</p>
              </div>}
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsSidebarOpen(false)} />}
    </div>;
}