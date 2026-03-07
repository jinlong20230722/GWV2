// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Shield, Phone, Mail, MapPin, Clock, Menu, X, Send, CheckCircle } from 'lucide-react';
// @ts-ignore;
import { Button, Input, Textarea, useToast } from '@/components/ui';

import { useForm } from 'react-hook-form';
import OnlineChat from '@/components/OnlineChat.jsx';
export default function Contact(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    }
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
              <button className="text-[#D4AF37] font-medium">联系我们</button>
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
              <button className="block w-full text-left text-[#D4AF37] py-2">联系我们</button>
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
                    <p className="text-gray-400">北京市朝阳区建国路88号</p>
                    <p className="text-gray-400">SOHO现代城A座18层</p>
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
              
              {/* Map Placeholder */}
              <div className="bg-[#2D3748] rounded-2xl h-64 flex items-center justify-center border border-[#2D3748] overflow-hidden relative group">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                  <p className="text-gray-400">地图位置</p>
                  <p className="text-gray-500 text-sm mb-3">北京市朝阳区建国路88号</p>
                  <a href="https://uri.amap.com/marker?position=116.46188,39.90869&name=SOHO现代城A座" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#D4AF37] hover:text-[#C0C0C0] transition-colors text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    在高德地图中查看
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-white font-serif mb-8">
                在线咨询
              </h2>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* 姓名 */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    姓名 <span className="text-red-400">*</span>
                  </label>
                  <Input {...form.register('name', {
                  required: '请输入您的姓名',
                  minLength: {
                    value: 2,
                    message: '姓名至少2个字符'
                  }
                })} placeholder="请输入您的姓名" className="bg-[#2D3748] border-[#2D3748] text-white placeholder-gray-500 focus:border-[#D4AF37]" />
                  {form.formState.errors.name && <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>}
                </div>
                
                {/* 电话 */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    联系电话 <span className="text-red-400">*</span>
                  </label>
                  <Input {...form.register('phone', {
                  required: '请输入您的联系电话',
                  pattern: {
                    value: /^1[3-9]\d{9}$/,
                    message: '请输入有效的手机号码'
                  }
                })} placeholder="请输入您的手机号码" type="tel" className="bg-[#2D3748] border-[#2D3748] text-white placeholder-gray-500 focus:border-[#D4AF37]" />
                  {form.formState.errors.phone && <p className="text-red-400 text-sm mt-1">{form.formState.errors.phone.message}</p>}
                </div>
                
                {/* 邮箱 */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    邮箱
                  </label>
                  <Input {...form.register('email', {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '请输入有效的邮箱地址'
                  }
                })} placeholder="请输入您的邮箱（可选）" type="email" className="bg-[#2D3748] border-[#2D3748] text-white placeholder-gray-500 focus:border-[#D4AF37]" />
                  {form.formState.errors.email && <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>}
                </div>
                
                {/* 公司 */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    公司名称
                  </label>
                  <Input {...form.register('company')} placeholder="请输入您的公司名称（可选）" className="bg-[#2D3748] border-[#2D3748] text-white placeholder-gray-500 focus:border-[#D4AF37]" />
                </div>
                
                {/* 服务类型 */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    需要的服务
                  </label>
                  <select {...form.register('service')} className="w-full bg-[#2D3748] border border-[#2D3748] text-white rounded-md px-3 py-2 focus:border-[#D4AF37] focus:outline-none">
                    <option value="">请选择服务类型</option>
                    <option value="人防服务">人防服务</option>
                    <option value="技防服务">技防服务</option>
                    <option value="物防服务">物防服务</option>
                    <option value="智防服务">智防服务</option>
                    <option value="四防一体化">四防一体化</option>
                    <option value="其他">其他</option>
                  </select>
                </div>
                
                {/* 咨询需求 */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    咨询需求 <span className="text-red-400">*</span>
                  </label>
                  <Textarea {...form.register('message', {
                  required: '请描述您的咨询需求',
                  minLength: {
                    value: 10,
                    message: '请至少输入10个字符'
                  }
                })} placeholder="请详细描述您的安保需求，以便我们为您提供更精准的方案..." rows={5} className="bg-[#2D3748] border-[#2D3748] text-white placeholder-gray-500 focus:border-[#D4AF37] resize-none" />
                  {form.formState.errors.message && <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>}
                </div>
                
                {/* Submit Button */}
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] text-[#0A1628] py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0A1628]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      提交中...
                    </span> : <span className="flex items-center justify-center">
                      <Send className="mr-2 w-5 h-5" />
                      提交咨询
                    </span>}
                </Button>
              </form>
            </div>
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
    </div>;
}