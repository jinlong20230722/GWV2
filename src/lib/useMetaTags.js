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

    // 清理函数：组件卸载时恢复默认标题
    return () => {
      // 保留 viewport 和其他必要的 meta 标签
    };
  }, [title, description]);
}

export default useMetaTags;
