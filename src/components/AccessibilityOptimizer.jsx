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
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  useEffect(() => {
    if (!isMounted) return;
    try {
      // 从localStorage恢复设置
      const savedFontSize = localStorage.getItem('accessibility_fontSize');
      const savedContrast = localStorage.getItem('accessibility_contrast');
      const savedReduceMotion = localStorage.getItem('accessibility_reduceMotion');
      if (isMounted && savedFontSize) setFontSize(parseInt(savedFontSize));
      if (isMounted && savedContrast) setContrast(savedContrast);
      if (isMounted && savedReduceMotion) setReduceMotion(savedReduceMotion === 'true');

      // 检查系统偏好
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isMounted && prefersReducedMotion && !savedReduceMotion) {
        setReduceMotion(true);
      }
    } catch (error) {
      console.error('Accessibility init error:', error);
    }
  }, [isMounted]);
  useEffect(() => {
    if (!isMounted) return;
    try {
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
    } catch (error) {
      console.error('Accessibility update error:', error);
    }
  }, [fontSize, contrast, reduceMotion, isMounted]);
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
  return null;
};