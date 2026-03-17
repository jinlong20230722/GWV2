// @ts-ignore;
import React, { useState, useEffect, useMemo } from 'react';
// @ts-ignore;
import { Shield, Users, Lock, Brain, ArrowRight, Menu, X, Phone, Mail, MapPin, CheckCircle, Star, ChevronLeft, ChevronRight, Award, Pause, Play, FileText, Calendar, Home as HomeIcon, Briefcase, MessageSquare, FolderOpen, User } from 'lucide-react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';

import { FadeIn, CountUp, GradientText, HoverScale } from '@/components/AnimationProvider.jsx';
import { LazyImage } from '@/components/ImageOptimizer.jsx';
import { SEOOptimizer, StructuredData } from '@/components/SEOOptimizer.jsx';
import { AccessibilityWrapper } from '@/components/AccessibilityWrapper.jsx';
import { PageMeta } from '@/components/PageMeta.jsx';
import { useAnalytics, AnalyticsDashboard } from '@/components/WebsiteAnalytics.jsx';
import { MobileProvider, MobileOptimizedContainer } from '@/components/MobileOptimizer.jsx';
import { PageWrapper } from '@/components/GlobalAppOptimizer.jsx';
import { EnhancedStats, EnhancedCTAButtons, EnhancedCredentials, EnhancedCaseCard } from '@/components/HomeEnhancer.jsx';
import OnlineChat from '@/components/OnlineChat.jsx';
import MobileTabBar from '@/components/MobileTabBar.jsx';
import { useWebsiteData } from '@/hooks/useWebsiteData.js';

