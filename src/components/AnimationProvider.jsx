// @ts-ignore;
import React, { useEffect, useRef, useState } from 'react';

// 页面滚动动画组件
export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up"
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  const getDirectionStyles = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8';
      case 'down':
        return '-translate-y-8';
      case 'left':
        return 'translate-x-8';
      case 'right':
        return '-translate-x-8';
      default:
        return 'translate-y-8';
    }
  };
  return <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? `opacity-100 translate-y-0 translate-x-0` : `opacity-0 ${getDirectionStyles()}`} ${className}`} style={{
    transitionDelay: `${delay}ms`
  }}>
      {children}
    </div>;
}

// 悬停缩放组件
export function HoverScale({
  children,
  scale = 1.05,
  className = ""
}) {
  return <div className={`transform transition-transform duration-300 hover:scale-${scale * 100} ${className}`}>
      {children}
    </div>;
}

// 脉冲动画组件
export function Pulse({
  children,
  className = ""
}) {
  return <div className={`animate-pulse ${className}`}>
      {children}
    </div>;
}

// 浮动动画组件
export function Float({
  children,
  className = "",
  duration = 3
}) {
  return <div className={`${className}`} style={{
    animation: `float ${duration}s ease-in-out infinite`
  }}>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
      {children}
    </div>;
}

// 数字滚动动画组件
export function CountUp({
  end,
  duration = 2000,
  suffix = "",
  prefix = ""
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let startTimestamp = null;
        const startValue = 0;
        const step = timestamp => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentCount = Math.floor(progress * (end - startValue) + startValue);
          setCount(currentCount);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.5
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration]);
  return <span ref={ref}>
      {prefix}{count}{suffix}
    </span>;
}

// 骨架屏加载组件
export function Skeleton({
  className = "",
  variant = "text"
}) {
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700";
  const variants = {
    text: "h-4 rounded",
    title: "h-6 rounded w-3/4",
    avatar: "h-12 w-12 rounded-full",
    image: "h-48 rounded-lg",
    card: "h-64 rounded-2xl"
  };
  return <div className={`${baseClasses} ${variants[variant] || variants.text} ${className}`} />;
}

// 渐变文字组件
export function GradientText({
  children,
  className = "",
  colors = "from-[#D4AF37] to-[#C0C0C0]"
}) {
  return <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors} ${className}`}>
      {children}
    </span>;
}

// 粒子背景组件
export function ParticleBackground({
  className = ""
}) {
  return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({
      length: 20
    }).map((_, i) => <div key={i} className="absolute w-1 h-1 bg-[#D4AF37]/30 rounded-full" style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 2}s`
    }} />)}
    </div>;
}