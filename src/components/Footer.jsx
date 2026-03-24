// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer(props) {
  const {
    onNavigate
  } = props;
  const navigateTo = pageId => {
    if (onNavigate) {
      onNavigate(pageId);
    }
  };
  const quickLinks = [{
    id: 'home',
    label: '首页'
  }, {
    id: 'services',
    label: '服务'
  }, {
    id: 'about',
    label: '关于我们'
  }, {
    id: 'contact',
    label: '联系我们'
  }];
  return <footer className="bg-[#0A1628] border-t border-[#2D3748] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 lg:mb-6">
              <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-[#D4AF37]" />
              <span className="text-xl lg:text-2xl font-bold text-white font-serif tracking-wider">
                SECURE<span className="text-[#D4AF37]">GUARD</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base max-w-md">
              20年专业安保经验，为企业和个人提供全方位的安全解决方案，
              让安全成为您最坚实的后盾
            </p>
            <div className="flex space-x-3 lg:space-x-4">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#2D3748] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer touch-manipulation">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#2D3748] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer touch-manipulation">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#2D3748] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer touch-manipulation">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-6">快速链接</h4>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map(link => <li key={link.id}>
                  <button onClick={() => navigateTo(link.id)} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm lg:text-base touch-manipulation py-1">
                    {link.label}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-6">联系方式</h4>
            <ul className="space-y-3 lg:space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm lg:text-base">400-888-8888</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm lg:text-base">info@secureguard.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm lg:text-base">北京市朝阳区建国路88号</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2D3748] mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
          <p className="text-gray-500 text-sm lg:text-base">
            © 2026 SecureGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}