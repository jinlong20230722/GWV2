// @ts-ignore;
import React, { useState, useRef, useEffect, useCallback } from 'react';
// @ts-ignore;
import { X, CheckCircle, Calendar, Award, FileText } from 'lucide-react';

const credentials = [{
  id: 1,
  name: '保安服务许可证',
  icon: 'Shield',
  certificateNumber: 'GA-BA-2024-001234',
  issuingAuthority: '中华人民共和国公安部',
  issueDate: '2024-01-15',
  validUntil: '2029-01-14',
  description: '具备提供专业保安服务的合法资质，涵盖人防、技防、物防等全方位安保服务。',
  image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600'
}, {
  id: 2,
  name: 'ISO9001认证',
  icon: 'Award',
  certificateNumber: 'ISO-9001-2024-5678',
  issuingAuthority: '国际标准化组织(ISO)',
  issueDate: '2024-03-20',
  validUntil: '2027-03-19',
  description: '通过ISO9001质量管理体系认证，确保服务质量达到国际标准。',
  image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600'
}, {
  id: 3,
  name: '安防工程资质',
  icon: 'Lock',
  certificateNumber: 'AF-GC-2024-9012',
  issuingAuthority: '中国安全防范产品行业协会',
  issueDate: '2024-02-10',
  validUntil: '2028-02-09',
  description: '具备安防系统设计、施工、维护的专业资质，可承接各类安防工程项目。',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'
}, {
  id: 4,
  name: 'AAA级信用企业',
  icon: 'Star',
  certificateNumber: 'CRED-AAA-2024-3456',
  issuingAuthority: '中国企业信用评价中心',
  issueDate: '2024-04-05',
  validUntil: '2026-04-04',
  description: '企业信用评级最高等级，代表良好的商业信誉和履约能力。',
  image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600'
}];
export const useCredentialModal = () => {
  const [selectedCredential, setSelectedCredential] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const timeoutRef = useRef(null);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  const openCredential = useCallback(credentialId => {
    if (!isMounted) return;
    const credential = credentials.find(c => c.id === credentialId);
    if (credential) {
      setSelectedCredential(credential);
      setIsModalOpen(true);
    }
  }, [isMounted]);
  const closeModal = useCallback(() => {
    if (!isMounted) return;
    setIsModalOpen(false);
    timeoutRef.current = setTimeout(() => {
      if (isMounted) {
        setSelectedCredential(null);
      }
    }, 300);
  }, [isMounted]);
  return {
    credentials,
    selectedCredential,
    isModalOpen,
    openCredential,
    closeModal
  };
};
export const CredentialDetailModal = ({
  credential,
  isOpen,
  onClose
}) => {
  if (!isOpen || !credential) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-[#0A1628] to-[#2D3748] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37]/30">
        {/* 关闭按钮 */}
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 rounded-full flex items-center justify-center transition-all duration-300 z-10">
          <X className="w-5 h-5 text-[#D4AF37]" />
        </button>

        {/* 证书图片 */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <img src={credential.image} alt={credential.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white font-serif mb-2">{credential.name}</h3>
          </div>
        </div>

        {/* 证书详情 */}
        <div className="p-8">
          {/* 证书编号 */}
          <div className="flex items-center space-x-3 mb-6 p-4 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
            <FileText className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <div className="text-gray-400 text-sm">证书编号</div>
              <div className="text-[#D4AF37] font-bold font-mono">{credential.certificateNumber}</div>
            </div>
          </div>

          {/* 详细信息 */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start space-x-4 p-4 bg-[#2D3748]/50 rounded-xl">
              <Award className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-400 text-sm">颁发机构</div>
                <div className="text-white font-semibold">{credential.issuingAuthority}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-4 p-4 bg-[#2D3748]/50 rounded-xl">
                <Calendar className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-400 text-sm">颁发日期</div>
                  <div className="text-white font-semibold">{credential.issueDate}</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-[#2D3748]/50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-400 text-sm">有效期至</div>
                  <div className="text-white font-semibold">{credential.validUntil}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 资质描述 */}
          <div className="p-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-xl border-l-4 border-[#D4AF37]">
            <p className="text-gray-300 leading-relaxed">{credential.description}</p>
          </div>
        </div>
      </div>
    </div>;
};
export default {
  CredentialDetailModal,
  useCredentialModal,
  credentials
};