// @ts-ignore;
import React, { useState, useMemo } from 'react';
// @ts-ignore;
import { Shield, Users, Calendar, Camera, Lock, ShieldCheck, Brain, Briefcase, CheckCircle, Star, ArrowRight } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

const iconMap = {
  Shield,
  Users,
  Calendar,
  Camera,
  Lock,
  ShieldCheck,
  Brain,
  Briefcase
};
const priceData = [{
  _id: "1",
  service_type: "人防",
  service_name: "基础安保服务",
  price_range: "¥3,000 - ¥8,000",
  unit: "月",
  description: "适合小型企业和商铺的基础安保服务，包括门卫、巡逻等常规安保任务。",
  features: ["8-12小时工作制", "基础培训认证", "日常巡逻服务", "紧急情况响应"],
  icon_name: "Shield",
  is_popular: false,
  order: 1,
  is_active: true
}, {
  _id: "2",
  service_type: "人防",
  service_name: "企业安保服务",
  price_range: "¥8,000 - ¥20,000",
  unit: "月",
  description: "为中大型企业提供的专业安保服务，包含全方位安全保障方案。",
  features: ["24小时全天候服务", "专业安保团队", "应急预案制定", "定期安全评估", "VIP护卫可选"],
  icon_name: "Users",
  is_popular: true,
  order: 2,
  is_active: true
}, {
  _id: "3",
  service_type: "人防",
  service_name: "活动安保服务",
  price_range: "¥5,000 - ¥50,000",
  unit: "次",
  description: "为各类活动、演唱会、展览等提供专业的临时安保服务。",
  features: ["现场人流管控", "VIP通道护卫", "紧急情况处理", "活动前安全评估", "灵活人员配置"],
  icon_name: "Calendar",
  is_popular: false,
  order: 3,
  is_active: true
}, {
  _id: "4",
  service_type: "技防",
  service_name: "监控系统安装",
  price_range: "¥10,000 - ¥50,000",
  unit: "套",
  description: "专业的安防监控系统设计、安装和调试服务。",
  features: ["高清摄像头配置", "远程监控功能", "录像存储系统", "移动监控APP", "一年免费维护"],
  icon_name: "Camera",
  is_popular: true,
  order: 4,
  is_active: true
}, {
  _id: "5",
  service_type: "技防",
  service_name: "智能门禁系统",
  price_range: "¥5,000 - ¥30,000",
  unit: "套",
  description: "现代化的门禁控制系统，支持多种认证方式。",
  features: ["人脸识别", "IC卡认证", "指纹识别", "远程开门", "考勤记录"],
  icon_name: "Lock",
  is_popular: false,
  order: 5,
  is_active: true
}, {
  _id: "6",
  service_type: "物防",
  service_name: "周界防护系统",
  price_range: "¥20,000 - ¥100,000",
  unit: "项目",
  description: "为园区、工厂等提供完整的周界防护解决方案。",
  features: ["高强度围栏", "入侵检测系统", "照明系统", "报警联动", "定期巡检服务"],
  icon_name: "ShieldCheck",
  is_popular: false,
  order: 6,
  is_active: true
}, {
  _id: "7",
  service_type: "智防",
  service_name: "智慧安防平台",
  price_range: "¥30,000 - ¥200,000",
  unit: "年",
  description: "AI驱动的智能安防管理平台，实现全方位智能监控。",
  features: ["AI智能分析", "异常行为检测", "大数据预警", "可视化管理", "移动端APP"],
  icon_name: "Brain",
  is_popular: true,
  order: 7,
  is_active: true
}, {
  _id: "8",
  service_type: "综合",
  service_name: "定制化解决方案",
  price_range: "面议",
  unit: "项目",
  description: "根据客户具体需求量身定制的四防一体化安保解决方案。",
  features: ["需求调研评估", "专业方案设计", "多系统集成", "专属项目团队", "7x24小时支持"],
  icon_name: "Briefcase",
  is_popular: true,
  order: 8,
  is_active: true
}];
export default function ServicePricing({
  onNavigateToAbout
}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const serviceTypes = ['all', '人防', '技防', '物防', '智防', '综合'];
  const filteredPrices = useMemo(() => {
    if (activeFilter === 'all') {
      return priceData.filter(item => item.is_active).sort((a, b) => a.order - b.order);
    }
    return priceData.filter(item => item.is_active && item.service_type === activeFilter).sort((a, b) => a.order - b.order);
  }, [activeFilter]);
  return <section className="py-24 bg-gradient-to-br from-[#0A1628] to-[#1a202c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-6">
            <Briefcase className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold text-lg">透明定价</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            服务价格
            <span className="text-[#D4AF37] block mt-2">专业安保 物有所值</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            我们提供灵活的定价方案，根据您的具体需求提供最具性价比的安保服务
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceTypes.map(type => <button key={type} onClick={() => setActiveFilter(type)} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === type ? 'bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] text-[#0A1628]' : 'bg-[#2D3748] text-gray-300 hover:bg-[#2D3748]/80 border border-[#2D3748]'}`}>
              {type === 'all' ? '全部服务' : type}
            </button>)}
        </div>

        {/* Price Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrices.map(price => {
          const Icon = iconMap[price.icon_name] || Shield;
          return <div key={price._id} className={`relative bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${price.is_popular ? 'border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/10' : 'border-transparent hover:border-[#D4AF37]/50'}`}>
                {/* Popular Badge */}
                {price.is_popular && <div className="absolute top-0 right-0 bg-gradient-to-l from-[#D4AF37] to-[#C0C0C0] text-[#0A1628] px-6 py-2 rounded-bl-2xl">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold text-sm">热门推荐</span>
                    </div>
                  </div>}

                {/* Card Content */}
                <div className="p-8">
                  {/* Service Type Tag */}
                  <div className="inline-flex items-center space-x-1 bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <span>{price.service_type}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#0A1628]" />
                  </div>

                  {/* Service Name */}
                  <h3 className="text-2xl font-bold text-white font-serif mb-3">
                    {price.service_name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-[#D4AF37]">
                        {price.price_range}
                      </span>
                      <span className="text-gray-400">/{price.unit}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {price.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {price.features.map((feature, index) => <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>)}
                  </ul>

                  {/* CTA Button */}
                  <Button onClick={onNavigateToAbout} className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${price.is_popular ? 'bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] text-[#0A1628] hover:opacity-90' : 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628]'}`}>
                    获取详细报价
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}