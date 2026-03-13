// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Shield, Phone, Mail, MapPin, Clock, Menu, X, Send, CheckCircle } from 'lucide-react';
// @ts-ignore;
import { Button, Input, Textarea, useToast, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';

import { useForm } from 'react-hook-form';
import OnlineChat from '@/components/OnlineChat.jsx';
import MapComponent from '@/components/MapComponent.jsx';
import { FadeIn } from '@/components/AnimationProvider.jsx';
import MobileTabBar from '@/components/MobileTabBar.jsx';

// 表单验证规则
const formValidation = {
  name: {
    required: '请输入您的姓名',
    minLength: {
      value: 2,
      message: '姓名至少需要2个字符'
    }
  },
  email: {
    required: '请输入您的邮箱',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: '请输入有效的邮箱地址'
    }
  },
  phone: {
    required: '请输入您的电话',
    pattern: {
      value: /^1[3-9]\d{9}$/,
      message: '请输入有效的手机号码'
    }
  },
  message: {
    required: '请输入您的咨询内容',
    minLength: {
      value: 10,
      message: '咨询内容至少需要10个字符'
    }
  }
};
export default function Contact(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();

  // 状态管理
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // 表单初始化
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

  // 导航函数
  const navigateTo = pageId => {
    $w.utils.navigateTo({
      pageId,
      params: {}
    });
    setIsMenuOpen(false);
  };

  // 滚动效果监听
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 提交表单到数据源
  const onSubmit = async data => {
    setIsSubmitting(true);
    try {
      // 调用数据源API保存数据
      const result = await $w.cloud.callDataSource({
        dataSourceName: 'contact_inquiry',
        methodName: 'wedaCreateV2',
        params: {
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company || '',
            service: data.service || '',
            message: data.message,
            status: '待处理',
            remarks: '',
            is_read: false
          }
        }
      });
      console.log('表单提交成功:', result);

      // 显示成功提示
      toast({
        title: '提交成功',
        description: '感谢您的咨询，我们会尽快与您联系！',
        variant: 'default'
      });
      setSubmitSuccess(true);
      form.reset();

      // 3秒后重置成功状态
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('表单提交失败:', error);
      toast({
        title: '提交失败',
        description: error.message || '请稍后重试',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 联系方式信息
  const contactInfo = [{
    icon: Phone,
    title: '电话',
    details: ['400-888-8888', '010-12345678']
  }, {
    icon: Mail,
    title: '邮箱',
    details: ['info@secureguard.com', 'support@secureguard.com']
  }, {
    icon: MapPin,
    title: '地址',
    details: ['北京市朝阳区建国路88号', 'SOHO现代城A座18层']
  }, {
    icon: Clock,
    title: '工作时间',
    details: ['周一至周五: 9:00 - 18:00', '24小时应急服务热线: 400-888-8888']
  }];
  return <div className="min-h-screen bg-[#0A1628] font-sans">
      {/* 导航栏 */}
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

            {/* 桌面端导航 */}
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

            {/* 移动端菜单按钮 */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
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

      {/* Hero区域 */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628]/90 to-[#2D3748]/80">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920')] bg-cover bg-center opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6">
              联系我们
              <span className="text-[#D4AF37] block mt-2">期待与您合作</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              如果您有任何问题或需要安保服务，请随时与我们联系
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 联系内容区域 */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* 联系信息 */}
            <div>
              <FadeIn>
                <h2 className="text-4xl font-bold text-white font-serif mb-8">
                  联系方式
                </h2>
              </FadeIn>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return <FadeIn key={index} delay={index * 100}>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#0A1628]" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-1">{info.title}</h4>
                          {info.details.map((detail, idx) => <p key={idx} className="text-gray-400">{detail}</p>)}
                        </div>
                      </div>
                    </FadeIn>;
              })}
              </div>
              
              {/* 地图组件 */}
              <FadeIn delay={400}>
                <MapComponent address="北京市朝阳区建国路88号SOHO现代城A座18层" height="h-80" />
              </FadeIn>
            </div>

            {/* 联系表单 */}
            <div>
              <FadeIn delay={200}>
                <h2 className="text-4xl font-bold text-white font-serif mb-8">
                  在线咨询
                </h2>

                {submitSuccess ? <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">提交成功！</h3>
                    <p className="text-gray-300">我们的团队会在24小时内与您联系</p>
                  </div> : <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* 姓名 */}
                        <FormField control={form.control} name="name" rules={formValidation.name} render={({
                      field
                    }) => <FormItem>
                              <FormLabel className="text-white font-medium">姓名 *</FormLabel>
                              <FormControl>
                                <Input placeholder="请输入您的姓名" className="bg-[#1A2744] border-[#2D3748] text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37]" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>} />

                        {/* 邮箱 */}
                        <FormField control={form.control} name="email" rules={formValidation.email} render={({
                      field
                    }) => <FormItem>
                              <FormLabel className="text-white font-medium">邮箱 *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="example@email.com" className="bg-[#1A2744] border-[#2D3748] text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37]" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>} />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* 电话 */}
                        <FormField control={form.control} name="phone" rules={formValidation.phone} render={({
                      field
                    }) => <FormItem>
                              <FormLabel className="text-white font-medium">电话 *</FormLabel>
                              <FormControl>
                                <Input placeholder="请输入您的手机号码" className="bg-[#1A2744] border-[#2D3748] text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37]" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>} />

                        {/* 公司名称 */}
                        <FormField control={form.control} name="company" render={({
                      field
                    }) => <FormItem>
                              <FormLabel className="text-white font-medium">公司名称</FormLabel>
                              <FormControl>
                                <Input placeholder="请输入公司名称（选填）" className="bg-[#1A2744] border-[#2D3748] text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37]" {...field} />
                              </FormControl>
                            </FormItem>} />
                      </div>

                      {/* 咨询服务 */}
                      <FormField control={form.control} name="service" render={({
                    field
                  }) => <FormItem>
                            <FormLabel className="text-white font-medium">咨询服务</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-[#1A2744] border-[#2D3748] text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]">
                                  <SelectValue placeholder="请选择咨询服务类型（选填）" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-[#1A2744] border-[#2D3748] text-white">
                                <SelectItem value="人防服务">人防服务</SelectItem>
                                <SelectItem value="物防服务">物防服务</SelectItem>
                                <SelectItem value="技防服务">技防服务</SelectItem>
                                <SelectItem value="智防系统">智防系统</SelectItem>
                                <SelectItem value="其他">其他</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>} />

                      {/* 咨询内容 */}
                      <FormField control={form.control} name="message" rules={formValidation.message} render={({
                    field
                  }) => <FormItem>
                            <FormLabel className="text-white font-medium">咨询内容 *</FormLabel>
                            <FormControl>
                              <Textarea placeholder="请详细描述您的需求..." className="bg-[#1A2744] border-[#2D3748] text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37] min-h-[150px] resize-none" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>} />

                      {/* 提交按钮 */}
                      <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] text-[#0A1628] font-semibold py-6 rounded-full text-lg hover:from-[#C0C0C0] hover:to-[#D4AF37] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                        {isSubmitting ? <>
                            <div className="w-5 h-5 border-2 border-[#0A1628] border-t-transparent rounded-full animate-spin" />
                            <span>提交中...</span>
                          </> : <>
                            <Send className="w-5 h-5" />
                            <span>发送咨询</span>
                          </>}
                      </Button>
                    </form>
                  </Form>}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 紧急联系区域 */}
      <section className="py-24 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-[#0A1628] border-t border-[#2D3748] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            © 2025–2026 SecureGuard. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* 在线客服 */}
      <OnlineChat />

      {/* 移动端底部导航 */}
      <MobileTabBar navigateTo={navigateTo} currentPage="contact" />
    </div>;
}