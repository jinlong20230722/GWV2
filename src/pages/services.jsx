// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Building2, Calendar, Home, Camera, Users, AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';

// @ts-ignore;
import Navbar from '@/components/Navbar';
// @ts-ignore;
import Footer from '@/components/Footer';
// @ts-ignore;
import ScrollToTop from '@/components/ScrollToTop';
// @ts-ignore;
import ImageWithLoader from '@/components/ImageWithLoader';
export default function Services(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [activeService, setActiveService] = useState(0);
  const navigateTo = pageId => {
    $w.utils.navigateTo({
      pageId,
      params: {}
    });
  };
  const services = [{
    id: 1,
    icon: Building2,
    title: '企业安保',
    description: '为企业提供全方位的安保服务，包括门卫管理、巡逻防控、应急处理等，确保企业安全运营。',
    features: ['专业门卫管理', '24小时巡逻防控', '应急事件处理', '安全风险评估', '定制化安保方案'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    color: 'from-blue-500 to-blue-600'
  }, {
    id: 2,
    icon: Calendar,
    title: '活动安保',
    description: '为各类大型活动提供专业的安保策划和执行，包括演唱会、体育赛事、展览展会等，确保活动安全有序进行。',
    features: ['活动安全策划', '人员流量控制', 'VIP人员保护', '应急响应预案', '现场安保执行'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    color: 'from-purple-500 to-purple-600'
  }, {
    id: 3,
    icon: Home,
    title: '住宅安保',
    description: '为高端住宅小区、别墅区提供专业的安保服务，包括门禁管理、巡逻服务、访客管理等，营造安全的居住环境。',
    features: ['智能门禁系统', '24小时巡逻服务', '访客登记管理', '车辆出入管理', '紧急事件响应'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    color: 'from-emerald-500 to-emerald-600'
  }, {
    id: 4,
    icon: Camera,
    title: '技术安防',
    description: '提供先进的安防技术解决方案，包括视频监控系统、门禁系统、报警系统等，用科技手段提升安全防护水平。',
    features: ['视频监控系统', '智能门禁系统', '入侵报警系统', '安防系统集成', '远程监控服务'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    color: 'from-orange-500 to-orange-600'
  }, {
    id: 5,
    icon: Users,
    title: '人员护卫',
    description: '为重要人物提供专业的贴身护卫服务，包括商务人士、明星艺人、政府官员等，确保人身安全。',
    features: ['专业护卫团队', '行程安全规划', '风险评估分析', '应急保护措施', '保密服务承诺'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
    color: 'from-red-500 to-red-600'
  }, {
    id: 6,
    icon: AlertTriangle,
    title: '应急响应',
    description: '提供24小时应急响应服务，包括突发事件处理、紧急救援、危机管理等，快速响应各类安全事件。',
    features: ['24小时待命', '快速响应机制', '专业应急团队', '危机处理预案', '事后评估报告'],
    image: 'https://images.unsplash.com/photo-1584473759923-6c8a7f7f9f2c?w=800',
    color: 'from-cyan-500 to-cyan-600'
  }];
  const activeServiceData = services[activeService];
  const ActiveIcon = activeServiceData.icon;
  return <div className="min-h-screen bg-[#0A1628] font-sans">
      <Navbar currentPage="services" onNavigate={navigateTo} />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#2D3748]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4 sm:mb-6">
            我们的服务
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            为您提供全方位的专业安保解决方案，满足不同场景的安全需求
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return <button key={service.id} onClick={() => setActiveService(index)} className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 touch-manipulation ${activeService === index ? 'bg-gradient-to-br ' + service.color + ' text-white transform scale-105' : 'bg-[#2D3748] text-gray-300 hover:bg-[#3D4758]'}`}>
                  <ServiceIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2" />
                  <div className="text-xs sm:text-sm font-medium truncate">{service.title}</div>
                </button>;
          })}
          </div>

          {/* Service Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-3xl overflow-hidden">
            <div className="relative h-64 sm:h-72 lg:h-auto">
              <ImageWithLoader src={activeServiceData.image} alt={activeServiceData.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent lg:hidden" />
            </div>

            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${activeServiceData.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                <ActiveIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-3 sm:mb-4">
                {activeServiceData.title}
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {activeServiceData.description}
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {activeServiceData.features.map((feature, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </div>)}
              </div>

              <Button onClick={() => navigateTo('contact')} className="bg-[#D4AF37] text-[#0A1628] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#C0C0C0] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto touch-manipulation">
                咨询服务
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#2D3748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-serif mb-3 sm:mb-4">
              全部服务项目
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">选择适合您需求的专业安保服务</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map(service => {
            const ServiceIcon = service.icon;
            return <div key={service.id} className="bg-[#0A1628] p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-300 touch-manipulation">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4`}>
                    <ServiceIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <button onClick={() => {
                setActiveService(service.id - 1);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }} className="text-[#D4AF37] text-sm sm:text-base font-medium hover:underline touch-manipulation">
                    了解详情 →
                  </button>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] font-serif mb-4 sm:mb-6">
            需要定制化安保方案？
          </h2>
          <p className="text-[#0A1628]/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            我们的专业团队将为您量身定制最合适的安保解决方案
          </p>
          <Button onClick={() => navigateTo('contact')} className="bg-[#0A1628] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#2D3748] transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation">
            立即咨询
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>

      <Footer onNavigate={navigateTo} />
    </div>;
}