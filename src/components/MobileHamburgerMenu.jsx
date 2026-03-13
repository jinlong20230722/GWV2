// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Menu, X, Home, Briefcase, FolderOpen, User, MessageSquare, Shield } from 'lucide-react';

export function MobileHamburgerMenu({
  currentPage,
  navigateTo
}) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    id: 'home',
    label: '首页',
    icon: Home
  }, {
    id: 'services',
    label: '服务',
    icon: Briefcase
  }, {
    id: 'cases',
    label: '案例',
    icon: FolderOpen
  }, {
    id: 'about',
    label: '关于',
    icon: User
  }];
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const handleNavigation = pageId => {
    navigateTo(pageId);
    closeMenu();
  };

  // 锁定滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return <>
      {/* 汉堡菜单按钮 */}
      <button onClick={toggleMenu} className="md:hidden p-2 touch-target active:scale-95 transition-transform" aria-label="打开菜单" aria-expanded={isOpen}>
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* 侧边抽屉式导航 */}
      {isOpen && <>
          {/* 背景遮罩 */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in" onClick={closeMenu} />
          
          {/* 侧边抽屉 */}
          <div className="fixed top-0 right-0 h-full w-72 bg-[#0A1628] z-50 md:hidden shadow-2xl animate-slide-in-right safe-area-top safe-area-bottom">
            <div className="flex flex-col h-full">
              {/* 头部 */}
              <div className="flex items-center justify-between p-6 border-b border-[#2D3748]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#0A1628]" />
                  </div>
                  <span className="text-white font-bold text-lg font-serif">中保华安</span>
                </div>
                <button onClick={closeMenu} className="p-2 touch-target hover:bg-white/10 rounded-lg transition-colors" aria-label="关闭菜单">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* 导航链接 */}
              <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                {navItems.map(item => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return <button key={item.id} onClick={() => handleNavigation(item.id)} className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-200 touch-target ${isActive ? 'bg-[#D4AF37] text-[#0A1628] shadow-lg' : 'text-gray-300 hover:bg-white/10 hover:text-white active:scale-98'}`}>
                      <Icon className="w-5 h-5" />
                      <span className="font-medium text-lg">{item.label}</span>
                      {isActive && <div className="ml-auto w-2 h-2 bg-[#0A1628] rounded-full" />}
                    </button>;
            })}
              </nav>

              {/* 联系我们按钮 */}
              <div className="p-6 border-t border-[#2D3748]">
                <button onClick={() => handleNavigation('about')} className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0A1628] px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 touch-target flex items-center justify-center space-x-3">
                  <MessageSquare className="w-5 h-5" />
                  <span>立即咨询</span>
                </button>
              </div>
            </div>
          </div>
        </>}
    </>;
}
export default MobileHamburgerMenu;