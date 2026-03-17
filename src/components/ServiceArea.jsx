// @ts-ignore;
import React, { useState, useMemo } from 'react';
// @ts-ignore;
import { MapPin, Phone, Building2, CheckCircle, Star } from 'lucide-react';

const areaData = [{
  _id: "1",
  region: "华北地区",
  province: "北京市",
  city: "北京",
  is_municipality: true,
  coverage_level: "核心覆盖",
  description: "总部所在地，拥有最完整的服务团队和资源，可提供全方位的安保服务。",
  office_address: "北京市朝阳区建国路88号SOHO现代城A座18层",
  contact_phone: "400-888-8888",
  is_headquarters: true,
  order: 1,
  is_active: true
}, {
  _id: "2",
  region: "华北地区",
  province: "天津市",
  city: "天津",
  is_municipality: true,
  coverage_level: "核心覆盖",
  description: "紧邻北京的重要城市，提供与北京同等级别的安保服务。",
  office_address: "天津市和平区南京路189号津汇广场2座12层",
  contact_phone: "400-888-8889",
  is_headquarters: false,
  order: 2,
  is_active: true
}, {
  _id: "3",
  region: "华北地区",
  province: "河北省",
  city: "石家庄",
  is_municipality: false,
  coverage_level: "重点覆盖",
  description: "河北省省会城市，服务覆盖石家庄及周边地区。",
  office_address: "石家庄市长安区中山东路322号先天下广场写字楼15层",
  contact_phone: "400-888-8890",
  is_headquarters: false,
  order: 3,
  is_active: true
}, {
  _id: "4",
  region: "华东地区",
  province: "上海市",
  city: "上海",
  is_municipality: true,
  coverage_level: "核心覆盖",
  description: "华东地区总部，服务覆盖上海及长三角地区。",
  office_address: "上海市浦东新区陆家嘴环路1000号恒生银行大厦25层",
  contact_phone: "400-888-8891",
  is_headquarters: false,
  order: 4,
  is_active: true
}, {
  _id: "5",
  region: "华东地区",
  province: "江苏省",
  city: "南京",
  is_municipality: false,
  coverage_level: "重点覆盖",
  description: "江苏省省会，服务覆盖南京及周边城市。",
  office_address: "南京市鼓楼区汉中路8号金轮国际广场20层",
  contact_phone: "400-888-8892",
  is_headquarters: false,
  order: 5,
  is_active: true
}, {
  _id: "6",
  region: "华东地区",
  province: "浙江省",
  city: "杭州",
  is_municipality: false,
  coverage_level: "重点覆盖",
  description: "浙江省省会，服务覆盖杭州及浙江全省。",
  office_address: "杭州市西湖区文三路398号东方通信大厦18层",
  contact_phone: "400-888-8893",
  is_headquarters: false,
  order: 6,
  is_active: true
}, {
  _id: "7",
  region: "华南地区",
  province: "广东省",
  city: "广州",
  is_municipality: false,
  coverage_level: "核心覆盖",
  description: "华南地区总部，服务覆盖广州及珠三角地区。",
  office_address: "广州市天河区珠江新城华夏路10号富力中心30层",
  contact_phone: "400-888-8894",
  is_headquarters: false,
  order: 7,
  is_active: true
}, {
  _id: "8",
  region: "华南地区",
  province: "广东省",
  city: "深圳",
  is_municipality: false,
  coverage_level: "核心覆盖",
  description: "经济特区，服务覆盖深圳及周边高新技术园区。",
  office_address: "深圳市福田区深南大道6011号NEO大厦A座22层",
  contact_phone: "400-888-8895",
  is_headquarters: false,
  order: 8,
  is_active: true
}, {
  _id: "9",
  region: "西南地区",
  province: "四川省",
  city: "成都",
  is_municipality: false,
  coverage_level: "重点覆盖",
  description: "西南地区中心城市，服务覆盖成都及西南地区。",
  office_address: "成都市锦江区人民南路二段1号仁恒置地广场25层",
  contact_phone: "400-888-8896",
  is_headquarters: false,
  order: 9,
  is_active: true
}, {
  _id: "10",
  region: "西北地区",
  province: "陕西省",
  city: "西安",
  is_municipality: false,
  coverage_level: "重点覆盖",
  description: "西北地区中心城市，服务覆盖西安及西北地区。",
  office_address: "西安市雁塔区高新路2号西安软件园15层",
  contact_phone: "400-888-8897",
  is_headquarters: false,
  order: 10,
  is_active: true
}, {
  _id: "11",
  region: "华中地区",
  province: "湖北省",
  city: "武汉",
  is_municipality: false,
  coverage_level: "重点覆盖",
  description: "华中地区中心城市，服务覆盖武汉及华中地区。",
  office_address: "武汉市江汉区建设大道568号新世界国贸大厦28层",
  contact_phone: "400-888-8898",
  is_headquarters: false,
  order: 11,
  is_active: true
}, {
  _id: "12",
  region: "东北地区",
  province: "辽宁省",
  city: "沈阳",
  is_municipality: false,
  coverage_level: "重点覆盖",
  description: "东北地区中心城市，服务覆盖沈阳及东北地区。",
  office_address: "沈阳市和平区青年大街286号华润大厦20层",
  contact_phone: "400-888-8899",
  is_headquarters: false,
  order: 12,
  is_active: true
}];
export default function ServiceArea() {
  const [activeRegion, setActiveRegion] = useState('all');
  const regions = ['all', '华北地区', '华东地区', '华南地区', '西南地区', '西北地区', '华中地区', '东北地区'];
  const filteredAreas = useMemo(() => {
    if (activeRegion === 'all') {
      return areaData.filter(item => item.is_active).sort((a, b) => a.order - b.order);
    }
    return areaData.filter(item => item.is_active && item.region === activeRegion).sort((a, b) => a.order - b.order);
  }, [activeRegion]);
  const coverageLevelColors = {
    '核心覆盖': 'from-[#D4AF37] to-[#C0C0C0]',
    '重点覆盖': 'from-blue-500 to-blue-600'
  };
  return <section className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-6">
            <MapPin className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold text-lg">全国覆盖</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            服务区域
            <span className="text-[#D4AF37] block mt-2">全国布局 就近服务</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            我们在全国各主要城市设有分支机构，确保能够快速响应您的安保需求
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regions.map(region => <button key={region} onClick={() => setActiveRegion(region)} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeRegion === region ? 'bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] text-[#0A1628]' : 'bg-[#2D3748] text-gray-300 hover:bg-[#2D3748]/80 border border-[#2D3748]'}`}>
              {region === 'all' ? '全部区域' : region}
            </button>)}
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-2xl p-6 text-center border border-[#2D3748]">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">12</div>
            <div className="text-gray-400">服务城市</div>
          </div>
          <div className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-2xl p-6 text-center border border-[#2D3748]">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">7</div>
            <div className="text-gray-400">覆盖区域</div>
          </div>
          <div className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-2xl p-6 text-center border border-[#2D3748]">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">4</div>
            <div className="text-gray-400">核心城市</div>
          </div>
          <div className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-2xl p-6 text-center border border-[#2D3748]">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">500+</div>
            <div className="text-gray-400">服务客户</div>
          </div>
        </div>

        {/* Area Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAreas.map(area => <div key={area._id} className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-3xl overflow-hidden border-2 border-transparent hover:border-[#D4AF37]/50 transition-all duration-300">
              {/* Card Header */}
              <div className="p-8">
                {/* Region Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#D4AF37] font-semibold text-sm">{area.region}</span>
                  {area.is_headquarters && <div className="flex items-center space-x-1 bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold">
                      <Star className="w-3 h-3 fill-current" />
                      <span>总部</span>
                    </div>}
                </div>

                {/* Coverage Level Badge */}
                <div className={`inline-flex items-center space-x-1 bg-gradient-to-r ${coverageLevelColors[area.coverage_level]} text-[#0A1628] px-4 py-2 rounded-full mb-6`}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-bold text-sm">{area.coverage_level}</span>
                </div>

                {/* City Name */}
                <div className="flex items-center space-x-3 mb-4">
                  <Building2 className="w-8 h-8 text-[#D4AF37]" />
                  <div>
                    <h3 className="text-2xl font-bold text-white font-serif">
                      {area.city}
                    </h3>
                    {!area.is_municipality && <p className="text-gray-400 text-sm">{area.province}</p>}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Office Address */}
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {area.office_address}
                  </p>
                </div>

                {/* Contact Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <a href={`tel:${area.contact_phone}`} className="text-white font-semibold hover:text-[#D4AF37] transition-colors">
                    {area.contact_phone}
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}