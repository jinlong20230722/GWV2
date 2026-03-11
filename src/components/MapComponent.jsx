// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { MapPin, ExternalLink } from 'lucide-react';

export default function MapComponent({
  address = "北京市朝阳区建国路88号",
  height = "h-64"
}) {
  const encodedAddress = encodeURIComponent(address);
  const amapUrl = `https://lbs.amap.com/search?query=${encodedAddress}`;
  const qqmapUrl = `https://map.qq.com/?q=${encodedAddress}`;
  return <div className={`${height} w-full relative rounded-2xl overflow-hidden bg-[#2D3748]`}>
      {/* 静态地图背景 */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200")'
    }} />
      
      {/* 地图内容 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1628]/90 via-[#2D3748]/80 to-[#0A1628]/90">
        <div className="text-center">
          {/* 地图图标 */}
          <div className="relative animate-bounce">
            <MapPin className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-[#D4AF37]/30 rounded-full blur-sm" />
          </div>
          
          {/* 地址信息 */}
          <div className="mb-6">
            <h3 className="text-white text-lg font-semibold mb-2">SecureGuard 安保服务中心</h3>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">{address}</p>
          </div>
          
          {/* 地图链接按钮 */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={amapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] text-[#0A1628] rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              <ExternalLink className="w-4 h-4" />
              <span>高德地图</span>
            </a>
            <a href={qqmapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-[#2D3748] text-white border border-[#2D3748] hover:border-[#D4AF37] rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <ExternalLink className="w-4 h-4" />
              <span>腾讯地图</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* 装饰性网格 */}
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)',
      backgroundSize: '50px 50px'
    }} />
    </div>;
}