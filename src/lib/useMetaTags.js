import { useEffect } from 'react';

/**
 * 自定义 Hook：管理 HTML Head 中的 meta 标签
 * 
 * 必需的 meta 标签：
 * 1. viewport - 确保响应式布局正常工作
 * 2. user-scalable=no - 禁用缩放，提升 App 感
 * 3. telephone=no - 防止电话号码自动识别
 * 
 * @param {Object} options - 配置选项
 * @param {string} options.title - 页面标题
 * @param {string} options.description - 页面描述
 */
export function useMetaTags(options = {}) {
  const {
    title = 'SECUREGUARD - 专业安保服务',
    description = 'SECUREGUARD 提供专业安保服务，包括安全咨询、风险评估、安保人员培训等'
  } = options;

  useEffect(() => {
    // 设置页面标题
    document.title = title;

    // 创建或更新 viewport meta 标签
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

    // 创建或更新 format-detection meta 标签（防止电话号码自动识别）
    let telephoneMeta = document.querySelector('meta[name="format-detection"]');
    if (!telephoneMeta) {
      telephoneMeta = document.createElement('meta');
      telephoneMeta.name = 'format-detection';
      document.head.appendChild(telephoneMeta);
    }
    telephoneMeta.content = 'telephone=no';

    // 创建或更新 description meta 标签
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.content = description;

    // 添加 theme-color（移动浏览器地址栏颜色）
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.name = 'theme-color';
      document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.content = '#0A1628';

    // 添加 apple-mobile-web-app-capable（iOS Safari 全屏模式）
    let appleCapableMeta = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!appleCapableMeta) {
      appleCapableMeta = document.createElement('meta');
      appleCapableMeta.name = 'apple-mobile-web-app-capable';
      document.head.appendChild(appleCapableMeta);
    }
    appleCapableMeta.content = 'yes';

    // 添加 apple-mobile-web-app-status-bar-style
    let appleStatusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (!appleStatusBarMeta) {
      appleStatusBarMeta = document.createElement('meta');
      appleStatusBarMeta.name = 'apple-mobile-web-app-status-bar-style';
      document.head.appendChild(appleStatusBarMeta);
    }
    appleStatusBarMeta.content = 'black-translucent';

    // 注入全局样式（低代码环境不支持 CSS 导入）
    if (!document.getElementById('global-styles')) {
      const style = document.createElement('style');
      style.id = 'global-styles';
      style.textContent = `
        /* CSS 重置 + 基础样式 */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          font-size: 16px;
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
          line-height: 1.6;
          color: #333;
          overflow-x: hidden;
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          border: none;
          background: none;
          cursor: pointer;
          font-family: inherit;
        }

        /* 容器样式 */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
        }

        /* 滚动条样式 */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* 触摸设备优化 */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        /* 禁用电话号码自动识别 */
        a[href^="tel:"] {
          color: inherit;
          text-decoration: none;
        }

        /* ===== 导航栏响应式样式 ===== */
        
        /* 汉堡菜单动画 */
        .hamburger-icon {
          transition: all 0.3s ease;
        }
        
        /* 遮罩层 */
        .nav-overlay {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 49;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .nav-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        
        /* 移动端菜单滑入动画 */
        .mobile-menu {
          transform: translateX(100%);
          transition: transform 0.3s ease;
        }
        
        .mobile-menu.active {
          transform: translateX(0);
        }
        
        /* 手机端优化 */
        @media (max-width: 768px) {
          .nav-overlay {
            top: 60px;
          }
          
          .hamburger-icon.active {
            transform: rotate(90deg);
          }
        }

        /* ===== Hero 区域 ===== */
        .hero {
          padding: 80px 24px;
          text-align: center;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          background: #D4AF37;
          color: #0A1628;
          border-radius: 20px;
          font-size: 14px;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .hero-title {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .hero-desc {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto 32px;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s;
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-primary {
          background: #D4AF37;
          color: #0A1628;
        }

        .btn-primary:hover {
          background: #C0C0C0;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #D4AF37;
          border: 2px solid #D4AF37;
        }

        .btn-secondary:hover {
          background: #D4AF37;
          color: #0A1628;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 40px 16px;
          }
          
          .hero-title {
            font-size: 28px;
          }
          
          .hero-desc {
            font-size: 14px;
          }
          
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
          }
          
          .btn {
            width: 100%;
            text-align: center;
          }
        }

        /* ===== 数据统计区 ===== */
        .stats {
          padding: 60px 24px;
          background: white;
        }

        .stats-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: bold;
          color: #D4AF37;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 16px;
          color: #666;
        }

        @media (max-width: 768px) {
          .stats {
            padding: 40px 16px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          
          .stat-number {
            font-size: 32px;
          }
          
          .stat-label {
            font-size: 13px;
          }
        }

        /* ===== 核心服务区 ===== */
        .services {
          padding: 80px 24px;
          background: #f5f7fa;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .section-desc {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .services-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .service-card {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: all 0.3s;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        }

        .service-icon {
          width: 64px;
          height: 64px;
          margin-bottom: 20px;
        }

        .service-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .service-desc {
          font-size: 14px;
          color: #666;
          margin-bottom: 20px;
          line-height: 1.8;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #D4AF37;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s;
        }

        .service-link:hover {
          color: #C0C0C0;
        }

        @media (max-width: 768px) {
          .services {
            padding: 60px 16px;
          }
          
          .section-title {
            font-size: 28px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .service-card {
            padding: 24px 16px;
          }
        }

        /* ===== 优势展示区 ===== */
        .features {
          padding: 80px 24px;
          background: white;
        }

        .features-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .feature-item {
          text-align: center;
          padding: 24px;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
        }

        .feature-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #1a1a1a;
        }

        .feature-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .features {
            padding: 60px 16px;
          }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          
          .feature-title {
            font-size: 16px;
          }
          
          .feature-desc {
            font-size: 13px;
          }
        }

        /* ===== 客户评价区 ===== */
        .testimonials {
          padding: 80px 24px;
          background: #f5f7fa;
        }

        .testimonials-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .testimonial-card {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .testimonial-text {
          font-size: 15px;
          color: #333;
          line-height: 1.8;
          margin-bottom: 20px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #D4AF37;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0A1628;
          font-weight: bold;
        }

        .author-info h4 {
          font-size: 16px;
          margin-bottom: 4px;
          color: #1a1a1a;
        }

        .author-info p {
          font-size: 13px;
          color: #666;
        }

        @media (max-width: 768px) {
          .testimonials {
            padding: 60px 16px;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* ===== CTA 区域 ===== */
        .cta {
          padding: 80px 24px;
          background: linear-gradient(135deg, #0A1628 0%, #1a2d4a 100%);
          text-align: center;
          color: white;
        }

        .cta-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 16px;
          color: #D4AF37;
        }

        .cta-desc {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          color: white;
        }

        .cta .btn-primary {
          background: #D4AF37;
          color: #0A1628;
        }

        .cta .btn-primary:hover {
          background: #C0C0C0;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(212, 175, 55, 0.3);
        }

        @media (max-width: 768px) {
          .cta {
            padding: 60px 16px;
          }
          
          .cta-title {
            font-size: 28px;
          }
          
          .cta-desc {
            font-size: 16px;
          }
        }

        /* ===== 页脚 ===== */
        .footer {
          padding: 60px 24px 32px;
          background: #0A1628;
          color: white;
        }

        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }

        .footer-section h4 {
          font-size: 18px;
          margin-bottom: 20px;
          color: #D4AF37;
          font-weight: 600;
        }

        .footer-section p {
          font-size: 14px;
          color: #999;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .footer-social a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #2D3748;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
          color: white;
        }

        .footer-social a:hover {
          background: #D4AF37;
          color: #0A1628;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          font-size: 14px;
          color: #999;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #D4AF37;
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 14px;
          color: #999;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 40px auto 0;
          padding-top: 32px;
          border-top: 1px solid #2D3748;
          text-align: center;
          font-size: 14px;
          color: #666;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 16px 24px;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
          }
          
          .footer-social {
            justify-content: center;
          }
          
          .footer-contact li {
            justify-content: center;
          }
        }

        /* ===== 返回顶部按钮 ===== */
        .back-to-top {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #D4AF37;
          color: #0A1628;
          display: none;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          z-index: 999;
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
          transition: all 0.3s;
        }

        .back-to-top.visible {
          display: flex;
        }

        .back-to-top:hover {
          transform: translateY(-4px);
          background: #C0C0C0;
          box-shadow: 0 8px 16px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 768px) {
          .back-to-top {
            bottom: 24px;
            right: 24px;
            width: 44px;
            height: 44px;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // 清理函数：组件卸载时恢复默认标题
    return () => {
      // 保留 viewport 和其他必要的 meta 标签
    };
  }, [title, description]);
}

export default useMetaTags;
