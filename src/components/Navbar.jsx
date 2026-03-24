// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar(props) {
  const {
    currentPage,
    onNavigate
  } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigateTo = pageId => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setIsMenuOpen(false);
  };
  const navItems = [{
    id: 'home',
    label: '首页'
  }, {
    id: 'services',
    label: '服务'
  }, {
    id: 'about',
    label: '关于我们'
  }, {
    id: 'contact',
    label: '联系我们',
    isButton: true
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer flex-shrink-0" onClick={() => navigateTo('home')}>
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />
            <span className="text-xl sm:text-2xl font-bold text-white font-serif tracking-wider">
              SECURE<span className="text-[#D4AF37]">GUARD</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.slice(0, 3).map(item => <button key={item.id} onClick={() => navigateTo(item.id)} className={`transition-colors duration-300 font-medium text-sm lg:text-base ${currentPage === item.id ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
                {item.label}
              </button>)}
            <button onClick={() => navigateTo('contact')} className={`px-4 lg:px-6 py-2 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 touch-manipulation ${currentPage === 'contact' ? 'bg-[#C0C0C0] text-[#0A1628]' : 'bg-[#D4AF37] text-[#0A1628] hover:bg-[#C0C0C0]'}`}>
              联系我们
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="菜单">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-[#0A1628]/95 backdrop-blur-md border-t border-[#2D3748] animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navItems.map(item => <button key={item.id} onClick={() => navigateTo(item.id)} className={`block w-full text-left py-3 px-4 rounded-lg transition-colors touch-manipulation min-h-[44px] ${currentPage === item.id ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/5'}`}>
                {item.label}
              </button>)}
          </div>
        </div>}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </nav>;
}