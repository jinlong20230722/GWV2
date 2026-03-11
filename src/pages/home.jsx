// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Shield, Users, Lock, Brain, ArrowRight, Menu, X, Phone, Mail, MapPin, CheckCircle, Star, ChevronLeft, ChevronRight, Award, Pause, Play } from 'lucide-react';
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
import OnlineChat from '@/components/OnlineChat.jsx';
export default function Home(props) {
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
  const defenses = [{
    id: 0,
    title: '人防',
    subtitle: '以人为本 专业守护',
    description: '专业安保团队，严格培训体系，24小时全天候守护',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
    features: ['专业保安团队', '严格培训体系', '应急处理流程', '成功案例丰富']
  }, {
    id: 1,
    title: '技防',
    subtitle: '科技赋能 精准防控',
    description: '先进安防技术设备，系统集成能力，定制化解决方案',
    icon: Lock,
    color: 'from-emerald-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920',
    features: ['高清监控系统', '智能门禁系统', '入侵报警系统', '远程监控服务']
  }, {
    id: 2,
    title: '物防',
    subtitle: '坚固可靠 实体防护',
    description: '优质防护设施，精湛工艺材质，多级防护等级',
    icon: Shield,
    color: 'from-orange-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1584473759923-6c8a7f7f9f2c?w=1920',
    features: ['高强度围栏', '防爆器材', '安检设备', '防护等级认证']
  }, {
    id: 3,
    title: '智防',
    subtitle: '智能预警 智慧管理',
    description: 'AI智能分析，物联网安防，大数据预警平台',
    icon: Brain,
    color: 'from-purple-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920',
    features: ['AI智能监控', '物联网安防', '大数据预警', '智慧园区管理']
  }];
  const stats = [{
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
  }];
  const whyChooseUs = [{
    icon: CheckCircle,
    title: '四防一体',
    desc: '人防、技防、物防、智防四位一体，全方位安全防护'
  }, {
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
  }];
  const testimonials = [{
    name: '张总',
    position: '董事长',
    company: '某大型企业集团',
    content: 'SecureGuard 的四防一体化方案为我们提供了全方位的安全保障，专业、可靠、高效，让我们非常放心。',
    rating: 5
  }, {
    name: '李经理',
    position: '行政总监',
    company: '知名会展中心',
    content: '多次大型活动的安保合作，每次都圆满完成任务，团队专业素质极高，特别是智防系统的应用大大提升了安保效率。',
    rating: 5
  }, {
    name: '王女士',
    position: '业主委员会主任',
    company: '高端住宅小区',
    content: '小区安保服务非常到位，人防、技防、物防、智防四位一体，居民安全感大大提升，服务态度也很好。',
    rating: 5
  }];
  const honors = [{
    id: 1,
    type: '锦旗',
    title: '专业高效 保驾护航',
    description: '感谢安保团队在大型活动中的专业表现',
    client: '某知名企业',
    date: '2025-12',
    image: 'https://images.unsplash.com/photo-1555431189-0fabf2667795?w=400'
  }, {
    id: 2,
    type: '表扬信',
    title: '尽职尽责 温暖人心',
    description: '保安员帮助找回丢失贵重物品',
    client: '某住宅小区',
    date: '2025-11',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400'
  }, {
    id: 3,
    type: '锦旗',
    title: '技术精湛 服务一流',
    description: '安防系统安装调试及时高效',
    client: '某金融机构',
    date: '2025-10',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400'
  }, {
    id: 4,
    type: '感谢信',
    title: '风雨无阻 坚守岗位',
    description: '恶劣天气下依然保持高质量服务',
    client: '某商业综合体',
    date: '2025-09',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400'
  }, {
    id: 5,
    type: '锦旗',
    title: '智防先锋 创新引领',
    description: '智慧安防系统获得高度认可',
    client: '某科技园区',
    date: '2025-08',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400'
  }, {
    id: 6,
    type: '表扬信',
    title: '应急迅速 处置得当',
    description: '成功处理突发事件，保障人员安全',
    client: '某学校',
    date: '2025-07',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400'
  }, {
    id: 7,
    type: '锦旗',
    title: '物防坚固 安心无忧',
    description: '防护设施质量优异，防护效果显著',
    client: '某工业园区',
    date: '2025-06',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400'
  }, {
    id: 8,
    type: '感谢信',
    title: '人防到位 服务贴心',
    description: '安保人员专业素养高，服务意识强',
    client: '某医院',
    date: '2025-05',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    let interval;
    if (!isCarouselPaused) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % defenses.length);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCarouselPaused]);
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  const navigateTo = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
    setIsMenuOpen(false);
  };
  const goToSlide = index => {
    setCurrentSlide(index);
  };
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % defenses.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + defenses.length) % defenses.length);
  };
  const currentDefense = defenses[currentSlide];
  const CurrentIcon = currentDefense.icon;
  return <AccessibilityWrapper>
      <PageMeta pageId="home" />
      <SEOOptimizer>
        <StructuredData type="Organization" data={{
        name: "SecureGuard",
        description: "专业的四防一体化安全服务：人防、技防、物防、智防",
        url: "https://secureguard.com",
        logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
        telephone: "+86-400-888-8888",
        email: "contact@secureguard.com"
      }} />
      </SEOOptimizer>
      <div id="main-content" className="min-h-screen bg-[#0A1628] font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo('home')}>
              <Shield className="w-10 h-10 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white font-serif tracking-wider">
                SECURE<span className="text-[#D4AF37]">GUARD</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <button onClick={() => navigateTo('home')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium px-4">
                首页
              </button>
              <button onClick={() => navigateTo('services')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium px-4">
                四大防线
              </button>
              <button onClick={() => navigateTo('cases')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium px-4">
                成功案例
              </button>
              <button onClick={() => navigateTo('about')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium px-4">
                关于我们
              </button>
              <button onClick={() => navigateTo('contact')} className="bg-[#D4AF37] text-[#0A1628] px-6 py-2 rounded-full font-semibold hover:bg-[#C0C0C0] transition-all duration-300 transform hover:scale-105 ml-4">
                联系我们
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden bg-[#0A1628]/95 backdrop-blur-md border-t border-[#2D3748]">
            <div className="px-4 py-4">
              <button onClick={() => navigateTo('home')} className="block w-full text-left text-white hover:text-[#D4AF37] py-3 transition-colors">
                首页
              </button>
              <button onClick={() => navigateTo('services')} className="block w-full text-left text-white hover:text-[#D4AF37] py-3 transition-colors">
                四大防线
              </button>
              <button onClick={() => navigateTo('cases')} className="block w-full text-left text-white hover:text-[#D4AF37] py-3 transition-colors">
                成功案例
              </button>
              <button onClick={() => navigateTo('about')} className="block w-full text-left text-white hover:text-[#D4AF37] py-3 transition-colors">
                关于我们
              </button>
              <button onClick={() => navigateTo('contact')} className="w-full bg-[#D4AF37] text-[#0A1628] px-6 py-3 rounded-full font-semibold hover:bg-[#C0C0C0] transition-colors mt-2">
                联系我们
              </button>
            </div>
          </div>}
      </nav>

      {/* Hero Section - Four Defenses Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        {defenses.map((defense, index) => <div key={defense.id} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628]/90 to-[#2D3748]/80" />
            <div className={`absolute inset-0 bg-[url('${defense.image}')] bg-cover bg-center opacity-30`} />
          </div>)}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Slogan */}
            <div className="animate-fade-in-up mb-8">
              <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-8">
                <Shield className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-semibold text-lg">四防一体 · 智慧安保新纪元</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white font-serif mb-6 leading-tight">
                {currentDefense.title}
                <span className={`block mt-2 bg-gradient-to-r ${currentDefense.color} bg-clip-text text-transparent`}>
                  {currentDefense.subtitle}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                {currentDefense.description}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {currentDefense.features.map((feature, index) => <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>)}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={() => navigateTo('services', {
                  defense: currentDefense.id
                })} className={`bg-gradient-to-r ${currentDefense.color} text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                  了解{currentDefense.title}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button onClick={() => navigateTo('contact')} variant="outline" className="border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#0A1628] transition-all duration-300 text-black">
                  立即咨询
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button onClick={prevSlide} className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex space-x-3">
            {defenses.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`relative transition-all duration-300 ${currentSlide === index ? 'bg-[#D4AF37] w-10 h-4' : 'bg-white/30 hover:bg-white/50 w-4 h-4'} rounded-full`}>
                {currentSlide === index && <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#0A1628] text-xs font-bold">{index + 1}</span>
                  </div>}
              </button>)}
          </div>
          
          <button onClick={nextSlide} className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          <button onClick={() => setIsCarouselPaused(!isCarouselPaused)} className="w-12 h-12 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D4AF37]/30 transition-colors border border-[#D4AF37]/30">
            {isCarouselPaused ? <Play className="w-5 h-5 text-[#D4AF37]" /> : <Pause className="w-5 h-5 text-[#D4AF37]" />}
          </button>
        </div>
      </section>

      {/* Four Defenses Overview Section */}
      <section className="py-24 bg-[#2D3748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              四大防线一体化
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              人防、技防、物防、智防四位一体，构建全方位安全防护体系
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {defenses.map((defense, index) => {
              const DefenseIcon = defense.icon;
              return <div key={defense.id} onClick={() => {
                setCurrentSlide(defense.id);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }} className={`group bg-gradient-to-br from-[#0A1628] to-[#1a202c] p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 cursor-pointer ${currentSlide === index ? 'border-[#D4AF37]' : 'border-[#2D3748] hover:border-[#D4AF37]/50'}`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${defense.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <DefenseIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">{defense.title}</h3>
                <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${defense.color} bg-clip-text text-transparent`}>
                  {defense.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {defense.description}
                </p>
                <div className="flex items-center text-[#D4AF37] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  查看详情 <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>;
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-serif mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-[#2D3748] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
                为什么选择我们
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                我们致力于为客户提供最专业、最可靠的安保服务，用实力和信誉赢得您的信任
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => <FadeIn key={index} delay={index * 100} direction="right">
                    <HoverScale>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                          <p className="text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    </HoverScale>
                  </FadeIn>)}
              </div>
            </div>

            <FadeIn delay={300} direction="left">
              <HoverScale>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-3xl transform rotate-3 opacity-20" />
                  <div className="relative bg-[#0A1628] rounded-3xl p-8 border border-[#2D3748]">
                    <LazyImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600" alt="专业安保人员执勤场景" className="w-full h-80 object-cover rounded-2xl mb-6" aspectRatio="16/9" />
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-[#D4AF37] font-bold text-2xl font-serif">
                          <CountUp end={20} suffix="+" />
                        </div>
                        <div className="text-gray-400 text-sm">年专业经验</div>
                      </div>
                      <div className="h-12 w-px bg-[#2D3748]" />
                      <div className="text-center">
                        <div className="text-[#D4AF37] font-bold text-2xl font-serif">
                          <CountUp end={1000} suffix="+" />
                        </div>
                        <div className="text-gray-400 text-sm">专业安保人员</div>
                      </div>
                      <div className="h-12 w-px bg-[#2D3748]" />
                      <div className="text-center">
                        <div className="text-[#D4AF37] font-bold text-2xl font-serif">
                          <CountUp end={99} suffix="%" />
                        </div>
                        <div className="text-gray-400 text-sm">客户满意度</div>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverScale>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section - 锦旗表扬信滚动展示 */}
      <section className="py-24 bg-[#0A1628] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-8">
              <Award className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold text-lg">客户认可</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              锦旗与表扬信
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              每一份荣誉都是客户对我们的信任与认可
              <span className="text-[#D4AF37] ml-2 text-sm inline-flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                悬停可暂停浏览
              </span>
            </p>
          </div>

          {/* 滚动图片展示 */}
          <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-32 h-full bg-gradient-to-r from-[#0A1628] to-transparent" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-32 h-full bg-gradient-to-l from-[#0A1628] to-transparent" />
            
            <div className="flex space-x-8 animate-scroll" style={{
              animation: 'scroll 30s linear infinite'
            }}>

              {/* 第一组图片 */}
              {[...honors, ...honors].map((honor, index) => <div key={`${honor.id}-${index}`} className="flex-shrink-0 w-80">
                  <div className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] p-6 rounded-2xl border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-300 h-full">
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <img src={honor.image} alt={honor.title} className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#0A1628] px-3 py-1 rounded-full text-xs font-semibold">
                        {honor.type}
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 font-serif">{honor.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{honor.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{honor.date}</span>
                      <span className="text-[#D4AF37] text-xs font-semibold">{honor.client}</span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* 统计数据 */}
          

















        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            display: flex;
            width: max-content;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
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
          <Button onClick={() => navigateTo('contact')} className="bg-[#0A1628] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2D3748] transition-all duration-300 transform hover:scale-105 shadow-lg">
            免费咨询
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1628] border-t border-[#2D3748] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="w-10 h-10 text-[#D4AF37]" />
                <span className="text-2xl font-bold text-white font-serif tracking-wider">
                  SECURE<span className="text-[#D4AF37]">GUARD</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                20年专业安保经验，四防一体化安全解决方案，
                人防、技防、物防、智防四位一体，让安全成为您最坚实的后盾
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#2D3748] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-[#2D3748] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-[#2D3748] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">快速链接</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => navigateTo('home')} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    首页
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('services')} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    四大防线
                  </button>
                  <li>
                  <button onClick={() => navigateTo('cases')} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    成功案例
                  </button>
                </li>
                </li>
                <li>
                  <button onClick={() => navigateTo('about')} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    关于我们
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('contact')} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    联系我们
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">联系方式</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">400-888-8888</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">info@secureguard.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">北京市朝阳区建国路88号</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2D3748] mt-12 pt-8 text-center">
            <p className="text-gray-500">
              © 2025–2026 SecureGuard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </AccessibilityWrapper>;
}