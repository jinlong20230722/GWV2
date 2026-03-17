// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

import { SafeText, SafeLink, useDataSourceContext } from './DataSourceProvider.jsx';
export function WebsiteFooter({
  navigateTo
}) {
  const {
    data
  } = useDataSourceContext();
  return <footer className="bg-[#0A1628] border-t border-[#2D3748] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="w-10 h-10 text-[#D4AF37] mr-3" />
              <span className="text-2xl font-bold text-[#D4AF37] font-serif">SecureGuard</span>
            </div>
            <p className="text-gray-400 mb-6">
              <SafeText>专业安保服务，守护生命财产安全</SafeText>
            </p>
            <div className="flex space-x-4">
              {[Phone, Mail, MapPin].map((Icon, idx) => <div key={idx} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>)}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              <SafeText>快速链接</SafeText>
            </h3>
            <ul className="space-y-3">
              {['首页', '服务介绍', '成功案例', '关于我们'].map((item, idx) => <li key={idx}>
                  <button onClick={() => navigateTo(idx === 0 ? 'home' : idx === 1 ? 'services' : idx === 2 ? 'cases' : 'about')} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">
                    <SafeText>{item}</SafeText>
                  </button>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              <SafeText>服务项目</SafeText>
            </h3>
            <ul className="space-y-3">
              {['人防服务', '技防服务', '物防服务', '智防服务'].map((item, idx) => <li key={idx}>
                  <button onClick={() => navigateTo('services')} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">
                    <SafeText>{item}</SafeText>
                  </button>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              <SafeText>联系方式</SafeText>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-[#D4AF37]" />
                <span><SafeText>{data.websiteConfig?.contact_phone || '400-888-8888'}</SafeText></span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-[#D4AF37]" />
                <span><SafeText>{data.websiteConfig?.contact_email || 'info@secureguard.com'}</SafeText></span>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-[#D4AF37] mt-1" />
                <span><SafeText>{data.websiteConfig?.contact_address || '北京市朝阳区建国路88号'}</SafeText></span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2D3748] mt-12 pt-8 text-center text-gray-400">
          <p><SafeText>{data.websiteConfig?.copyright || '© 2025–2026 SecureGuard. All rights reserved.'}</SafeText></p>
        </div>
      </div>
    </footer>;
}