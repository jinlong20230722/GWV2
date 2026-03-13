// @ts-ignore;
import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore;
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 滑动动画组件
export const SlideIn = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.5,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  useEffect(() => {
    if (!isMounted || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (isMounted && entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    observer.observe(ref.current);
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isMounted]);
  return <div ref={ref} className={`transition-all ease-out ${className}`} style={{
    transform: isVisible ? 'translate(0, 0)' : direction === 'left' ? 'translateX(-100px)' : direction === 'right' ? 'translateX(100px)' : direction === 'up' ? 'translateY(100px)' : 'translateY(-100px)',
    opacity: isVisible ? 1 : 0,
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`
  }}>
      {children}
    </div>;
};

// 脉冲动画按钮
export const PulseButton = ({
  children,
  className = '',
  isPrimary = false,
  ...props
}) => {
  const baseClasses = isPrimary ? 'relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] text-[#0A1628]' : 'relative overflow-hidden border-2 border-[#D4AF37] text-[#D4AF37] hover:text-white';
  return <button className={`relative inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 ${baseClasses} ${className}`} {...props}>
      {isPrimary && <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{
      animation: 'shimmer 2s infinite'
    }} />}
      <span className="relative z-10">{children}</span>
    </button>;
};

// 卡片悬停效果组件
export const HoverCard = ({
  children,
  className = ''
}) => {
  return <div className={`group relative transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${className}`}>
      {children}
    </div>;
};

// 数字滚动增长动画
export const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = ''
}) => {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const animationRef = useRef(null);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (!isMounted || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (isMounted && entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let startTimestamp = null;
        const step = timestamp => {
          if (!isMounted) return;
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentCount = Math.floor(progress * end);
          setCount(currentCount);
          if (progress < 1) {
            animationRef.current = window.requestAnimationFrame(step);
          }
        };
        animationRef.current = window.requestAnimationFrame(step);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.5
    });
    observer.observe(ref.current);
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, isMounted]);
  return <span ref={ref}>
      {prefix}{count}{suffix}
    </span>;
};

// 波纹效果组件
export const Ripple = ({
  children,
  className = ''
}) => {
  const [ripples, setRipples] = useState([]);
  const handleClick = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height);
    const newRipple = {
      id: Date.now(),
      x,
      y,
      size
    };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };
  return <div className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {children}
      {ripples.map(ripple => <span key={ripple.id} className="absolute rounded-full" style={{
      left: ripple.x - ripple.size / 2,
      top: ripple.y - ripple.size / 2,
      width: ripple.size,
      height: ripple.size,
      backgroundColor: 'rgba(212, 175, 55, 0.3)',
      animation: 'ripple 0.6s ease-out'
    }} />)}
    </div>;
};

// 添加CSS动画
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('enhanced-animations-style');
  if (!existingStyle) {
    const style = document.createElement('style');
    style.id = 'enhanced-animations-style';
    style.textContent = `
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes ripple {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(4); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}
export default {
  SlideIn,
  PulseButton,
  HoverCard,
  AnimatedCounter,
  Ripple
};