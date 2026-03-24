// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Phone, Mail, MapPin, Clock, Send, AlertTriangle } from 'lucide-react';
// @ts-ignore;
import { Button, Input, Textarea, useToast } from '@/components/ui';

// 引入全局样式
import '@/index.css';

// @ts-ignore;
import { useForm } from 'react-hook-form';
// @ts-ignore;
import Navbar from '@/components/Navbar';
// @ts-ignore;
import Footer from '@/components/Footer';
// @ts-ignore;
import ScrollToTop from '@/components/ScrollToTop';
// @ts-ignore;
import { useMetaTags } from '@/lib/useMetaTags';
export default function Contact(props) {
  // 设置页面 meta 标签
  useMetaTags({
    title: '联系我们 - SECUREGUARD',
    description: '联系 SECUREGUARD 获取专业安保服务咨询，24小时应急热线：400-888-8888'
  });
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
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
  const navigateTo = pageId => {
    $w.utils.navigateTo({
      pageId,
      params: {}
    });
  };
  const onSubmit = async data => {
    setIsSubmitting(true);
    try {
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
  const contactInfo = [{
    icon: Phone,
    title: '咨询电话',
    content: '400-888-8888',
    subtext: '周一至周日 7×24小时'
  }, {
    icon: Mail,
    title: '电子邮箱',
    content: 'info@secureguard.com',
    subtext: '工作日24小时内回复'
  }, {
    icon: MapPin,
    title: '公司地址',
    content: '北京市朝阳区建国路88号',
    subtext: '欢迎来访咨询'
  }, {
    icon: Clock,
    title: '工作时间',
    content: '周一至周五 9:00-18:00',
    subtext: '节假日另行通知'
  }];
  return <div className="min-h-screen bg-[#0A1628] font-sans">
      <Navbar currentPage="contact" onNavigate={navigateTo} />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#2D3748]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4 sm:mb-6">
            联系我们
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            期待与您的沟通，为您提供专业的安保解决方案
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => <div key={index} className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] p-5 sm:p-6 rounded-2xl border border-[#2D3748] hover:border-[#D4AF37]/50 transition-all duration-300 touch-manipulation">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{info.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-1">{info.content}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{info.subtext}</p>
              </div>)}
          </div>

          {/* Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] p-6 sm:p-8 rounded-2xl border border-[#2D3748]">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-6 sm:mb-8">
                在线咨询
              </h2>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">姓名 *</label>
                    <input {...form.register('name', {
                    required: '请输入姓名'
                  })} className="w-full bg-[#0A1628] border border-[#2D3748] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm sm:text-base touch-manipulation" placeholder="您的姓名" />
                    {form.formState.errors.name && <p className="text-red-400 text-xs mt-1">{form.formState.errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm mb-2">电话 *</label>
                    <input {...form.register('phone', {
                    required: '请输入电话'
                  })} className="w-full bg-[#0A1628] border border-[#2D3748] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm sm:text-base touch-manipulation" placeholder="您的电话" type="tel" />
                    {form.formState.errors.phone && <p className="text-red-400 text-xs mt-1">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">邮箱</label>
                    <input {...form.register('email')} className="w-full bg-[#0A1628] border border-[#2D3748] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm sm:text-base touch-manipulation" placeholder="您的邮箱" type="email" />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm mb-2">公司</label>
                    <input {...form.register('company')} className="w-full bg-[#0A1628] border border-[#2D3748] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm sm:text-base touch-manipulation" placeholder="您的公司" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">咨询内容 *</label>
                  <textarea {...form.register('message', {
                  required: '请输入咨询内容'
                })} className="w-full bg-[#0A1628] border border-[#2D3748] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors min-h-[120px] resize-y text-sm sm:text-base touch-manipulation" placeholder="请描述您的需求" rows={4} />
                  {form.formState.errors.message && <p className="text-red-400 text-xs mt-1">{form.formState.errors.message.message}</p>}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#D4AF37] text-[#0A1628] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#C0C0C0] transition-all duration-300 disabled:opacity-50 touch-manipulation">
                  {isSubmitting ? <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-[#0A1628]/30 border-t-[#0A1628] rounded-full animate-spin mr-2" />
                      提交中...
                    </span> : <>
                      提交咨询
                      <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </>}
                </Button>
              </form>
            </div>

            {/* Map & Emergency */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-2xl overflow-hidden border border-[#2D3748] h-64 sm:h-72">
                <div className="w-full h-full flex items-center justify-center bg-[#1a202c]">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37] mx-auto mb-3 sm:mb-4" />
                    <p className="text-gray-300 text-sm sm:text-base">地图位置</p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">北京市朝阳区建国路88号</p>
                  </div>
                </div>
              </div>

              {/* Emergency Hotline */}
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-2xl p-5 sm:p-6 lg:p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0A1628] rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-[#0A1628] font-bold text-lg sm:text-xl mb-2">24小时应急热线</h3>
                    <p className="text-[#0A1628]/80 text-xs sm:text-sm mb-2">紧急情况请拨打</p>
                    <a href="tel:400-888-8888" className="text-[#0A1628] font-bold text-xl sm:text-2xl hover:underline touch-manipulation">
                      400-888-8888
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={navigateTo} />
    </div>;
}