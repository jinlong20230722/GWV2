// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Shield, Users, Award, Target, Menu, X, CheckCircle, ArrowRight, Calendar, TrendingUp, Briefcase, Building2, Zap, Lightbulb, Globe, Star } from 'lucide-react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';

import OnlineChat from '@/components/OnlineChat.jsx';
export default function About(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const milestones = [{
    year: '2006',
    title: '公司成立',
    desc: 'SecureGuard 正式成立，开启专业安保服务'
  }, {
    year: '2010',
    title: '业务扩展',
    desc: '服务范围扩展至全国主要城市'
  }, {
    year: '2015',
    title: '技术升级',
    desc: '引入先进安防技术，提升服务质量'
  }, {
    year: '2020',
    title: '品牌升级',
    desc: '完成品牌全面升级，确立行业领先地位'
  }, {
    year: '2026',
    title: '持续创新',
    desc: '持续创新，引领行业发展'
  }];
  const team = [{
    name: '张明',
    position: '创始人 & CEO',
    description: '20年安保行业经验，曾任职于多家知名安保企业',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    alt: 'SecureGuard创始人兼CEO张明先生'
  }, {
    name: '李华',
    position: '运营总监',
    description: '15年安保运营管理经验，专业高效',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    alt: 'SecureGuard运营总监李华女士'
  }, {
    name: '王强',
    position: '技术总监',
    description: '安防技术专家，引领技术创新',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    alt: 'SecureGuard技术总监王强先生'
  }, {
    name: '赵敏',
    position: '客户服务总监',
    description: '专注客户服务，确保客户满意度',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    alt: 'SecureGuard客户服务总监赵敏女士'
  }];
  const jobs = [{
    id: 1,
    title: '高级安保经理',
    department: '运营部',
    location: '北京',
    salary: '15K-25K',
    requirements: ['5年以上安保行业经验', '具备团队管理能力', '熟悉安保业务流程', '持有相关资格证书'],
    description: '负责安保团队管理、客户关系维护、服务质量提升等工作。'
  }, {
    id: 2,
    title: '安防技术工程师',
    department: '技术部',
    location: '北京',
    salary: '12K-20K',
    requirements: ['3年以上安防技术经验', '熟悉各类安防设备', '具备系统集成能力', '良好的沟通能力'],
    description: '负责安防系统设计、安装调试、技术支持等工作。'
  }, {
    id: 3,
    title: '商务拓展经理',
    department: '市场部',
    location: '北京',
    salary: '10K-20K',
    requirements: ['3年以上销售经验', '具备市场开拓能力', '优秀的沟通表达能力', '有安保行业经验优先'],
    description: '负责市场开拓、客户开发、商务谈判等工作。'
  }, {
    id: 4,
    title: '安保专员',
    department: '运营部',
    location: '北京/上海/深圳',
    salary: '6K-10K',
    requirements: ['身体健康，无犯罪记录', '退伍军人优先', '具备良好的服务意识', '能适应轮班工作'],
    description: '负责客户现场安保工作，确保客户安全。'
  }];
  const navigateTo = pageId => {
    $w.utils.navigateTo({
      pageId,
      params: {}
    });
    setIsMenuOpen(false);
  };
  return <div className="min-h-screen bg-[#0A1628] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo('home')}>
              <Shield className="w-10 h-10 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white font-serif tracking-wider">
                SECURE<span className="text-[#D4AF37]">GUARD</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigateTo('home')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                首页
              </button>
              <button onClick={() => navigateTo('services')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                四大防线
              </button>
              <button onClick={() => navigateTo('cases')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                成功案例
              </button>
              <button onClick={() => navigateTo('about')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                关于我们
              </button>
              <button onClick={() => navigateTo('contact')} className="bg-[#D4AF37] text-[#0A1628] px-6 py-2 rounded-full font-semibold hover:bg-[#C0C0C0] transition-all duration-300 transform hover:scale-105">
                联系我们
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && <div className="md:hidden bg-[#0A1628]/95 backdrop-blur-md border-t border-[#2D3748]">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => navigateTo('home')} className="block w-full text-left text-white hover:text-[#D4AF37] py-2 transition-colors">
                首页
              </button>
              <button onClick={() => navigateTo('services')} className="block w-full text-left text-white hover:text-[#D4AF37] py-2 transition-colors">
                四大防线
              </button>
              <button onClick={() => navigateTo('cases')} className="block w-full text-left text-white hover:text-[#D4AF37] py-2 transition-colors">
                成功案例
              </button>
              <button onClick={() => navigateTo('about')} className="block w-full text-left text-white hover:text-[#D4AF37] py-2 transition-colors">
                关于我们
              </button>
              <button onClick={() => navigateTo('contact')} className="w-full bg-[#D4AF37] text-[#0A1628] px-6 py-3 rounded-full font-semibold hover:bg-[#C0C0C0] transition-colors">
                联系我们
              </button>
            </div>
          </div>}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628]/90 to-[#2D3748]/80">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')] bg-cover bg-center opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6">
            关于我们
            <span className="text-[#D4AF37] block mt-2">20年专业安保经验</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            自2006年成立以来，SecureGuard 始终致力于为客户提供最专业、最可靠的安保服务
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white font-serif mb-6">
                我们的故事
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                SecureGuard 成立于2006年，从一家小型安保公司发展成为行业领先的综合安保服务提供商。
                20年来，我们始终坚持"专业、可靠、创新"的服务理念，为数千家企业提供了优质的安保服务。
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                我们拥有一支经验丰富、训练有素的专业团队，采用先进的安防技术和设备，
                为客户提供全方位的安全保障。无论是企业安保、活动安保还是技术安防，
                我们都能提供专业、高效的解决方案。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#2D3748] p-6 rounded-2xl">
                  <div className="text-[#D4AF37] text-3xl font-bold font-serif mb-2">20+</div>
                  <div className="text-gray-400">年行业经验</div>
                </div>
                <div className="bg-[#2D3748] p-6 rounded-2xl">
                  <div className="text-[#D4AF37] text-3xl font-bold font-serif mb-2">500+</div>
                  <div className="text-gray-400">服务客户</div>
                </div>
                <div className="bg-[#2D3748] p-6 rounded-2xl">
                  <div className="text-[#D4AF37] text-3xl font-bold font-serif mb-2">1000+</div>
                  <div className="text-gray-400">安保人员</div>
                </div>
                <div className="bg-[#2D3748] p-6 rounded-2xl">
                  <div className="text-[#D4AF37] text-3xl font-bold font-serif mb-2">99%</div>
                  <div className="text-gray-400">客户满意度</div>
                </div>
              </div>
              <div className="mt-6 bg-[#2D3748]/50 p-4 rounded-xl border border-[#2D3748]">
                <p className="text-gray-400 text-sm text-center">
                  * 数据截至 2025 年 12 月，根据公司内部统计
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-3xl transform rotate-3 opacity-20" />
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800" alt="SecureGuard专业安保团队合影" className="relative w-full h-96 object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-[#2D3748] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#0A1628] p-10 rounded-3xl border border-[#2D3748]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#0A1628]" />
              </div>
              <h3 className="text-3xl font-bold text-white font-serif mb-4">我们的使命</h3>
              <p className="text-gray-300 leading-relaxed">
                为客户提供最专业、最可靠的安保服务，用实力和信誉赢得客户的信任，
                成为客户最值得信赖的安全合作伙伴。
              </p>
            </div>

            <div className="bg-[#0A1628] p-10 rounded-3xl border border-[#2D3748]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#0A1628]" />
              </div>
              <h3 className="text-3xl font-bold text-white font-serif mb-4">我们的愿景</h3>
              <p className="text-gray-300 leading-relaxed">
                成为国内领先的安保服务提供商，引领行业发展，
                用创新和专业为客户创造更大的价值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              核心价值观
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              我们始终坚持这些价值观，指导我们的每一个决策和行动
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Shield,
            title: '专业',
            description: '专业的团队、专业的服务、专业的态度'
          }, {
            icon: CheckCircle,
            title: '可靠',
            description: '值得信赖的服务质量，让客户放心'
          }, {
            icon: Award,
            title: '创新',
            description: '不断创新，引领行业发展'
          }].map((value, index) => <div key={index} className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#2D3748] hover:border-[#D4AF37]/50">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#0A1628]" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-gradient-to-br from-[#2D3748] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              发展历程
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              从创立到今天，我们不断成长，不断超越
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4AF37]/30" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-[#0A1628] p-6 rounded-2xl border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-300">
                      <div className="text-[#D4AF37] text-2xl font-bold font-serif mb-2">{milestone.year}</div>
                      <h4 className="text-white font-semibold text-lg mb-2">{milestone.title}</h4>
                      <p className="text-gray-400 text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-[#0A1628]" />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              核心团队
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              经验丰富的专业团队，为您提供最优质的服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <div key={index} className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#2D3748] hover:border-[#D4AF37]/50">
                <img src={member.image} alt={member.alt} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white font-serif mb-1">{member.name}</h4>
                  <div className="text-[#D4AF37] text-sm font-medium mb-3">{member.position}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Tech Subsidiary Section */}
      <section className="py-24 bg-gradient-to-br from-[#2D3748] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-8">
              <Zap className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold text-lg">科技子公司</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              SecureGuard Tech
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              专注智慧安防技术研发，引领行业智能化发展
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-[#0A1628] p-6 rounded-2xl border border-[#2D3748]">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-[#0A1628]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">AI智能分析</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">基于深度学习的智能视频分析技术，实现人脸识别、行为分析、异常检测等功能</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0A1628] p-6 rounded-2xl border border-[#2D3748]">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-[#0A1628]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">物联网平台</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">构建物联网安防平台，实现设备互联互通、数据采集分析、智能联动响应</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0A1628] p-6 rounded-2xl border border-[#2D3748]">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-[#0A1628]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">智慧园区解决方案</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">为园区、楼宇提供一体化智慧安防解决方案，实现智能化、可视化管理</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-3xl transform rotate-3 opacity-20" />
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" alt="智慧安防技术创新展示" className="relative w-full h-96 object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Leadership Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-3xl transform -rotate-3 opacity-20" />
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800" alt="SecureGuard创始人兼CEO" className="relative w-full h-96 object-cover rounded-3xl shadow-2xl" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-8">
                <Star className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-semibold text-lg">创始人寄语</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
                张明
                <span className="text-[#D4AF37] block mt-2 text-2xl md:text-3xl">创始人 & CEO</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                "20年来，我们始终坚持'专业、可靠、创新'的服务理念，从一家小型安保公司发展成为行业领先的综合安保服务提供商。未来，我们将继续以科技创新为驱动，以客户需求为导向，为客户提供更优质、更智能的安保服务。"
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                我们的愿景是成为国内领先的安保服务提供商，引领行业发展，用创新和专业为客户创造更大的价值。我们相信，只有不断创新，才能在激烈的市场竞争中立于不败之地。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#2D3748] p-4 rounded-xl">
                  <div className="text-[#D4AF37] text-2xl font-bold font-serif mb-1">20+</div>
                  <div className="text-gray-400 text-sm">年行业经验</div>
                </div>
                <div className="bg-[#2D3748] p-4 rounded-xl">
                  <div className="text-[#D4AF37] text-2xl font-bold font-serif mb-1">500+</div>
                  <div className="text-gray-400 text-sm">服务客户</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      























































      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] font-serif mb-6">
            期待与您合作
          </h2>
          <p className="text-[#0A1628]/80 text-lg mb-8 max-w-2xl mx-auto">
            如果您有任何问题或需要安保服务，请随时与我们联系
          </p>
          <Button onClick={() => navigateTo('contact')} className="bg-[#0A1628] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2D3748] transition-all duration-300 transform hover:scale-105 shadow-lg">
            联系我们
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1628] border-t border-[#2D3748] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            © 2025–2026 SecureGuard. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Online Chat */}
      <OnlineChat />
    </div>;
}