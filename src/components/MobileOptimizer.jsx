// @ts-ignore;
import React, { useState, useEffect, createContext, useContext } from 'react';

// 设备类型检测
const DeviceType = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop'
};

// 移动端优化Context
const MobileContext = createContext(null);

// Hook: 使用移动端优化
export function useMobile() {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error('useMobile must be used within MobileProvider');
  }
  return context;
}

// 移动端优化Provider
export function MobileProvider({
  children
}) {
  const [deviceType, setDeviceType] = useState(DeviceType.DESKTOP);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [orientation, setOrientation] = useState('portrait');
  const [isTouch, setIsTouch] = useState(false);
  const [safeArea, setSafeArea] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  });

  // 检测设备类型
  const detectDeviceType = width => {
    if (width < 768) return DeviceType.MOBILE;
    if (width < 1024) return DeviceType.TABLET;
    return DeviceType.DESKTOP;
  };

  // 检测触摸设备
  const detectTouch = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  };

  // 检测方向
  const detectOrientation = () => {
    return window.innerWidth < window.innerHeight ? 'portrait' : 'landscape';
  };

  // 检测安全区域（iOS）
  const detectSafeArea = () => {
    const safeAreaInsets = getComputedStyle(document.documentElement);
    return {
      top: parseInt(safeAreaInsets.getPropertyValue('--sat') || '0') || 0,
      bottom: parseInt(safeAreaInsets.getPropertyValue('--sab') || '0') || 0,
      left: parseInt(safeAreaInsets.getPropertyValue('--sal') || '0') || 0,
      right: parseInt(safeAreaInsets.getPropertyValue('--sar') || '0') || 0
    };
  };

  // 更新设备状态
  const updateDeviceState = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setScreenWidth(width);
    setScreenHeight(height);
    const type = detectDeviceType(width);
    setDeviceType(type);
    setIsMobile(type === DeviceType.MOBILE);
    setIsTablet(type === DeviceType.TABLET);
    setIsDesktop(type === DeviceType.DESKTOP);
    setOrientation(detectOrientation());
    setSafeArea(detectSafeArea());
  };

  // 初始化
  useEffect(() => {
    setIsTouch(detectTouch());
    updateDeviceState();

    // 监听窗口大小变化
    const handleResize = () => {
      updateDeviceState();
    };

    // 监听方向变化
    const handleOrientationChange = () => {
      setOrientation(detectOrientation());
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  // 移动端友好的点击事件
  const mobileClick = (onClick, options = {}) => {
    return e => {
      // 防止300ms延迟
      e.preventDefault();

      // 添加触觉反馈（如果支持）
      if (navigator.vibrate && options.vibrate) {
        navigator.vibrate(options.vibrateDuration || 10);
      }

      // 执行点击
      if (onClick) {
        onClick(e);
      }
    };
  };
  const value = {
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
    screenHeight,
    orientation,
    isTouch,
    safeArea,
    mobileClick,
    isPortrait: orientation === 'portrait',
    isLandscape: orientation === 'landscape'
  };
  return <MobileContext.Provider value={value}>
      {children}
    </MobileContext.Provider>;
}

// 响应式布局组件
export function ResponsiveGrid({
  children,
  mobileCols = 1,
  tabletCols = 2,
  desktopCols = 3,
  gap = '4',
  className = ''
}) {
  const {
    isMobile,
    isTablet
  } = useMobile();
  const cols = isMobile ? mobileCols : isTablet ? tabletCols : desktopCols;
  return <div className={`grid grid-cols-${cols} gap-${gap} ${className}`}>
      {children}
    </div>;
}

// 移动端优化按钮
export function MobileButton({
  children,
  onClick,
  vibrate = true,
  className = '',
  ...props
}) {
  const {
    mobileClick,
    isTouch
  } = useMobile();
  const handleClick = mobileClick(onClick, {
    vibrate: vibrate && isTouch
  });
  return <button onClick={handleClick} className={`min-h-[44px] min-w-[44px] ${className}`} {...props}>
      {children}
    </button>;
}

// 移动端优化输入框
export function MobileInput({
  className = '',
  ...props
}) {
  return <input className={`min-h-[44px] text-base ${className}`} inputMode="text" autoComplete="on" {...props} />;
}

// 移动端优化卡片
export function MobileCard({
  children,
  className = ''
}) {
  const {
    isMobile
  } = useMobile();
  return <div className={`
      ${isMobile ? 'p-4 rounded-xl' : 'p-6 rounded-2xl'}
      ${className}
    `}>
      {children}
    </div>;
}

// 移动端导航栏
export function MobileNavBar({
  children,
  className = ''
}) {
  const {
    safeArea,
    isMobile
  } = useMobile();
  if (!isMobile) return <>{children}</>;
  return <nav className={`fixed bottom-0 left-0 right-0 z-40 ${className}`} style={{
    paddingBottom: `${safeArea.bottom}px`
  }}>
      {children}
    </nav>;
}

// 移动端头部
export function MobileHeader({
  children,
  className = ''
}) {
  const {
    safeArea,
    isMobile
  } = useMobile();
  if (!isMobile) return <>{children}</>;
  return <header className={`sticky top-0 z-40 ${className}`} style={{
    paddingTop: `${safeArea.top}px`
  }}>
      {children}
    </header>;
}

// 设备类型条件渲染
export function DeviceSpecific({
  device,
  children
}) {
  const {
    isMobile,
    isTablet,
    isDesktop
  } = useMobile();
  const shouldRender = {
    [DeviceType.MOBILE]: isMobile,
    [DeviceType.TABLET]: isTablet,
    [DeviceType.DESKTOP]: isDesktop
  }[device];
  return shouldRender ? <>{children}</> : null;
}

// 移动端优化容器
export function MobileOptimizedContainer({
  children,
  className = ''
}) {
  const {
    isMobile,
    safeArea
  } = useMobile();
  return <div className={`
        ${isMobile ? 'px-4 py-4' : 'px-8 py-8'}
        ${className}
      `} style={{
    paddingTop: isMobile ? `${safeArea.top + 16}px` : undefined,
    paddingBottom: isMobile ? `${safeArea.bottom + 16}px` : undefined
  }}>
      {children}
    </div>;
}

// 移动端滚动优化
export function MobileScrollView({
  children,
  className = ''
}) {
  return <div className={`
        overflow-y-auto
        -webkit-overflow-scrolling: touch
        scroll-behavior: smooth
        ${className}
      `}>
      {children}
    </div>;
}

// 移动端触摸优化
export function TouchOptimized({
  children,
  className = ''
}) {
  return <div className={`
        touch-manipulation
        select-none
        ${className}
      `}>
      {children}
    </div>;
}