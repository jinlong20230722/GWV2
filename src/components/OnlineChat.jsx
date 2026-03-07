// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { MessageCircle, X, Send, Phone, Mail, Minimize2, Maximize2 } from 'lucide-react';
// @ts-ignore;
import { Button, Input, useToast } from '@/components/ui';

import { useForm } from 'react-hook-form';
export function OnlineChat(props) {
  const {
    toast } =
  useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState([{
    id: 1,
    type: 'bot',
    content: '您好！欢迎咨询 SecureGuard 安保服务。请问有什么可以帮助您的？' }]);

  const form = useForm({
    defaultValues: {
      message: '' } });


  const onSubmit = async (data) => {
    if (!data.message.trim()) return;
    setIsSubmitting(true);

    // 添加用户消息
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: data.message };

    setMessages([...messages, userMessage]);
    form.reset();
    try {
      // 模拟客服回复
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: '感谢您的咨询！我们的专业顾问会尽快与您联系。您也可以拨打 400-888-8888 直接咨询。' };

      setMessages((prev) => [...prev, botMessage]);
      toast({
        title: '消息已发送',
        description: '我们的顾问会尽快与您联系',
        variant: 'default' });

    } catch (error) {
      toast({
        title: '发送失败',
        description: '请稍后重试',
        variant: 'destructive' });

    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && <div className={`bg-[#0A1628] rounded-2xl shadow-2xl border border-[#2D3748] overflow-hidden transition-all duration-300 ${isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'}`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0A1628] rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <div className="text-[#0A1628] font-bold text-sm">在线客服</div>
                <div className="text-[#0A1628]/70 text-xs">24小时在线</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => setIsMinimized(!isMinimized)} className="text-[#0A1628] hover:text-[#0A1628]/70 transition-colors">
                {isMinimized ? <Maximize2 className="w-5 h-5" /> : <Minimize2 className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="text-[#0A1628] hover:text-[#0A1628]/70 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {!isMinimized && <>
              {/* Messages */}
              <div className="h-[340px] overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl ${msg.type === 'user' ? 'bg-[#D4AF37] text-[#0A1628]' : 'bg-[#2D3748] text-white'}`}>
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </div>)}
                
                {isSubmitting && <div className="flex justify-start">
                    <div className="bg-[#2D3748] text-white p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{
                  animationDelay: '0.1s' }} />

                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{
                  animationDelay: '0.2s' }} />

                      </div>
                    </div>
                  </div>}
              </div>
              
              {/* Quick Actions */}
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => {
              form.setValue('message', '我想了解企业安保服务');
            }} className="text-xs bg-[#2D3748] text-gray-300 px-3 py-1.5 rounded-full hover:bg-[#2D3748]/80 transition-colors">
                    企业安保
                  </button>
                  <button onClick={() => {
              form.setValue('message', '我想了解活动安保服务');
            }} className="text-xs bg-[#2D3748] text-gray-300 px-3 py-1.5 rounded-full hover:bg-[#2D3748]/80 transition-colors">
                    活动安保
                  </button>
                  <button onClick={() => {
              form.setValue('message', '我想了解技术安防服务');
            }} className="text-xs bg-[#2D3748] text-gray-300 px-3 py-1.5 rounded-full hover:bg-[#2D3748]/80 transition-colors">
                    技术安防
                  </button>
                  <button onClick={() => {
              form.setValue('message', '我想获取安保方案报价');
            }} className="text-xs bg-[#2D3748] text-gray-300 px-3 py-1.5 rounded-full hover:bg-[#2D3748]/80 transition-colors">
                    获取报价
                  </button>
                </div>
              </div>
              
              {/* Input */}
              <div className="p-4 border-t border-[#2D3748]">
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2">
                  <Input {...form.register('message')} placeholder="输入您的问题..." className="flex-1 bg-[#2D3748] border-[#2D3748] text-white placeholder:text-gray-500 focus:border-[#D4AF37] text-sm" />
                  <Button type="submit" disabled={isSubmitting} className="bg-[#D4AF37] text-[#0A1628] px-4 rounded-xl hover:bg-[#C0C0C0] transition-colors">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <a href="tel:400-888-8888" className="flex items-center space-x-1 hover:text-[#D4AF37] transition-colors">
                    <Phone className="w-3 h-3" />
                    <span>400-888-8888</span>
                  </a>
                  <a href="mailto:info@secureguard.com" className="flex items-center space-x-1 hover:text-[#D4AF37] transition-colors">
                    <Mail className="w-3 h-3" />
                    <span>info@secureguard.com</span>
                  </a>
                </div>
              </div>
            </>}
        </div>}
      
      {/* Chat Button */}
      {!isOpen}


    </div>;
}
export default OnlineChat;