// 图标映射
const iconMap = {
  Shield,
  Users,
  Lock,
  Brain,
  CheckCircle,
  Star,
  Award
};
export default function HomeDataIntegrated(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // 使用数据Hook
  const {
    loading,
    error,
    data,
    loadAllData,
    mapDefenseService,
    mapSuccessCase,
    safeText,
    safeURL
  } = useWebsiteData(props);

  // 导航函数
  const navigateTo = pageId => {
    if (props?.$w?.utils?.navigateTo) {
      props.$w.utils.navigateTo({
        pageId,
        params: {}
      });
    }
  };

  // 加载数据
  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 使用模拟数据作为后备
  const mockDefenses = useMemo(() => [{
    id: 'mock-1',
    title: '人防',
    subtitle: '以人为本 专业守护',
    description: '专业安保团队，严格培训体系，24小时全天候守护',
    iconName: 'Users',
    color: 'from-blue-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
    features: ['专业保安团队', '严格培训体系', '应急处理流程', '成功案例丰富']
  }, {
    id: 'mock-2',
    title: '技防',
    subtitle: '科技赋能 精准防控',
    description: '先进安防技术设备，系统集成能力，定制化解决方案',
    iconName: 'Lock',
    color: 'from-emerald-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920',
    features: ['高清监控系统', '智能门禁系统', '入侵报警系统', '远程监控服务']
  }, {
    id: 'mock-3',
    title: '物防',
    subtitle: '坚固可靠 实体防护',
    description: '优质防护设施，精湛工艺材质，多级防护等级',
    iconName: 'Shield',
    color: 'from-orange-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1584473759923-6c8a7f7f9f2c?w=1920',
    features: ['高强度围栏', '防爆器材', '安检设备', '防护等级认证']
  }, {
    id: 'mock-4',
    title: '智防',
    subtitle: '智能预警 智慧管理',
    description: 'AI智能分析，物联网安防，大数据预警平台',
    iconName: 'Brain',
    color: 'from-purple-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920',
    features: ['AI智能监控', '物联网安防', '大数据预警', '智慧园区管理']
  }], []);
  const mockStats = useMemo(() => [{
    number: '20+',
    label: '年行业经验',
    note: '截至2025年12月'
  }, {
    number: '500+',
    label: '服务客户',
    note: '截至2025年12月'
  }, {
    number: '1000+',
    label: '安保人员',
    note: '截至2025年12月'
  }, {
    number: '99%',
    label: '客户满意度',
    note: '截至2025年12月'
  }], []);

  // 获取图标组件
  const getIconComponent = iconName => {
    return iconMap[iconName] || Shield;
  };

  // 处理真实数据，降级到模拟数据
  const defenses = useMemo(() => {
    if (data.defenseServices && data.defenseServices.length > 0) {
      return data.defenseServices.map(mapDefenseService);
    }
    return mockDefenses;
  }, [data.defenseServices, mapDefenseService, mockDefenses]);
  const stats = useMemo(() => {
    if (data.companyInfo) {
      return [{
        number: safeText(data.companyInfo.stats_years_experience) || '20+',
        label: '年行业经验',
        note: safeText(data.companyInfo.stats_time_note) || '截至2025年12月'
      }, {
        number: safeText(data.companyInfo.stats_clients) || '500+',
        label: '服务客户',
        note: safeText(data.companyInfo.stats_time_note) || '截至2025年12月'
      }, {
        number: safeText(data.companyInfo.stats_employees) || '1000+',
        label: '安保人员',
        note: safeText(data.companyInfo.stats_time_note) || '截至2025年12月'
      }, {
        number: safeText(data.companyInfo.stats_satisfaction) || '99%',
        label: '客户满意度',
        note: safeText(data.companyInfo.stats_time_note) || '截至2025年12月'
      }];
    }
    return mockStats;
  }, [data.companyInfo, safeText, mockStats]);
  const cases = useMemo(() => {
    if (data.successCases && data.successCases.length > 0) {
      return data.successCases.slice(0, 3).map(mapSuccessCase);
    }
    return []; // 空数组，防止页面报错
  }, [data.successCases, mapSuccessCase]);

  // 轮播图逻辑
  useEffect(() => {
    if (isCarouselPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % defenses.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isCarouselPaused, defenses.length]);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % defenses.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + defenses.length) % defenses.length);
  };

  // 错误处理
  if (error) {
    return <div className="min-h-screen bg-[#0A1628] flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl text-white mb-4">数据加载失败</h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <Button onClick={loadAllData} className="bg-[#D4AF37] text-[#0A1628]">
            重新加载
          </Button>
        </div>
      </div>;
  }
  return <PageWrapper>
      <MobileProvider>
        <SEOOptimizer title="SecureGuard - 专业安保服务 | 人防技防物防智防四位一体" description="SecureGuard提供专业、可靠的安保服务，包括人防、技防、物防、智防四位一体的全方位安全防护方案" keywords="安保服务,安防系统,保安公司,智能安防,安全防护" />
        
        <StructuredData type="Organization" data={{
        name: "SecureGuard 安保服务有限公司",
        url: "https://www.secureguard.com",
        logo: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400",
        contactPoint: {
          telephone: "+86-400-888-8888",
          contactType: "customer service"
        }
      }} />

        <div className="min-h-screen bg-[#0A1628] text-white">
          {/* Navigation */}
          <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A1628]/95 backdrop-blur-sm border-b border-[#2D3748]' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
                  <Shield className="w-10 h-10 text-[#D4AF37] mr-3" />
                  <div>
                    <h1 className="text-2xl font-bold text-[#D4AF37] font-serif">SecureGuard</h1>
                    <p className="text-xs text-gray-400 hidden sm:block">专业安保服务</p>
                  </div>
                </div>
                
                <nav className="hidden md:flex items-center space-x-8">
                  {['home', 'services', 'cases', 'about'].map(item => <button key={item} onClick={() => navigateTo(item)} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 font-medium">
                      {item === 'home' && '首页'}
                      {item === 'services' && '服务'}
                      {item === 'cases' && '案例'}
                      {item === 'about' && '关于'}
                    </button>)}
                  <Button onClick={() => navigateTo('about')} className="bg-[#D4AF37] text-[#0A1628] px-6 py-2 rounded-full font-semibold hover:bg-[#C0C0C0] transition-all duration-200 transform hover:scale-105">
                    免费咨询
                  </Button>
                </nav>

                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
              </div>
            </div>
          </header>

          {/* Mobile Menu */}
          {isMenuOpen && <div className="fixed inset-0 z-40 bg-[#0A1628] pt-24">
              <div className="p-8 space-y-6">
                {['home', 'services', 'cases', 'about'].map(item => <button key={item} onClick={() => {
              navigateTo(item);
              setIsMenuOpen(false);
            }} className="block w-full text-left text-2xl text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">
                    {item === 'home' && '首页'}
                    {item === 'services' && '服务'}
                    {item === 'cases' && '案例'}
                    {item === 'about' && '关于'}
                  </button>)}
              </div>
            </div>}

          <main className="pt-20">
            {/* Hero Section with Carousel */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
              <div className="absolute inset-0">
                {defenses.map((defense, index) => {
                const IconComponent = getIconComponent(defense.iconName);
                return <div key={defense.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1A2A3A] to-[#0A1628]">
                        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{
                      backgroundImage: `url(${safeURL(defense.image)})`
                    }} />
                      </div>
                    </div>;
              })}
              </div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <FadeIn>
                    <div className="text-center lg:text-left">
                      <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/20 px-4 py-2 rounded-full mb-6">
                        <Shield className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-[#D4AF37] font-medium">专业安保服务</span>
                      </div>
                      
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
                        <GradientText>
                          {defenses[currentSlide]?.title || '四防一体'} 安全无忧
                        </GradientText>
                      </h1>
                      
                      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                        {defenses[currentSlide]?.subtitle || '人防、技防、物防、智防四位一体，全方位安全防护解决方案'}
                      </p>
                      
                      <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                        {defenses[currentSlide]?.description || '专业安保团队，先进安防技术，为您的安全保驾护航'}
                      </p>
                      
                      <EnhancedCTAButtons navigateTo={navigateTo} />
                    </div>
                  </FadeIn>

                  <FadeIn delay={200}>
                    <div className="relative">
                      <div className={`w-full h-[500px] rounded-3xl overflow-hidden relative`}>
                        {defenses.map((defense, index) => {
                        const IconComponent = getIconComponent(defense.iconName);
                        return <div key={defense.id} className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                              <div className={`bg-gradient-to-br ${defense.color} p-12 rounded-3xl relative`}>
                                <IconComponent className="w-32 h-32 text-white" />
                                <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-[#0A1628] px-6 py-3 rounded-2xl font-bold text-lg">
                                  {safeText(defense.title)}
                                </div>
                              </div>
                            </div>;
                      })}
                      </div>
                      
                      {/* Carousel Controls */}
                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center space-x-4">
                          <button onClick={prevSlide} onMouseEnter={() => setIsCarouselPaused(true)} onMouseLeave={() => setIsCarouselPaused(false)} className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200">
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button onClick={nextSlide} onMouseEnter={() => setIsCarouselPaused(true)} onMouseLeave={() => setIsCarouselPaused(false)} className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200">
                            <ChevronRight className="w-6 h-6" />
                          </button>
                          <button onClick={() => setIsCarouselPaused(!isCarouselPaused)} className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200">
                            {isCarouselPaused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
                          </button>
                        </div>
                        <div className="flex space-x-2">
                          {defenses.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-[#D4AF37] w-8' : 'bg-white/30'}`} />)}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>

            {/* 加载状态提示 */}
            {loading && <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-[#0A1628] px-6 py-3 rounded-full z-50">
                数据加载中...
              </div>}

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-br from-[#1A2A3A] to-[#0A1628]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                      <GradientText>用数据说话</GradientText>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                      20年行业深耕，我们用实力证明专业
                    </p>
                  </div>
                </FadeIn>
                
                <EnhancedStats stats={stats} />
              </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-[#0A1628]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                      <GradientText>四大防线服务</GradientText>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                      人防、技防、物防、智防四位一体，全方位安全防护体系
                    </p>
                  </div>
                </FadeIn>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {defenses.map((defense, index) => {
                  const IconComponent = getIconComponent(defense.iconName);
                  return <FadeIn key={defense.id} delay={index * 100}>
                        <HoverScale>
                          <div className="group relative bg-gradient-to-br from-[#1A2A3A] to-[#0A1628] rounded-2xl p-8 border border-[#2D3748] hover:border-[#D4AF37] transition-all duration-300">
                            <div className={`w-16 h-16 bg-gradient-to-br ${defense.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-2 font-serif text-[#D4AF37]">
                              {safeText(defense.title)}
                            </h3>
                            <p className="text-gray-400 mb-4">{safeText(defense.subtitle)}</p>
                            <p className="text-gray-300 text-sm mb-6">{safeText(defense.description)}</p>
                            
                            <ul className="space-y-2">
                              {defense.features?.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-[#D4AF37] mr-2 flex-shrink-0" />
                                  {safeText(feature)}
                                </li>)}
                            </ul>
                            
                            <button onClick={() => navigateTo('services')} className="mt-6 text-[#D4AF37] font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-200">
                              了解更多 <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                          </div>
                        </HoverScale>
                      </FadeIn>;
                })}
                </div>
              </div>
            </section>

            {/* Cases Section - 仅在有真实数据时显示 */}
            {cases.length > 0 && <section className="py-24 bg-gradient-to-br from-[#1A2A3A] to-[#0A1628]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <FadeIn>
                    <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                        <GradientText>成功案例</GradientText>
                      </h2>
                      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        我们用专业和实力，赢得客户的信赖与认可
                      </p>
                    </div>
                  </FadeIn>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((caseItem, index) => <FadeIn key={caseItem.id} delay={index * 100}>
                        <EnhancedCaseCard caseData={caseItem} onClick={() => navigateTo('cases')} />
                      </FadeIn>)}
                  </div>
                </div>
              </section>}

            {/* Credentials Section */}
            <section className="py-24 bg-[#0A1628]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                      <GradientText>资质认证</GradientText>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                      权威认证，实力保障，让您放心托付
                    </p>
                  </div>
                </FadeIn>
                
                <EnhancedCredentials navigateTo={navigateTo} />
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0]">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] font-serif mb-6">
                  准备好提升您的安全了吗？
                </h2>
                <p className="text-[#0A1628]/80 text-lg mb-8 max-w-2xl mx-auto">
                  立即联系我们，获取专业的四防一体化安保方案，让安全成为您最坚实的后盾
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button onClick={() => navigateTo('about')} className="bg-[#0A1628] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2D3748] transition-all duration-300 transform hover:scale-105 shadow-lg">
                    免费咨询
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button onClick={() => navigateTo('services')} className="border-2 border-[#0A1628] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0A1628] hover:text-white transition-all duration-300 transform hover:scale-105 bg-black text-white">
                    获取方案
                    <FileText className="ml-2 w-5 h-5" />
                  </Button>
                  <Button onClick={() => navigateTo('about')} className="border-2 border-[#0A1628]/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0A1628] hover:text-white transition-all duration-300 transform hover:scale-105 text-white">
                    预约考察
                    <Calendar className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0A1628] border-t border-[#2D3748] py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <Shield className="w-10 h-10 text-[#D4AF37] mr-3" />
                      <span className="text-2xl font-bold text-[#D4AF37] font-serif">SecureGuard</span>
                    </div>
                    <p className="text-gray-400 mb-6">
                      专业安保服务，守护生命财产安全
                    </p>
                    <div className="flex space-x-4">
                      {[Phone, Mail, MapPin].map((Icon, idx) => <div key={idx} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-200">
                          <Icon className="w-5 h-5" />
                        </div>)}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-6 text-white">快速链接</h3>
                    <ul className="space-y-3">
                      {['首页', '服务介绍', '成功案例', '关于我们'].map((item, idx) => <li key={idx}>
                          <button onClick={() => navigateTo(idx === 0 ? 'home' : idx === 1 ? 'services' : idx === 2 ? 'cases' : 'about')} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">
                            {item}
                          </button>
                        </li>)}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-6 text-white">服务项目</h3>
                    <ul className="space-y-3">
                      {['人防服务', '技防服务', '物防服务', '智防服务'].map((item, idx) => <li key={idx}>
                          <button onClick={() => navigateTo('services')} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">
                            {item}
                          </button>
                        </li>)}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-6 text-white">联系方式</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-400">
                        <Phone className="w-5 h-5 mr-3 text-[#D4AF37]" />
                        <span>{safeText(data.websiteConfig?.contact_phone) || '400-888-8888'}</span>
                      </li>
                      <li className="flex items-center text-gray-400">
                        <Mail className="w-5 h-5 mr-3 text-[#D4AF37]" />
                        <span>{safeText(data.websiteConfig?.contact_email) || 'info@secureguard.com'}</span>
                      </li>
                      <li className="flex items-start text-gray-400">
                        <MapPin className="w-5 h-5 mr-3 text-[#D4AF37] mt-1" />
                        <span>{safeText(data.websiteConfig?.contact_address) || '北京市朝阳区建国路88号'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-[#2D3748] mt-12 pt-8 text-center text-gray-400">
                  <p>{safeText(data.websiteConfig?.copyright) || '© 2025–2026 SecureGuard. All rights reserved.'}</p>
                </div>
              </div>
            </footer>
          </main>

          <OnlineChat />
          <MobileTabBar />
        </div>
      </MobileProvider>
    </PageWrapper>;
}