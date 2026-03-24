// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Shield, Users, Lock, AlertTriangle, ArrowRight, CheckCircle, Star } from 'lucide-react';
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
export default function Home(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const navigateTo = pageId => {
    $w.utils.navigateTo({
      pageId,
      params: {}
    });
  };
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    // Smooth scroll for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return <div className="min-h-screen bg-[#0A1628] font-sans">
      <Navbar currentPage="home" onNavigate={navigateTo} />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628]/90 to-[#2D3748]/80">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920')] bg-cover bg-center opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-2 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-medium text-sm sm:text-base">专业安保 · 值得信赖</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-4 sm:mb-6 leading-tight px-4">
              守护您的
              <span className="text-[#D4AF37] block mt-2">安全与未来</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              20年专业安保经验，为企业和个人提供全方位的安全解决方案，
              让安全成为您最坚实的后盾
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Button onClick={() => navigateTo('contact')} className="w-full sm:w-auto bg-[#D4AF37] text-[#0A1628] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#C0C0C0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl touch-manipulation">
                立即咨询
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button onClick={() => navigateTo('services')} variant="outline" className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-[#0A1628] transition-all duration-300 touch-manipulation">
                了解服务
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#2D3748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[{
            number: '20+',
            label: '年行业经验'
          }, {
            number: '500+',
            label: '服务客户'
          }, {
            number: '1000+',
            label: '安保人员'
          }, {
            number: '99%',
            label: '客户满意度'
          }].map((stat, index) => <div key={index} className="text-center group p-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4AF37] font-serif mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm sm:text-base lg:text-lg">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">
              核心服务
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              提供全方位的安保解决方案，满足不同场景的安全需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[{
            icon: Shield,
            title: '企业安保',
            description: '为企业提供专业的安保服务，包括门卫管理、巡逻防控、应急处理等',
            color: 'from-blue-500 to-blue-600'
          }, {
            icon: Users,
            title: '活动安保',
            description: '为各类大型活动提供专业的安保策划和执行，确保活动安全有序进行',
            color: 'from-purple-500 to-purple-600'
          }, {
            icon: Lock,
            title: '技术安防',
            description: '提供先进的安防技术解决方案，包括监控系统、门禁系统、报警系统',
            color: 'from-emerald-500 to-emerald-600'
          }].map((service, index) => <div key={index} className="group bg-gradient-to-br from-[#2D3748] to-[#1a202c] p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#2D3748] hover:border-[#D4AF37]/50 touch-manipulation">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-serif">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {service.description}
                </p>
                <button onClick={() => navigateTo('services')} className="text-[#D4AF37] font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300 touch-manipulation text-sm sm:text-base">
                  了解更多 <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#2D3748] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4 sm:mb-6">
                为什么选择我们
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                我们致力于为客户提供最专业、最可靠的安保服务，用实力和信誉赢得您的信任
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {[{
                icon: CheckCircle,
                title: '专业团队',
                desc: '所有安保人员均经过严格培训和认证'
              }, {
                icon: CheckCircle,
                title: '先进技术',
                desc: '采用最新的安防技术和设备'
              }, {
                icon: CheckCircle,
                title: '快速响应',
                desc: '24小时应急响应，随时待命'
              }, {
                icon: CheckCircle,
                title: '定制方案',
                desc: '根据客户需求提供个性化解决方案'
              }].map((item, index) => <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base sm:text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-[#0A1628] rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#2D3748]">
                <ImageWithLoader src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600" alt="Professional Security Team" className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-2xl mb-4 sm:mb-6" />
                <div className="flex items-center justify-around sm:justify-between">
                  <div className="text-center sm:text-left">
                    <div className="text-[#D4AF37] font-bold text-xl sm:text-2xl font-serif">20+</div>
                    <div className="text-gray-400 text-xs sm:text-sm">年专业经验</div>
                  </div>
                  <div className="h-8 sm:h-12 w-px bg-[#2D3748]" />
                  <div className="text-center sm:text-left">
                    <div className="text-[#D4AF37] font-bold text-xl sm:text-2xl font-serif">1000+</div>
                    <div className="text-gray-400 text-xs sm:text-sm">专业安保人员</div>
                  </div>
                  <div className="h-8 sm:h-12 w-px bg-[#2D3748]" />
                  <div className="text-center sm:text-left">
                    <div className="text-[#D4AF37] font-bold text-xl sm:text-2xl font-serif">99%</div>
                    <div className="text-gray-400 text-xs sm:text-sm">客户满意度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">
              客户评价
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              听听我们的客户怎么说
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[{
            name: '张总',
            company: '某大型企业集团',
            content: 'SecureGuard 为我们提供了全方位的安保服务，专业、可靠、高效，让我们非常放心。',
            rating: 5
          }, {
            name: '李经理',
            company: '知名会展中心',
            content: '多次大型活动的安保合作，每次都圆满完成任务，团队专业素质极高。',
            rating: 5
          }, {
            name: '王女士',
            company: '高端住宅小区',
            content: '小区安保服务非常到位，居民安全感大大提升，服务态度也很好。',
            rating: 5
          }].map((testimonial, index) => <div key={index} className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] p-6 sm:p-8 rounded-2xl border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-current" />)}
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{testimonial.company}</div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] font-serif mb-4 sm:mb-6">
            准备好提升您的安全了吗？
          </h2>
          <p className="text-[#0A1628]/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            立即联系我们，获取专业的安保方案，让安全成为您最坚实的后盾
          </p>
          <Button onClick={() => navigateTo('contact')} className="bg-[#0A1628] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#2D3748] transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation">
            免费咨询
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>

      <Footer onNavigate={navigateTo} />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>;
}