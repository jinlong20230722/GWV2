// @ts-ignore;
import React from 'react';

const pageConfigs = {
  home: {
    title: 'SecureGuard - 四防一体化安全解决方案 | 专业安保服务',
    description: 'SecureGuard提供专业的四防一体化安全服务：人防、技防、物防、智防，为企业、社区、活动提供全方位安全保障。20年行业经验，1000+专业安保人员。',
    keywords: ['安保服务', '四防一体化', '安全解决方案', '人防服务', '技防系统', '物防设施', '智防方案', '北京安保公司']
  },
  services: {
    title: '四防一体化服务 - SecureGuard专业安保解决方案',
    description: 'SecureGuard四大防线：人防安保服务、技防系统集成、物防设施建设、智防解决方案，为您打造全方位安全防护体系。',
    keywords: ['人防服务', '技防系统', '物防设施', '智防方案', '安保解决方案', '安防系统', '门禁系统', '监控系统']
  },
  cases: {
    title: '成功案例 - SecureGuard客户见证与项目展示',
    description: '查看SecureGuard为企业、社区、大型活动提供的四防一体化安保服务成功案例，500+客户的选择，99%客户满意度。',
    keywords: ['安保成功案例', '客户见证', '项目展示', '企业安保案例', '社区安保案例', '活动安保案例']
  },
  about: {
    title: '关于我们 - SecureGuard四防一体化安保集团',
    description: '了解SecureGuard安保集团，20年行业经验，专业团队，我们的使命是为客户提供最优质的四防一体化安全服务。',
    keywords: ['关于SecureGuard', '安保公司介绍', '安保团队', '安保企业', '专业安保公司']
  },
  contact: {
    title: '联系我们 - SecureGuard在线咨询与预约',
    description: '联系SecureGuard获取四防一体化安保服务报价，在线咨询，专业团队为您提供定制化安全解决方案。',
    keywords: ['联系我们', '在线咨询', '安保报价', '预约服务', '联系方式', '安保公司电话']
  },
  admin: {
    title: '后台管理 - SecureGuard内容管理系统',
    description: 'SecureGuard后台管理系统，用于管理网站内容、服务信息、客户案例等。',
    keywords: ['后台管理', '内容管理', 'CMS系统']
  }
};
export const PageMeta = ({
  pageId,
  title: customTitle,
  description: customDescription,
  keywords: customKeywords,
  children
}) => {
  const config = pageConfigs[pageId] || pageConfigs.home;
  const title = customTitle || config.title;
  const description = customDescription || config.description;
  const keywords = customKeywords || config.keywords;
  return <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200" />
      <meta property="og:site_name" content="SecureGuard" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🛡️</text></svg>" />
      
      {children}
    </>;
};