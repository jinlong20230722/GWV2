// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Shield, Menu, X } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

import { SafeText } from './DataSourceProvider.jsx';
export function WebsiteHeader({
  navigateTo,
  scrolled
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A1628]/95 backdrop-blur-sm border-b border-[#2D3748]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
              <Shield className="w-10 h-10 text-[#D4AF37] mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-[#D4AF37] font-serif">SecureGuard</h1>
                <p className="text-xs text-gray-400 hidden sm:block">
                  <SafeText>专业安保服务</SafeText>
                </p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['home', 'services', 'cases', 'about'].map(item => <button key={item} onClick={() => navigateTo(item)} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 font-medium">
                  <SafeText>
                    {item === 'home' && '首页'}
                    {item === 'services' && '服务'}
                    {item === 'cases' && '案例'}
                    {item === 'about' && '关于'}
                  </SafeText>
                </button>)}
              <Button onClick={() => navigateTo('about')} className="bg-[#D4AF37] text-[#0A1628] px-6 py-2 rounded-full font-semibold hover:bg-[#C0C0C0] transition-all duration-200 transform hover:scale-105">
                <SafeText>免费咨询</SafeText>
              </Button>
            </nav>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="fixed inset-0 z-40 bg-[#0A1628] pt-24">
          <div className="p-8 space-y-6">
            {['home', 'services', 'cases', 'about'].map(item => <button key={item} onClick={() => {
          navigateTo(item);
          setIsMenuOpen(false);
        }} className="block w-full text-left text-2xl text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">
                <SafeText>
                  {item === 'home' && '首页'}
                  {item === 'services' && '服务'}
                  {item === 'cases' && '案例'}
                  {item === 'about' && '关于'}
                </SafeText>
              </button>)}
          </div>
        </div>}
    </>;
}