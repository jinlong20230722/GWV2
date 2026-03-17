// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Award, Calendar, Building2, FileText, Shield, Clock, Users, DollarSign } from 'lucide-react';

// 资质认证展示组件
export function CredentialShowcase({
  credentials,
  onViewDetail
}) {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {credentials.filter(c => c.is_active).map((credential, index) => <CredentialCard key={credential._id} credential={credential} index={index} onViewDetail={() => onViewDetail && onViewDetail(credential)} />)}
    </div>;
}

// 单个资质卡片组件
export function CredentialCard({
  credential,
  index,
  onViewDetail
}) {
  return <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D4AF37]/10 group cursor-pointer" style={{
    animationDelay: `${index * 0.1}s`
  }} onClick={onViewDetail}>
      {/* 证书图标 */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
          <Award className="w-8 h-8 text-[#0A1628]" />
        </div>
        <div className="text-right">
          <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold rounded-full">
            {credential.year}年获得
          </span>
        </div>
      </div>
      
      {/* 证书标题 */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
        {credential.title}
      </h3>
      
      {/* 证书描述 */}
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {credential.description}
      </p>
      
      {/* 详细信息 */}
      <div className="space-y-3 pt-4 border-t border-[#2D3748]">
        {/* 颁发机构 */}
        {credential.issuer && <div className="flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-gray-300">
              <span className="text-gray-500">颁发机构:</span> {credential.issuer}
            </span>
          </div>}
        
        {/* 证书编号 */}
        {credential.certificate_number && <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-gray-300">
              <span className="text-gray-500">证书编号:</span> {credential.certificate_number}
            </span>
          </div>}
        
        {/* 有效期至 */}
        {credential.valid_until && <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-gray-300">
              <span className="text-gray-500">有效期至:</span> {credential.valid_until}
            </span>
          </div>}
      </div>
      
      {/* 查看详情按钮 */}
      <div className="mt-6">
        <button className="w-full bg-transparent border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center space-x-2">
          <Shield className="w-4 h-4" />
          <span>查看证书详情</span>
        </button>
      </div>
    </div>;
}

// 案例详情增强展示组件
export function EnhancedCaseDetail({
  caseData
}) {
  return <div className="space-y-6">
      {/* 项目基本信息 */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#2D3748]">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
          <FileText className="w-5 h-5 text-[#D4AF37]" />
          <span>项目基本信息</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 合作时间 */}
          {caseData.start_date && <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm text-gray-500">合作周期</span>
                <p className="text-white font-medium">
                  {caseData.start_date} {caseData.end_date ? `- ${caseData.end_date}` : '至今'}
                </p>
              </div>
            </div>}
          
          {/* 项目规模 */}
          {caseData.project_scale && <div className="flex items-start space-x-3">
              <Building2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm text-gray-500">项目规模</span>
                <p className="text-white font-medium">{caseData.project_scale}</p>
              </div>
            </div>}
          
          {/* 项目预算 */}
          {caseData.project_budget && <div className="flex items-start space-x-3">
              <DollarSign className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm text-gray-500">项目预算</span>
                <p className="text-white font-medium">{caseData.project_budget}</p>
              </div>
            </div>}
          
          {/* 团队规模 */}
          {caseData.team_size && <div className="flex items-start space-x-3">
              <Users className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm text-gray-500">团队规模</span>
                <p className="text-white font-medium">{caseData.team_size}</p>
              </div>
            </div>}
        </div>
      </div>
    </div>;
}