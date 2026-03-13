// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { MapPin, Navigation, Smartphone, Globe } from 'lucide-react';

export default function MobileMapNavigator({
  address = "成都市青羊区人民中路二段68号中铁瑞城大厦16楼",
  name = "成都天顺保安服务有限公司",
  latitude = 30.6598,
  longitude = 104.0633,
  height = "h-80"
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // 检测是否为移动设备
    const checkMobile = () => {
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    };
    checkMobile();
  }, []);

  // 高德地图URL Scheme
  const getAmapUrl = (useWeb = false) => {
    if (useWeb) {
      return `https://uri.amap.com/navigation?to=${longitude},${latitude},${encodeURIComponent(name)}&mode=car&coordinate=gaode&callnative=1`;
    }
    return `androidamap://navi?sourceApplication=${encodeURIComponent(name)}&lat=${latitude}&lon=${longitude}&dev=0&style=2`;
  };

  // 腾讯地图URL Scheme
  const getQQMapUrl = (useWeb = false) => {
    if (useWeb) {
      return `https://map.qq.com/nav/drive?from=my&to=${latitude},${longitude}&referer=myapp`;
    }
    return `qqmap://map/routeplan?type=drive&to=${encodeURIComponent(name)}&tocoord=${latitude},${longitude}&referer=myapp`;
  };

  // 百度地图URL Scheme
  const getBaiduMapUrl = (useWeb = false) => {
    if (useWeb) {
      return `https://map.baidu.com/dir/,,,%7C%7C%7C${encodeURIComponent(name)}/@${latitude},${longitude},18z`;
    }
    return `baidumap://map/direction?destination=name:${encodeURIComponent(name)}|latlng:${latitude},${longitude}&mode=driving&coord_type=gcj02&src=myapp`;
  };
  const openMapApp = mapType => {
    let url = '';
    let webUrl = '';
    switch (mapType) {
      case 'amap':
        url = getAmapUrl(false);
        webUrl = getAmapUrl(true);
        break;
      case 'qqmap':
        url = getQQMapUrl(false);
        webUrl = getQQMapUrl(true);
        break;
      case 'baidu':
        url = getBaiduMapUrl(false);
        webUrl = getBaiduMapUrl(true);
        break;
    }
    if (isMobile) {
      // 尝试使用iframe尝试唤醒APP
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = url;
      document.body.appendChild(iframe);

      // 设置超时，如果APP没有唤醒则打开网页版
      const timeout = setTimeout(() => {
        window.location.href = webUrl;
      }, 2000);

      // 监听页面可见性变化
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(timeout);
          document.removeEventListener('visibilitychange', handleVisibilityChange);
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      // 清理
      setTimeout(() => {
        document.body.removeChild(iframe);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }, 3000);
    } else {
      // 桌面端直接打开网页版
      window.open(webUrl, '_blank');
    }
  };
  return <div className={`${height} w-full relative rounded-2xl overflow-hidden bg-[#2D3748]`}>
      {/* 静态地图背景 */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200")'
    }} />
      
      {/* 地图内容 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1628]/90 via-[#2D3748]/80 to-[#0A1628]/90">
        <div className="text-center px-4 md:px-6 max-h-full overflow-y-auto">
          {/* 地图图标 - 移动端缩小尺寸 */}
          <div className="relative animate-bounce">
            <MapPin className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37] mx-auto mb-3 md:mb-4" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-[#D4AF37]/30 rounded-full blur-sm" />
          </div>
          
          {/* 地址信息 */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-white text-base md:text-lg font-semibold mb-1 md:mb-2">{name}</h3>
            <p className="text-gray-400 text-xs md:text-sm max-w-xs mx-auto leading-relaxed">{address}</p>
          </div>
          
          {/* 直接显示地图选择选项 */}
          <div className="space-y-2 md:space-y-3">
            <div className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">
              {isMobile ? '选择您的导航应用' : '选择地图服务'}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
              <button onClick={() => openMapApp('amap')} className="flex flex-col items-center justify-center px-3 py-2 md:px-4 md:py-3 bg-[#2D3748] border border-[#2D3748] hover:border-[#D4AF37] rounded-xl transition-all duration-300 transform hover:scale-105">
                <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] mb-1 md:mb-2" />
                <span className="text-white text-xs md:text-sm font-medium">高德地图</span>
              </button>
              
              <button onClick={() => openMapApp('qqmap')} className="flex flex-col items-center justify-center px-3 py-2 md:px-4 md:py-3 bg-[#2D3748] border border-[#2D3748] hover:border-[#D4AF37] rounded-xl transition-all duration-300 transform hover:scale-105">
                <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] mb-1 md:mb-2" />
                <span className="text-white text-xs md:text-sm font-medium">腾讯地图</span>
              </button>
              
              <button onClick={() => openMapApp('baidu')} className="flex flex-col items-center justify-center px-3 py-2 md:px-4 md:py-3 bg-[#2D3748] border border-[#2D3748] hover:border-[#D4AF37] rounded-xl transition-all duration-300 transform hover:scale-105">
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] mb-1 md:mb-2" />
                <span className="text-white text-xs md:text-sm font-medium">百度地图</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 装饰性网格 */}
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)',
      backgroundSize: '20px 20px'
    }} />
    </div>;
}