// @ts-ignore;
import React, { useState, useEffect, createContext, useContext } from 'react';

const AccessibilityContext = createContext(undefined);
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};
export const AccessibilityProvider = ({
  children
}) => {
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState('normal');
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    // 从localStorage恢复设置
    const savedFontSize = localStorage.getItem('accessibility_fontSize');
    const savedContrast = localStorage.getItem('accessibility_contrast');
    const savedReduceMotion = localStorage.getItem('accessibility_reduceMotion');
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
    if (savedContrast) setContrast(savedContrast);
    if (savedReduceMotion) setReduceMotion(savedReduceMotion === 'true');

    // 检查系统偏好
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && !savedReduceMotion) {
      setReduceMotion(true);
    }
  }, []);
  useEffect(() => {
    // 应用字体大小
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem('accessibility_fontSize', fontSize.toString());

    // 应用对比度
    if (contrast === 'high') {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('accessibility_contrast', contrast);

    // 应用减少动画
    if (reduceMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
    localStorage.setItem('accessibility_reduceMotion', reduceMotion.toString());
  }, [fontSize, contrast, reduceMotion]);
  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 200));
  };
  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 70));
  };
  const resetFontSize = () => {
    setFontSize(100);
  };
  const toggleContrast = () => {
    setContrast(prev => prev === 'normal' ? 'high' : 'normal');
  };
  const toggleReduceMotion = () => {
    setReduceMotion(prev => !prev);
  };
  return <AccessibilityContext.Provider value={{
    fontSize,
    contrast,
    reduceMotion,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleContrast,
    toggleReduceMotion
  }}>
      {children}
    </AccessibilityContext.Provider>;
};
export const AccessibilityToolbar = () => {
  const {
    fontSize,
    contrast,
    reduceMotion,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleContrast,
    toggleReduceMotion
  } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);
  return <div className="fixed bottom-4 right-4 z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-[#D4AF37] text-[#0A1628] p-3 rounded-full shadow-lg hover:bg-[#C0C0C0] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]" aria-label="无障碍设置">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>

      {isOpen && <div className="absolute bottom-16 right-0 bg-[#0A1628] border border-[#2D3748] rounded-lg shadow-2xl p-4 min-w-[280px] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold">无障碍设置</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white" aria-label="关闭">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-white text-sm mb-2">
                <span>字体大小: {fontSize}%</span>
                <div className="flex space-x-2">
                  <button onClick={decreaseFontSize} className="bg-[#2D3748] px-2 py-1 rounded hover:bg-[#D4AF37] hover:text-[#0A1628] transition-colors" aria-label="减小字体">
                    A-
                  </button>
                  <button onClick={resetFontSize} className="bg-[#2D3748] px-2 py-1 rounded hover:bg-[#D4AF37] hover:text-[#0A1628] transition-colors" aria-label="重置字体">
                    重置
                  </button>
                  <button onClick={increaseFontSize} className="bg-[#2D3748] px-2 py-1 rounded hover:bg-[#D4AF37] hover:text-[#0A1628] transition-colors" aria-label="增大字体">
                    A+
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white text-sm">高对比度</span>
              <button onClick={toggleContrast} className={`px-3 py-1 rounded text-sm transition-colors ${contrast === 'high' ? 'bg-[#D4AF37] text-[#0A1628]' : 'bg-[#2D3748] text-white hover:bg-[#D4AF37] hover:text-[#0A1628]'}`} aria-pressed={contrast === 'high'}>
                {contrast === 'high' ? '开启' : '关闭'}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white text-sm">减少动画</span>
              <button onClick={toggleReduceMotion} className={`px-3 py-1 rounded text-sm transition-colors ${reduceMotion ? 'bg-[#D4AF37] text-[#0A1628]' : 'bg-[#2D3748] text-white hover:bg-[#D4AF37] hover:text-[#0A1628]'}`} aria-pressed={reduceMotion}>
                {reduceMotion ? '开启' : '关闭'}
              </button>
            </div>
          </div>
        </div>}
    </div>;
};