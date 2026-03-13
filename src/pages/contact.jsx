// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Shield, Phone, Mail, MapPin, Clock, Menu, X, Send, CheckCircle, Home, Briefcase, FolderOpen, User, MessageSquare } from 'lucide-react';
// @ts-ignore;
import { Button, Input, Textarea, useToast, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';

import { useForm } from 'react-hook-form';
import OnlineChat from '@/components/OnlineChat.jsx';
import MobileMapNavigator from '@/components/MobileMapNavigator.jsx';
import { FadeIn } from '@/components/AnimationProvider.jsx';
import MobileTabBar from '@/components/MobileTabBar.jsx';
export default function Contact(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    },
    mode: 'onChange'
  });
  const onSubmit = async data => {
    setIsSubmitting(true);
    try {
      // 模拟表单提交
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: '提交成功',
        description: '我们会尽快与您联系！',
        variant: 'default'
      });
      form.reset();
    } catch (error) {
      toast({
        title: '提交失败',
        description: error.message || '请稍后重试',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const navigateTo = pageId => {
    $w.utils.navigateTo({
      pageId,
      params: {}
    });
    setIsMenuOpen(false);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-[#0A1628] font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-top ${scrolled ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo('home')}>
              <Shield className="w-10 h-10 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white font-serif tracking-wider">
                SecureGuard
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
              <button onClick={() => navigateTo('contact')} className="block w-full text-left text-[#D4AF37] py-3 transition-colors">
                联系我们
              </button>
            </div>
          </div>}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628]/90 to-[#2D3748]/80">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920')] bg-cover bg-center opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6">
            联系我们
            <span className="text-[#D4AF37] block mt-2">期待与您合作</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            如果您有任何问题或需要安保服务，请随时与我们联系
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-white font-serif mb-8">
                联系方式
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0A1628]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">电话</h4>
                    <p className="text-gray-400">400-888-8888</p>
                    <p className="text-gray-400">010-12345678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0A1628]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">邮箱</h4>
                    <p className="text-gray-400">info@secureguard.com</p>
                    <p className="text-gray-400">support@secureguard.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0A1628]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">地址</h4>
                    <p className="text-gray-400">成都市青羊区人民中路二段68号</p>
                    <p className="text-gray-400">中铁瑞城大厦16楼</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#0A1628]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">工作时间</h4>
                    <p className="text-gray-400">周一至周五: 9:00 - 18:00</p>
                    <p className="text-gray-400">24小时应急服务热线: 400-888-8888</p>
                  </div>
                </div>
              </div>
              
              {/* Map Component */}
              <FadeIn delay={200}>
                <MobileMapNavigator address="成都市青羊区人民中路二段68号中铁瑞城大厦16楼" name="成都天顺保安服务有限公司" latitude={30.6598} longitude={104.0633} height="h-80" />
              </FadeIn>
            </div>

            {/* Contact Form */}
            


































































          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] font-serif mb-6">
            紧急情况？
          </h2>
          <p className="text-[#0A1628]/80 text-lg mb-8 max-w-2xl mx-auto">
            如果您遇到紧急情况，请立即拨打我们的24小时应急服务热线
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:400-888-8888" className="bg-[#0A1628] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2D3748] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              400-888-8888
            </a>
          </div>
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

      {/* 统一移动端底部导航 */}
      <MobileTabBar navigateTo={navigateTo} currentPage="contact" />
    </div>;
}