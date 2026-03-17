import { useState, useEffect, useRef, useCallback } from 'react';
import { sanitizeHTML, safeText, safeURL } from '@/components/SecurityOptimizer.jsx';

// 主数据Hook
export function useWebsiteData(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    websiteConfig: null,
    companyInfo: null,
    defenseServices: [],
    successCases: [],
    homeBanners: [],
    testimonials: [],
    teamMembers: [],
    certifications: [],
    statistics: null,
    whyChooseUs: [],
    milestones: []
  });
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // 通用数据获取函数
  const fetchData = useCallback(async (dataSourceName, methodName, params = {}) => {
    if (!isMounted || !props?.$w?.cloud?.callDataSource) return null;
    
    try {
      const result = await props.$w.cloud.callDataSource({
        dataSourceName,
        methodName,
        params: {
          select: { $master: true },
          ...params
        }
      });
      return result;
    } catch (e) {
      console.error(`Fetch ${dataSourceName} error:`, e);
      return null;
    }
  }, [props, isMounted]);

  // 获取网站配置
  const fetchWebsiteConfig = useCallback(async () => {
    const result = await fetchData('website_config', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      pageSize: 1
    });
    return result?.records?.[0] || null;
  }, [fetchData]);

  // 获取公司信息
  const fetchCompanyInfo = useCallback(async () => {
    const result = await fetchData('company_info', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      pageSize: 1
    });
    return result?.records?.[0] || null;
  }, [fetchData]);

  // 获取防卫服务
  const fetchDefenseServices = useCallback(async () => {
    const result = await fetchData('defense_service', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      orderBy: [{ order: 'asc' }],
      pageSize: 20
    });
    return result?.records || [];
  }, [fetchData]);

  // 获取成功案例
  const fetchSuccessCases = useCallback(async () => {
    const result = await fetchData('success_case', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      orderBy: [{ order: 'asc' }],
      pageSize: 20
    });
    return result?.records || [];
  }, [fetchData]);

  // 获取首页横幅
  const fetchHomeBanners = useCallback(async () => {
    const result = await fetchData('home_banner', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      orderBy: [{ order: 'asc' }],
      pageSize: 20
    });
    return result?.records || [];
  }, [fetchData]);

  // 获取客户评价
  const fetchTestimonials = useCallback(async () => {
    const result = await fetchData('testimonial', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      orderBy: [{ order: 'asc' }],
      pageSize: 20
    });
    return result?.records || [];
  }, [fetchData]);

  // 获取团队成员
  const fetchTeamMembers = useCallback(async () => {
    const result = await fetchData('team_member', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      orderBy: [{ order: 'asc' }],
      pageSize: 20
    });
    return result?.records || [];
  }, [fetchData]);

  // 获取资质认证
  const fetchCertifications = useCallback(async () => {
    const result = await fetchData('certification', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      orderBy: [{ order: 'asc' }],
      pageSize: 20
    });
    return result?.records || [];
  }, [fetchData]);

  // 获取统计数据
  const fetchStatistics = useCallback(async () => {
    const result = await fetchData('statistics', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      pageSize: 1
    });
    return result?.records?.[0] || null;
  }, [fetchData]);

  // 获取选择理由
  const fetchWhyChooseUs = useCallback(async () => {
    const result = await fetchData('why_choose_us', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      orderBy: [{ order: 'asc' }],
      pageSize: 20
    });
    return result?.records || [];
  }, [fetchData]);

  // 获取发展历程
  const fetchMilestones = useCallback(async () => {
    const result = await fetchData('milestone', 'wedaGetRecordsV2', {
      filter: { where: { is_active: { $eq: true } } },
      orderBy: [{ year: 'asc' }],
      pageSize: 20
    });
    return result?.records || [];
  }, [fetchData]);

  // 加载所有数据
  const loadAllData = useCallback(async () => {
    if (!isMounted) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const [
        websiteConfig,
        companyInfo,
        defenseServices,
        successCases,
        homeBanners,
        testimonials,
        teamMembers,
        certifications,
        statistics,
        whyChooseUs,
        milestones
      ] = await Promise.all([
        fetchWebsiteConfig(),
        fetchCompanyInfo(),
        fetchDefenseServices(),
        fetchSuccessCases(),
        fetchHomeBanners(),
        fetchTestimonials(),
        fetchTeamMembers(),
        fetchCertifications(),
        fetchStatistics(),
        fetchWhyChooseUs(),
        fetchMilestones()
      ]);

      if (isMounted) {
        setData({
          websiteConfig,
          companyInfo,
          defenseServices,
          successCases,
          homeBanners,
          testimonials,
          teamMembers,
          certifications,
          statistics,
          whyChooseUs,
          milestones
        });
      }
    } catch (e) {
      console.error('Load all data error:', e);
      if (isMounted) {
        setError(e.message || '数据加载失败');
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  }, [
    isMounted,
    fetchWebsiteConfig,
    fetchCompanyInfo,
    fetchDefenseServices,
    fetchSuccessCases,
    fetchHomeBanners,
    fetchTestimonials,
    fetchTeamMembers,
    fetchCertifications,
    fetchStatistics,
    fetchWhyChooseUs,
    fetchMilestones
  ]);

  // 数据转换和映射函数
  const mapDefenseService = (service) => ({
    id: service._id,
    title: safeText(service.title),
    subtitle: safeText(service.subtitle),
    description: safeText(service.description),
    iconName: safeText(service.icon_name) || 'Shield',
    color: safeText(service.color) || 'from-gray-500 to-gray-600',
    image: safeURL(service.image) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
    features: service.features?.map(f => safeText(f)) || [],
    details: service.details
  });

  const mapSuccessCase = (caseItem) => ({
    id: caseItem._id,
    title: safeText(caseItem.title),
    category: safeText(caseItem.category),
    client: safeText(caseItem.client),
    description: safeText(caseItem.description),
    services: caseItem.services?.map(s => safeText(s)) || [],
    results: caseItem.results?.map(r => safeText(r)) || [],
    image: safeURL(caseItem.image) || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    year: safeText(caseItem.year)
  });

  const mapTestimonial = (testimonial) => ({
    id: testimonial._id,
    name: safeText(testimonial.name),
    title: safeText(testimonial.title),
    company: safeText(testimonial.company),
    content: safeText(testimonial.content),
    avatar: safeURL(testimonial.avatar),
    rating: testimonial.rating || 5
  });

  const mapTeamMember = (member) => ({
    id: member._id,
    name: safeText(member.name),
    title: safeText(member.title),
    bio: safeText(member.bio),
    photo: safeURL(member.photo) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    social: member.social
  });

  const mapCertification = (cert) => ({
    id: cert._id,
    title: safeText(cert.title),
    description: safeText(cert.description),
    icon: safeText(cert.icon) || 'Award',
    year: safeText(cert.year)
  });

  const mapWhyChooseUs = (item) => ({
    id: item._id,
    icon: safeText(item.icon) || 'CheckCircle',
    title: safeText(item.title),
    description: safeText(item.description)
  });

  const mapMilestone = (milestone) => ({
    id: milestone._id,
    year: safeText(milestone.year),
    title: safeText(milestone.title),
    description: safeText(milestone.description)
  });

  return {
    loading,
    error,
    data,
    loadAllData,
    // 数据映射函数
    mapDefenseService,
    mapSuccessCase,
    mapTestimonial,
    mapTeamMember,
    mapCertification,
    mapWhyChooseUs,
    mapMilestone,
    // 安全工具
    sanitizeHTML,
    safeText,
    safeURL
  };
}