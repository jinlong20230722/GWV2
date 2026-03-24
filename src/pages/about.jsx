// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Users, Award, Target, CheckCircle, ArrowRight, Calendar, TrendingUp } from 'lucide-react';
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
export default function About(props) {
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
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
  }, {
    name: '李华',
    position: '运营总监',
    description: '15年安保运营管理经验，专业高效',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
  }, {
    name: '王强',
    position: '技术总监',
    description: '安防技术专家，引领技术创新',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  }, {
    name: '赵敏',
    position: '客户服务总监',
    description: '专注客户服务，确保客户满意度',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
  }];
  const values = [{
    icon: Award,
    title: '专业',
    desc: '专业团队，严格培训'
  }, {
    icon: Target,
    title: '可靠',
    desc: '值得信赖，使命必达'
  }, {
    icon: TrendingUp,
    title: '创新',
    desc: '技术创新，引领行业'
  }];
  return <div className="min-h-screen bg-[#0A1628] font-sans">
      <Navbar currentPage="about" onNavigate={navigateTo} />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#2D3748]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4 sm:mb-6">
            关于我们
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            20年专注安保服务，用专业和责任守护每一位客户的安全
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-first lg:order-last">
              <ImageWithLoader n src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800" alt="Our Team" className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-4 sm:mb-6">
                我们的故事
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                SecureGuard 成立于2006年，是一家专注于安保服务的专业企业。经过多年的发展，我们已成为行业内的领先品牌，为众多企业和个人提供了优质的安保服务。
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                我们拥有超过1000名经过专业培训的安保人员，服务范围覆盖全国主要城市。无论是企业安保、活动安保还是技术安防，我们都能为您提供最专业的解决方案。
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-[#2D3748] p-4 sm:p-6 rounded-xl">
                  <div className="text-[#D4AF37] font-bold text-2xl sm:text-3xl font-serif mb-1">500+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">服务客户</div>
                </div>
                <div className="bg-[#2D3748] p-4 sm:p-6 rounded-xl">
                  <div className="text-[#D4AF37] font-bold text-2xl sm:text-3xl font-serif mb-1">99%</div>
                  <div className="text-gray-400 text-xs sm:text-sm">客户满意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#2D3748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-[#0A1628] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#2D3748]">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-3 sm:mb-4">使命</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                以专业、可靠、高效的安保服务，为客户提供全方位的安全保障，让安全成为每一位客户最坚实的后盾。
              </p>
            </div>
            <div className="bg-[#0A1628] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#2D3748]">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-3 sm:mb-4">愿景</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                成为中国安保行业的标杆企业，用创新技术和专业服务引领行业发展，为社会的安全稳定贡献力量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-3 sm:mb-4">
              核心价值观
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">引领我们不断前进的信念</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => <div key={index} className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-2xl border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 font-serif">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{value.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#2D3748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-3 sm:mb-4">
              发展历程
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">见证我们的成长与进步</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#D4AF37]/30 transform lg:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => <div key={index} className="relative flex items-start lg:items-center">
                  <div className={`flex-1 lg:flex-none lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'}`}>
                    <div className="bg-[#0A1628] p-5 sm:p-6 rounded-xl border border-[#2D3748] ml-12 lg:ml-0 hover:border-[#D4AF37]/50 transition-all duration-300">
                      <div className="text-[#D4AF37] font-bold text-lg sm:text-xl font-serif mb-2">{milestone.year}</div>
                      <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-[#D4AF37] rounded-full transform -translate-x-1/2 mt-6 lg:mt-0" />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-3 sm:mb-4">
              核心团队
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">专业、敬业、富有经验的管理团队</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => <div key={index} className="group bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-2xl overflow-hidden border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <ImageWithLoader n src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{member.name}</h3>
                  <p className="text-[#D4AF37] text-xs sm:text-sm mb-2 sm:mb-3">{member.position}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{member.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] font-serif mb-4 sm:mb-6">
            加入我们的团队
          </h2>
          <p className="text-[#0A1628]/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            我们正在寻找优秀的人才，与我们一起成长，共同守护安全
          </p>
          <Button onClick={() => navigateTo('contact')} className="bg-[#0A1628] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#2D3748] transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation">
            联系我们
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>

      <Footer onNavigate={navigateTo} />
    </div>;
}