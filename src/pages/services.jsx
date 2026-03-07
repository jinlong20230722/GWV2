// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Shield, Users, Lock, Brain, Camera, Home, Building2, Calendar, CheckCircle, ArrowRight, Menu, X, Phone, Monitor, Database, Wifi, Zap, Award, Clock, ShieldCheck } from 'lucide-react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';

import OnlineChat from '@/components/OnlineChat.jsx';
export default function Services(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDefense, setActiveDefense] = useState(0);
  const defenses = [{
    id: 0,
    title: '人防',
    subtitle: '以人为本 专业守护',
    description: '专业安保团队，严格培训体系，24小时全天候守护，为您的安全提供最可靠的人力保障。',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    details: {
      team: {
        title: '专业安保团队',
        description: '我们的安保团队由经验丰富的专业人员组成，所有人员均经过严格的背景调查和专业培训。',
        features: ['制服统一，形象专业', '精神抖擞，纪律严明', '定期体能训练', '专业技能考核'],
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600'
      },
      training: {
        title: '专业化培训体系',
        description: '建立完善的培训体系，确保每位安保人员都具备专业的安全防护能力和应急处理能力。',
        features: ['岗前培训', '在岗培训', '专项技能培训', '应急演练'],
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600'
      },
      emergency: {
        title: '应急处理流程',
        description: '建立完善的应急处理机制，确保在突发事件发生时能够快速响应、有效处置。',
        features: ['24小时应急响应', '快速处置机制', '多部门协同', '事后评估改进'],
        image: 'https://images.unsplash.com/photo-1584473759923-6c8a7f7f9f2c?w=600'
      },
      cases: [{
        title: '大型活动安保',
        description: '成功为多场万人级演唱会、体育赛事提供安保服务',
        image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400'
      }, {
        title: '园区安保',
        description: '为多个大型工业园区提供全方位安保解决方案',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400'
      }, {
        title: 'VIP护卫',
        description: '为多位重要人物提供贴身护卫服务',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
      }]
    }
  }, {
    id: 1,
    title: '技防',
    subtitle: '科技赋能 精准防控',
    description: '先进安防技术设备，系统集成能力，定制化解决方案，用科技手段提升安全防护水平。',
    icon: Lock,
    color: 'from-emerald-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    details: {
      equipment: {
        title: '先进安防技术设备',
        description: '采用国际领先的安防技术设备，确保技术防护的先进性和可靠性。',
        features: ['高清监控系统', '智能门禁系统', '入侵报警系统', '电子巡更系统'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600'
      },
      integration: {
        title: '系统集成能力',
        description: '具备强大的系统集成能力，能够将各类安防系统有机整合，实现统一管理。',
        features: ['多系统融合', '统一管理平台', '数据共享互通', '智能联动响应'],
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600'
      },
      customization: {
        title: '定制化解决方案',
        description: '根据客户的具体需求和现场环境，提供量身定制的技防解决方案。',
        features: ['需求分析评估', '方案设计规划', '设备选型配置', '安装调试服务'],
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600'
      },
      cases: [{
        title: '智慧园区',
        description: '为多个智慧园区提供完整的技防系统解决方案',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400'
      }, {
        title: '智能楼宇',
        description: '为高端写字楼提供智能化安防系统',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400'
      }, {
        title: '周界防护',
        description: '为重要设施提供周界防护技防系统',
        image: 'https://images.unsplash.com/photo-1584473759923-6c8a7f7f9f2c?w=400'
      }]
    }
  }, {
    id: 2,
    title: '物防',
    subtitle: '坚固可靠 实体防护',
    description: '优质防护设施，精湛工艺材质，多级防护等级，构建坚实的实体安全屏障。',
    icon: Shield,
    color: 'from-orange-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1584473759923-6c8a7f7f9f2c?w=800',
    details: {
      facilities: {
        title: '实体防护设施',
        description: '提供各类高品质的实体防护设施，确保物理防护的坚固性和可靠性。',
        features: ['高强度围栏', '防爆器材', '安检设备', '防护门窗'],
        image: 'https://images.unsplash.com/photo-1584473759923-6c8a7f7f9f2c?w=600'
      },
      materials: {
        title: '材质工艺',
        description: '采用优质材料和精湛工艺，确保防护设施的耐用性和防护效果。',
        features: ['优质钢材', '防腐蚀处理', '精密制造', '严格质检'],
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600'
      },
      certification: {
        title: '防护等级认证',
        description: '所有防护设施均通过权威机构认证，符合国家和行业标准。',
        features: ['国家标准认证', '行业权威认证', '质量保证体系', '定期检测维护'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600'
      },
      cases: [{
        title: '重要设施防护',
        description: '为多个重要设施提供实体防护解决方案',
        image: 'https://images.unsplash.com/photo-1584473759923-6c8a7f7f9f2c?w=400'
      }, {
        title: '周界围栏',
        description: '为大型园区提供高强度周界围栏',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400'
      }, {
        title: '安检设备',
        description: '为重要场所提供专业安检设备',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400'
      }]
    }
  }, {
    id: 3,
    title: '智防',
    subtitle: '智能预警 智慧管理',
    description: 'AI智能分析，物联网安防，大数据预警平台，智慧园区/楼宇安防管理系统，实现智能化、可视化、一体化管理。',
    icon: Brain,
    color: 'from-purple-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    details: {
      ai: {
        title: 'AI智能监控分析平台',
        description: '采用先进的人工智能技术，实现智能视频分析和异常行为识别。',
        features: ['人脸识别', '行为分析', '异常检测', '智能预警'],
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600'
      },
      iot: {
        title: '物联网(IoT)安防系统',
        description: '构建物联网安防系统，实现各类安防设备的互联互通和智能联动。',
        features: ['设备联网', '数据采集', '智能联动', '远程控制'],
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600'
      },
      bigdata: {
        title: '大数据预警平台',
        description: '基于大数据技术，构建智能预警平台，实现安全风险的提前预警和精准防控。',
        features: ['数据采集分析', '风险评估模型', '智能预警推送', '决策支持系统'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600'
      },
      cases: [{
        title: '智慧园区管理',
        description: '为多个智慧园区提供一体化安防管理系统',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400'
      }, {
        title: '智慧楼宇安防',
        description: '为高端楼宇提供智能化安防管理系统',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400'
      }, {
        title: '城市安防',
        description: '为城市公共安全提供智能化解决方案',
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400'
      }]
    }
  }];
  const navigateTo = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
    setIsMenuOpen(false);
  };
  const activeDefenseData = defenses[activeDefense];
  const ActiveIcon = activeDefenseData.icon;
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
              <button className="text-[#D4AF37] font-medium">四大防线</button>
              <button onClick={() => navigateTo('about')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                关于我们
              </button>
              <button onClick={() => navigateTo('cases')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                成功案例
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
              <button className="block w-full text-left text-[#D4AF37] py-2">四大防线</button>
              <button onClick={() => navigateTo('about')} className="block w-full text-left text-white hover:text-[#D4AF37] py-2 transition-colors">
                关于我们
              </button>
              <button onClick={() => navigateTo('cases')} className="block w-full text-left text-white hover:text-[#D4AF37] py-2 transition-colors">
                成功案例
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920')] bg-cover bg-center opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-8">
            <Shield className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold text-lg">四防一体 · 智慧安保新纪元</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6">
            四大防线
            <span className="text-[#D4AF37] block mt-2">全方位安全保障</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            人防、技防、物防、智防四位一体，构建全方位安全防护体系，
            用专业和可靠守护您的安全
          </p>
        </div>
      </section>

      {/* Four Defenses Navigation */}
      <section className="py-12 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {defenses.map((defense, index) => {
            const DefenseIcon = defense.icon;
            return <button key={defense.id} onClick={() => setActiveDefense(defense.id)} className={`p-6 rounded-2xl transition-all duration-300 ${activeDefense === index ? 'bg-gradient-to-br from-[#D4AF37]/20 to-[#C0C0C0]/20 border-2 border-[#D4AF37]' : 'bg-[#2D3748] border-2 border-transparent hover:border-[#D4AF37]/50'}`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${defense.color} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                    <DefenseIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold font-serif ${activeDefense === index ? 'text-[#D4AF37]' : 'text-white'}`}>{defense.title}</h3>
                  <p className={`text-sm mt-1 ${activeDefense === index ? 'text-[#D4AF37]/80' : 'text-gray-400'}`}>{defense.subtitle}</p>
                </button>;
          })}
          </div>
        </div>
      </section>

      {/* Defense Detail Section */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Defense Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${activeDefenseData.color} px-6 py-3 rounded-full mb-6`}>
              <ActiveIcon className="w-6 h-6 text-white" />
              <span className="text-white font-semibold text-lg">{activeDefenseData.title}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              {activeDefenseData.title}
              <span className={`block mt-2 bg-gradient-to-r ${activeDefenseData.color} bg-clip-text text-transparent`}>
                {activeDefenseData.subtitle}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {activeDefenseData.description}
            </p>
          </div>

          {/* Defense Details Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Team/Equipment/Facilities/AI */}
            <div className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-3xl overflow-hidden border border-[#2D3748]">
              <img src={activeDefenseData.details.team?.image || activeDefenseData.details.equipment?.image || activeDefenseData.details.facilities?.image || activeDefenseData.details.ai?.image} alt={activeDefenseData.details.team?.title || activeDefenseData.details.equipment?.title || activeDefenseData.details.facilities?.title || activeDefenseData.details.ai?.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white font-serif mb-4">
                  {activeDefenseData.details.team?.title || activeDefenseData.details.equipment?.title || activeDefenseData.details.facilities?.title || activeDefenseData.details.ai?.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {activeDefenseData.details.team?.description || activeDefenseData.details.equipment?.description || activeDefenseData.details.facilities?.description || activeDefenseData.details.ai?.description}
                </p>
                <ul className="space-y-3">
                  {(activeDefenseData.details.team?.features || activeDefenseData.details.equipment?.features || activeDefenseData.details.facilities?.features || activeDefenseData.details.ai?.features).map((feature, index) => <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            {/* Training/Integration/Materials/IoT */}
            <div className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-3xl overflow-hidden border border-[#2D3748]">
              <img src={activeDefenseData.details.training?.image || activeDefenseData.details.integration?.image || activeDefenseData.details.materials?.image || activeDefenseData.details.iot?.image} alt={activeDefenseData.details.training?.title || activeDefenseData.details.integration?.title || activeDefenseData.details.materials?.title || activeDefenseData.details.iot?.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white font-serif mb-4">
                  {activeDefenseData.details.training?.title || activeDefenseData.details.integration?.title || activeDefenseData.details.materials?.title || activeDefenseData.details.iot?.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {activeDefenseData.details.training?.description || activeDefenseData.details.integration?.description || activeDefenseData.details.materials?.description || activeDefenseData.details.iot?.description}
                </p>
                <ul className="space-y-3">
                  {(activeDefenseData.details.training?.features || activeDefenseData.details.integration?.features || activeDefenseData.details.materials?.features || activeDefenseData.details.iot?.features).map((feature, index) => <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Emergency/Customization/Certification/BigData */}
          <div className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-3xl overflow-hidden border border-[#2D3748] mb-12">
            <div className="grid lg:grid-cols-2">
              <img src={activeDefenseData.details.emergency?.image || activeDefenseData.details.customization?.image || activeDefenseData.details.certification?.image || activeDefenseData.details.bigdata?.image} alt={activeDefenseData.details.emergency?.title || activeDefenseData.details.customization?.title || activeDefenseData.details.certification?.title || activeDefenseData.details.bigdata?.title} className="w-full h-64 lg:h-auto object-cover" />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white font-serif mb-4">
                  {activeDefenseData.details.emergency?.title || activeDefenseData.details.customization?.title || activeDefenseData.details.certification?.title || activeDefenseData.details.bigdata?.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {activeDefenseData.details.emergency?.description || activeDefenseData.details.customization?.description || activeDefenseData.details.certification?.description || activeDefenseData.details.bigdata?.description}
                </p>
                <ul className="space-y-3">
                  {(activeDefenseData.details.emergency?.features || activeDefenseData.details.customization?.features || activeDefenseData.details.certification?.features || activeDefenseData.details.bigdata?.features).map((feature, index) => <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Success Cases */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white font-serif mb-8 text-center">
              成功案例
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {activeDefenseData.details.cases.map((caseItem, index) => <div key={index} className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-2xl overflow-hidden border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-300">
                  <img src={caseItem.image} alt={caseItem.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white font-serif mb-2">{caseItem.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{caseItem.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button onClick={() => navigateTo('contact', {
            defense: activeDefenseData.id
          })} className={`bg-gradient-to-r ${activeDefenseData.color} text-white px-12 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
              咨询{activeDefenseData.title}服务
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] font-serif mb-6">
            需要定制化四防一体化方案？
          </h2>
          <p className="text-[#0A1628]/80 text-lg mb-8 max-w-2xl mx-auto">
            我们的专业团队将根据您的具体需求，提供个性化的四防一体化安保解决方案
          </p>
          <Button onClick={() => navigateTo('contact')} className="bg-[#0A1628] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2D3748] transition-all duration-300 transform hover:scale-105 shadow-lg">
            立即咨询
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1628] border-t border-[#2D3748] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            © 2026 SecureGuard. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Online Chat */}
      <OnlineChat />
    </div>;
}