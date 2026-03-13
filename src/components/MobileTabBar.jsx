// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Home, Briefcase, FolderOpen, User, MessageSquare } from 'lucide-react';

export default function MobileTabBar({
  navigateTo,
  currentPage
}) {
  const navItems = [{
    id: 'home',
    icon: Home,
    label: '首页'
  }, {
    id: 'services',
    icon: Briefcase,
    label: '服务'
  }, {
    id: 'contact',
    icon: MessageSquare,
    label: '咨询',
    isFloating: true
  }, {
    id: 'cases',
    icon: FolderOpen,
    label: '案例'
  }, {
    id: 'about',
    icon: User,
    label: '关于'
  }];
  return <>
      {/* 移动端底部导航 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0A1628]/95 backdrop-blur-lg border-t border-[#2D3748] z-50 safe-area-bottom">
        <nav className="flex justify-around items-center py-2 pb-6">
          {navItems.map(item => {
          const isActive = currentPage === item.id;
          const Icon = item.icon;
          if (item.isFloating) {
            return <button key={item.id} onClick={() => navigateTo(item.id)} className="flex flex-col items-center justify-center touch-target space-y-1 relative -mt-8">
                  <div className="bg-[#D4AF37] text-[#0A1628] rounded-full p-3 shadow-lg transform hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-400 mt-1">{item.label}</span>
                </button>;
          }
          return <button key={item.id} onClick={() => navigateTo(item.id)} className={`flex flex-col items-center justify-center touch-target space-y-1 transition-colors ${isActive ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-[#D4AF37]'}`}>
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>;
        })}
        </nav>
      </div>

      {/* 为底部导航留出足够空间，防止内容被遮挡 */}
      <div className="h-24 md:hidden"></div>
    </>;
}