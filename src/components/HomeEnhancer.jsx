// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Shield, Award, Lock, Star, ArrowRight, FileText, Calendar } from 'lucide-react';

import { SlideIn, PulseButton, HoverCard, AnimatedCounter, Ripple } from './EnhancedAnimations.jsx';
import { CredentialDetailModal, useCredentialModal } from './CredentialDetailModal.jsx';
export const EnhancedStats = () => {
  const stats = [{
    value: 20,
    suffix: '+',
    label: '年行业经验'
  }, {
    value: 500,
    suffix: '+',
    label: '服务客户'
  }, {
    value: 1000,
    suffix: '+',
    label: '安保人员'
  }, {
    value: 99,
    suffix: '%',
    label: '客户满意度'
  }];
  return <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {stats.map((stat, index) => <SlideIn key={index} direction="up" delay={index * 0.1}>
          <div className="bg-gradient-to-br from-[#2D3748]/80 to-[#0A1628]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 transform hover:scale-105 text-center">
            <div className="text-[#D4AF37] text-4xl md:text-5xl font-bold font-serif mb-3">
              <AnimatedCounter end={stat.value} duration={2000} suffix={stat.suffix} />
            </div>
            <div className="text-gray-300 font-medium">{stat.label}</div>
          </div>
        </SlideIn>)}
    </div>;
};
export const EnhancedCTAButtons = ({
  onConsult,
  onSolution,
  onVisit
}) => {
  return <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* 主按钮 - 免费咨询 */}
      <PulseButton isPrimary={true} onClick={onConsult} className="shadow-2xl shadow-[#D4AF37]/30">
        免费咨询
        <ArrowRight className="ml-2 w-5 h-5" />
      </PulseButton>

      {/* 次按钮 - 获取方案 */}
      <Ripple>
        <button onClick={onSolution} className="inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628] transition-all duration-300 transform hover:scale-105 active:scale-95">
          获取方案
          <FileText className="ml-2 w-5 h-5" />
        </button>
      </Ripple>

      {/* 第三按钮 - 预约考察 */}
      <button onClick={onVisit} className="inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-full border-2 border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628] transition-all duration-300 transform hover:scale-105 active:scale-95">
        预约考察
        <Calendar className="ml-2 w-5 h-5" />
      </button>
    </div>;
};
export const EnhancedCredentials = () => {
  const {
    selectedCredential,
    isModalOpen,
    openCredential,
    closeModal
  } = useCredentialModal();
  const credentialData = [{
    id: 1,
    name: '保安服务许可证',
    icon: Shield,
    color: 'from-blue-500 to-blue-700'
  }, {
    id: 2,
    name: 'ISO9001认证',
    icon: Award,
    color: 'from-green-500 to-green-700'
  }, {
    id: 3,
    name: '安防工程资质',
    icon: Lock,
    color: 'from-purple-500 to-purple-700'
  }, {
    id: 4,
    name: 'AAA级信用企业',
    icon: Star,
    color: 'from-yellow-500 to-orange-700'
  }];
  return <>
      <div className="grid md:grid-cols-4 gap-8">
        {credentialData.map((cred, index) => <SlideIn key={cred.id} direction="up" delay={index * 0.15}>
            <HoverCard className="text-center">
              <div onClick={() => openCredential(cred.id)} className={`w-24 h-24 bg-gradient-to-br ${cred.color} rounded-2xl flex items-center justify-center mx-auto mb-4 cursor-pointer group transition-all duration-300 hover:scale-110 shadow-xl shadow-black/30`}>
                <cred.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-white font-semibold group-hover:text-[#D4AF37] transition-colors duration-300">{cred.name}</p>
              <p className="text-gray-400 text-sm mt-1">点击查看详情</p>
            </HoverCard>
          </SlideIn>)}
      </div>

      <CredentialDetailModal credential={selectedCredential} isOpen={isModalOpen} onClose={closeModal} />
    </>;
};
export const EnhancedCaseCard = ({
  caseStudy,
  index,
  onClick
}) => {
  return <SlideIn direction="up" delay={index * 0.15}>
      <HoverCard onClick={onClick} className="bg-gradient-to-br from-[#0A1628] to-[#1a202c] p-6 rounded-2xl border border-[#2D3748] hover:border-[#D4AF37]/50">
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#0A1628] px-3 py-1 rounded-full text-xs font-semibold">
            {caseStudy.category}
          </div>
        </div>
        
        <h3 className="text-white font-bold text-lg mb-2 font-serif group-hover:text-[#D4AF37] transition-colors">{caseStudy.title}</h3>
        <p className="text-[#D4AF37] text-sm mb-2 font-semibold">{caseStudy.service}</p>
        <p className="text-gray-400 text-sm mb-3">{caseStudy.problem}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-green-400 text-sm font-semibold">{caseStudy.result}</span>
          <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
        </div>
      </HoverCard>
    </SlideIn>;
};
export default {
  EnhancedStats,
  EnhancedCTAButtons,
  EnhancedCredentials,
  EnhancedCaseCard
};