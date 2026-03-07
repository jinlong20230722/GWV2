// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Shield, Building2, GraduationCap, Factory, Home, Briefcase, Award, Menu, X, ArrowRight, CheckCircle, Star, TrendingUp, Users, Target } from 'lucide-react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';

import OnlineChat from '@/components/OnlineChat.jsx';
export default function Cases(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const categories = [{
    id: 'all',
    name: '全部案例'
  }, {
    id: 'finance',
    name: '金融行业'
  }, {
    id: 'education',
    name: '教育行业'
  }, {
    id: 'real-estate',
    name: '地产行业'
  }, {
    id: 'enterprise',
    name: '企业园区'
  }, {
    id: 'residential',
    name: '住宅小区'
  }];
  const cases = [{
    id: 1,
    title: '某国有银行省分行安保项目',
    category: 'finance',
    client: '金融行业客户',
    description: '为某国有银行省分行及其辖内80余个营业网点提供四防一体化安保服务。项目涵盖金库守卫、网点安防、运钞押运等核心业务场景，部署智能化监控系统和人脸识别门禁，实现24小时实时监控与异常预警。',
    services: ['金库守卫', '智能监控', '人脸识别门禁', '运钞押运护卫', '24小时应急响应'],
    results: ['安全事故零发生', '网点安防达标率100%', '应急响应平均时间2.5分钟'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    year: '2025'
  }, {
    id: 2,
    title: '某重点大学智慧校园安保项目',
    category: 'education',
    client: '教育行业客户',
    description: '为某重点大学提供智慧校园安保解决方案，覆盖教学区、学生宿舍区、实验室及运动场馆等全场景。部署AI视频分析系统，实现人群聚集预警、异常行为识别等功能，有效保障师生安全。',
    services: ['AI视频分析', '智能门禁系统', '电子围栏周界防护', '校园巡逻', '一键报警系统'],
    results: ['校园安全事件下降85%', '师生安全满意度96%', '系统稳定运行99.9%'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
    year: '2025'
  }, {
    id: 3,
    title: '某高端住宅小区智能安保项目',
    category: 'residential',
    client: '地产行业客户',
    description: '为某高端住宅小区提供全场景智能安保服务，包括小区出入口管理、地下车库安防、电梯监控及单元门禁系统。采用人脸识别、车牌识别等智能化技术，为2000余户业主打造安全、舒适的居住环境。',
    services: ['智能门禁', '车牌识别管理', '全覆盖视频监控', '专业保安团队', '社区巡逻'],
    results: ['业主满意度98%', '安全事故零发生', '服务响应平均时间4分钟'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    year: '2024'
  }, {
    id: 4,
    title: '某大型工业园区综合安保项目',
    category: 'enterprise',
    client: '企业园区客户',
    description: '为某大型工业园区提供四防一体化安保服务，园区占地超50万平方米，入驻企业60余家。项目涵盖周界防护、生产区监控、危化品仓库守护等重点场景，保障企业生产和财产安全。',
    services: ['周界入侵报警', '全覆盖智能监控', '车辆人员管理', '危化品仓库守护', '消防应急联动'],
    results: ['安全事故零发生', '园区安防达标率100%', '管理成本降低18%'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    year: '2024'
  }, {
    id: 5,
    title: '某大型商业综合体安保项目',
    category: 'real-estate',
    client: '商业地产行业客户',
    description: '为某大型商业综合体提供智能化安保解决方案，建筑面积超30万平方米，日均客流5万余人。项目整合客流分析、智能监控、消防联动等系统，为商户和顾客提供全方位安全保障。',
    services: ['智能视频监控', '客流统计分析', '消防应急联动', '停车引导系统', '24小时值守'],
    results: ['安全事件下降72%', '商户满意度95%', '应急响应平均时间1.8分钟'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    year: '2024'
  }, {
    id: 6,
    title: '某国际学校校园安保项目',
    category: 'education',
    client: '教育行业客户',
    description: '为某国际学校提供专业化安保服务，覆盖幼儿园、小学、中学全学段教学区域。项目采用智能化门禁管理系统，实现学生接送安全管控，配备专业安保团队，确保师生安全和校园秩序。',
    services: ['学生接送管理', '智能访客系统', '全覆盖视频监控', '专业安保团队', '应急演练培训'],
    results: ['校园安全事故零发生', '家长满意度99%', '系统稳定运行99.8%'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    year: '2023'
  }];
  const certifications = [{
    id: 1,
    title: 'ISO9001质量管理体系认证',
    issuer: '国际标准化组织',
    year: '2018',
    description: '通过ISO9001质量管理体系认证，确保服务质量达到国际标准',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600'
  }, {
    id: 2,
    title: '保安服务许可证',
    issuer: '公安部',
    year: '2006',
    description: '获得公安部颁发的保安服务许可证，具备合法经营资质',
    image: 'https://images.unsplash.com/photo-1584473759923-6c8a7f7f9f2c?w=600'
  }, {
    id: 3,
    title: '安防工程企业资质证书',
    issuer: '公安部',
    year: '2010',
    description: '获得安防工程企业一级资质，具备承接大型安防工程的能力',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600'
  }, {
    id: 4,
    title: '中国安防行业优秀企业',
    issuer: '中国安全防范产品行业协会',
    year: '2023',
    description: '荣获中国安防行业优秀企业称号，行业影响力显著',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600'
  }, {
    id: 5,
    title: '高新技术企业证书',
    issuer: '科学技术部',
    year: '2022',
    description: '获得高新技术企业认证，技术创新能力得到认可',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600'
  }, {
    id: 6,
    title: 'AAA级信用企业',
    issuer: '中国信用评估中心',
    year: '2024',
    description: '获得AAA级信用企业认证，企业信誉度达到最高等级',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600'
  }];
  const honors = [{
    id: 1,
    title: '年度最佳安保服务企业',
    year: '2025',
    issuer: '中国安全防范产品行业协会',
    description: '在年度评选中荣获最佳安保服务企业称号'
  }, {
    id: 2,
    title: '智慧安防创新奖',
    year: '2024',
    issuer: '中国智慧城市产业联盟',
    description: '智慧安防解决方案获得创新奖'
  }, {
    id: 3,
    title: '优秀安保服务提供商',
    year: '2023',
    issuer: '北京市保安协会',
    description: '连续多年获得优秀安保服务提供商称号'
  }, {
    id: 4,
    title: '社会责任贡献奖',
    year: '2022',
    issuer: '中国公益事业发展中心',
    description: '在社会责任履行方面获得认可'
  }];
  const navigateTo = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
    setIsMenuOpen(false);
  };
  const filteredCases = activeCategory === 'all' ? cases : cases.filter(c => c.category === activeCategory);
  const openCertModal = cert => {
    setSelectedCert(cert);
    setShowCertModal(true);
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
              <button onClick={() => navigateTo('about')} className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                关于我们
              </button>
              <button className="text-[#D4AF37] font-medium">成功案例</button>
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
              <button onClick={() => navigateTo('about')} className="block w-full text-left text-white hover:text-[#D4AF37] py-2 transition-colors">
                关于我们
              </button>
              <button className="block w-full text-left text-[#D4AF37] py-2">成功案例</button>
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
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-8">
            <Award className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold text-lg">成功案例 · 资质荣誉</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6">
            成功案例
            <span className="text-[#D4AF37] block mt-2">见证专业实力</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            20年专业经验，500+成功案例，覆盖金融、教育、地产、企业等多个行业
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#2D3748]">
              <div className="text-[#D4AF37] text-3xl font-bold font-serif mb-2">500+</div>
              <div className="text-gray-400">成功案例</div>
            </div>
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#2D3748]">
              <div className="text-[#D4AF37] text-3xl font-bold font-serif mb-2">99%</div>
              <div className="text-gray-400">客户满意度</div>
            </div>
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#2D3748]">
              <div className="text-[#D4AF37] text-3xl font-bold font-serif mb-2">20+</div>
              <div className="text-gray-400">行业经验</div>
            </div>
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#2D3748]">
              <div className="text-[#D4AF37] text-3xl font-bold font-serif mb-2">50+</div>
              <div className="text-gray-400">资质认证</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Categories */}
      <section className="py-12 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id ? 'bg-[#D4AF37] text-[#0A1628]' : 'bg-[#2D3748] text-white hover:bg-[#2D3748]/80'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
      </section>

      {/* Success Cases Grid */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              成功案例
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              我们为各行业客户提供专业的四防一体化安保服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map(caseItem => <div key={caseItem.id} className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-3xl overflow-hidden border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative">
                  <img src={caseItem.image} alt={caseItem.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0A1628] px-3 py-1 rounded-full text-sm font-semibold">
                    {caseItem.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-serif mb-2">{caseItem.title}</h3>
                  <p className="text-[#D4AF37] text-sm font-medium mb-3">{caseItem.client}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{caseItem.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-white font-semibold text-sm mb-2">服务内容：</div>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.services.map((service, index) => <span key={index} className="bg-[#0A1628] text-gray-300 text-xs px-2 py-1 rounded">
                          {service}
                        </span>)}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-white font-semibold text-sm mb-2">项目成果：</div>
                    <ul className="space-y-1">
                      {caseItem.results.map((result, index) => <li key={index} className="flex items-center space-x-2 text-gray-400 text-xs">
                          <CheckCircle className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                          <span>{result}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-gradient-to-br from-[#2D3748] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              资质认证
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              权威认证，专业保障，值得信赖
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map(cert => <div key={cert.id} onClick={() => openCertModal(cert)} className="bg-[#0A1628] p-6 rounded-2xl border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-[#0A1628]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white font-serif mb-2">{cert.title}</h3>
                    <p className="text-[#D4AF37] text-sm font-medium mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs mb-2">{cert.year}年获得</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Honors Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              荣誉奖项
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              行业认可，荣誉见证
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {honors.map((honor, index) => <div key={honor.id} className={`bg-gradient-to-br from-[#2D3748] to-[#1a202c] p-8 rounded-3xl border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-8 h-8 text-[#0A1628]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#D4AF37] text-sm font-semibold mb-2">{honor.year}</div>
                    <h3 className="text-2xl font-bold text-white font-serif mb-3">{honor.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">颁发机构：{honor.issuer}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{honor.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] font-serif mb-6">
            需要专业安保服务？
          </h2>
          <p className="text-[#0A1628]/80 text-lg mb-8 max-w-2xl mx-auto">
            让我们用20年专业经验和500+成功案例，为您提供最优质的安保服务
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
            © 2025–2026 SecureGuard. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Certification Modal */}
      {showCertModal && selectedCert && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setShowCertModal(false)}>
          <div className="bg-[#0A1628] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#2D3748]" onClick={e => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white font-serif">资质详情</h3>
                <button onClick={() => setShowCertModal(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-64 object-cover rounded-2xl mb-6" />
              
              <div className="space-y-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">认证名称</div>
                  <div className="text-white text-lg font-semibold">{selectedCert.title}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">颁发机构</div>
                  <div className="text-[#D4AF37]">{selectedCert.issuer}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">获得时间</div>
                  <div className="text-white">{selectedCert.year}年</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">认证说明</div>
                  <div className="text-gray-300 leading-relaxed">{selectedCert.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      
      {/* Online Chat */}
      <OnlineChat />
    </div>;
}