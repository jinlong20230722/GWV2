// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Database, Plus, Edit2, Trash2, Eye, Save, X, Settings, FileText, Shield, Users, TrendingUp, Layout, Bell, Search, Filter, RefreshCw } from 'lucide-react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';

import { useDataSource, getFilterById } from '@/hooks/useDataSource.js';
const DATA_SOURCE_CONFIGS = {
  website_config: {
    title: '网站配置',
    icon: Settings,
    color: '#D4AF37'
  },
  defense_service: {
    title: '四大防线',
    icon: Shield,
    color: '#C0C0C0'
  },
  success_case: {
    title: '成功案例',
    icon: FileText,
    color: '#D4AF37'
  },
  company_info: {
    title: '公司信息',
    icon: Layout,
    color: '#C0C0C0'
  },
  contact_inquiry: {
    title: '联系咨询',
    icon: Users,
    color: '#D4AF37'
  },
  home_banner: {
    title: '首页轮播',
    icon: FileText,
    color: '#C0C0C0'
  },
  testimonial: {
    title: '客户评价',
    icon: FileText,
    color: '#D4AF37'
  },
  honor_award: {
    title: '荣誉奖项',
    icon: Shield,
    color: '#C0C0C0'
  },
  team_member: {
    title: '团队成员',
    icon: Users,
    color: '#D4AF37'
  },
  certification: {
    title: '资质认证',
    icon: Shield,
    color: '#C0C0C0'
  },
  honor_title: {
    title: '荣誉称号',
    icon: Shield,
    color: '#D4AF37'
  },
  job_position: {
    title: '招聘职位',
    icon: FileText,
    color: '#C0C0C0'
  },
  navigation: {
    title: '导航菜单',
    icon: Layout,
    color: '#D4AF37'
  },
  statistics: {
    title: '统计数据',
    icon: TrendingUp,
    color: '#C0C0C0'
  },
  why_choose_us: {
    title: '选择理由',
    icon: Shield,
    color: '#D4AF37'
  },
  milestone: {
    title: '发展历程',
    icon: TrendingUp,
    color: '#C0C0C0'
  },
  case_category: {
    title: '案例分类',
    icon: FileText,
    color: '#D4AF37'
  }
};
function Sidebar({
  selectedSource,
  onSelect
}) {
  return <aside className="w-72 bg-[#0A1628] min-h-screen p-4 space-y-2">
      <div className="p-4 mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Database className="w-6 h-6 text-[#D4AF37]" />
          数据管理
        </h2>
      </div>
      
      {Object.entries(DATA_SOURCE_CONFIGS).map(([key, config]) => <button key={key} onClick={() => onSelect(key)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${selectedSource === key ? 'bg-[#D4AF37] text-[#0A1628]' : 'text-gray-300 hover:bg-white/10'}`}>
          <config.icon className="w-5 h-5" />
          <span className="font-medium">{config.title}</span>
        </button>)}
    </aside>;
}
function Header({
  title,
  icon: Icon,
  color,
  onRefresh,
  onCreate
}) {
  return <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{
          backgroundColor: `${color}20`
        }}>
            <Icon className="w-6 h-6" style={{
            color
          }} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-500">管理{title}数据</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button onClick={onRefresh} variant="outline" className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            刷新
          </Button>
          <Button onClick={onCreate} className="bg-[#D4AF37] hover:bg-[#C4A027] flex items-center gap-2">
            <Plus className="w-4 h-4" />
            新增
          </Button>
        </div>
      </div>
    </div>;
}
function Toolbar({
  searchTerm,
  onSearchChange,
  total,
  currentCount
}) {
  return <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="搜索记录..." value={searchTerm} onChange={e => onSearchChange(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50" />
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          显示 <span className="font-semibold text-gray-900">{currentCount}</span> 条，
          共 <span className="font-semibold text-gray-900">{total}</span> 条
        </div>
      </div>
    </div>;
}
function DataTable({
  records,
  loading,
  onEdit,
  onDelete,
  dataSourceName
}) {
  if (loading) {
    return <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37] mx-auto mb-4"></div>
        <p className="text-gray-500">加载中...</p>
      </div>;
  }
  if (!records.length) {
    return <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <Database className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">暂无数据</h3>
        <p className="text-gray-500">点击"新增"按钮添加第一条记录</p>
      </div>;
  }
  const displayFields = getDisplayFields(records[0]);
  return <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {displayFields.map(field => <th key={field} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {formatFieldName(field)}
                </th>)}
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {records.map(record => <tr key={record._id} className="hover:bg-gray-50">
                {displayFields.map(field => <td key={field} className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 max-w-xs truncate">
                      {formatFieldValue(record[field])}
                    </div>
                  </td>)}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => onEdit(record)} className="text-blue-600 hover:text-blue-900 p-1">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => onDelete(record)} className="text-red-600 hover:text-red-900 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
}
function Pagination({
  currentPage,
  total,
  pageSize,
  onPageChange
}) {
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;
  return <div className="mt-6 flex items-center justify-between">
      <p className="text-sm text-gray-500">
        第 <span className="font-semibold">{currentPage}</span> 页，
        共 <span className="font-semibold">{totalPages}</span> 页
      </p>
      <div className="flex gap-2">
        <Button variant="outline" disabled={currentPage <= 1} onClick={() => onPageChange(currentPage - 1)}>
          上一页
        </Button>
        <Button variant="outline" disabled={currentPage >= totalPages} onClick={() => onPageChange(currentPage + 1)}>
          下一页
        </Button>
      </div>
    </div>;
}
function DataFormModal({
  isOpen,
  onClose,
  formData,
  onFormChange,
  onSave,
  loading,
  isEdit,
  dataSourceName
}) {
  const handleChange = (field, value) => {
    onFormChange({
      ...formData,
      [field]: value
    });
  };
  const fields = Object.keys(formData).length > 0 ? Object.keys(formData) : getDefaultFields(dataSourceName);
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {isEdit ? '编辑记录' : '新增记录'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-96 space-y-4">
          {fields.map(field => <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {formatFieldName(field)}
              </label>
              {isBooleanField(field) ? <select value={formData[field] || ''} onChange={e => handleChange(field, e.target.value === 'true')} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50">
                  <option value="true">是</option>
                  <option value="false">否</option>
                </select> : isNumberField(field) ? <input type="number" value={formData[field] || ''} onChange={e => handleChange(field, Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50" /> : isLongTextField(field) ? <textarea value={formData[field] || ''} onChange={e => handleChange(field, e.target.value)} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50" /> : <input type="text" value={formData[field] || ''} onChange={e => handleChange(field, e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50" />}
            </div>)}
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            取消
          </Button>
          <Button onClick={onSave} className="bg-[#D4AF37] hover:bg-[#C4A027]" disabled={loading}>
            <Save className="w-4 h-4 mr-2" />
            {loading ? '保存中...' : '保存'}
          </Button>
        </div>
      </div>
    </div>;
}
function getDisplayFields(record) {
  const allFields = Object.keys(record);
  const priorityFields = ['title', 'name', 'label', 'year', 'client', 'status', 'is_active', 'order'];
  const displayFields = priorityFields.filter(f => allFields.includes(f));
  const otherFields = allFields.filter(f => !priorityFields.includes(f) && !['_id', 'createdAt', 'updatedAt', 'createBy', 'updateBy'].includes(f));
  return [...displayFields, ...otherFields].slice(0, 6);
}
function formatFieldName(field) {
  const fieldNames = {
    title: '标题',
    name: '名称',
    label: '标签',
    description: '描述',
    year: '年份',
    client: '客户',
    status: '状态',
    is_active: '启用',
    order: '排序',
    icon_name: '图标',
    image: '图片',
    email: '邮箱',
    phone: '电话',
    telephone: '电话',
    address: '地址'
  };
  return fieldNames[field] || field;
}
function formatFieldValue(value) {
  if (value === null || value === undefined) return '-';
  if (typeof value === 'boolean') return value ? '是' : '否';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}
function isBooleanField(field) {
  return ['is_active', 'status'].includes(field);
}
function isNumberField(field) {
  return ['order', 'year', 'sort'].includes(field);
}
function isLongTextField(field) {
  return ['description', 'content', 'note', 'detail'].includes(field);
}
function getDefaultFields(dataSourceName) {
  const defaultFields = {
    website_config: ['site_name', 'site_description', 'copyright'],
    defense_service: ['title', 'subtitle', 'description', 'icon_name'],
    success_case: ['title', 'client', 'description', 'year'],
    company_info: ['company_name', 'founded_year', 'story'],
    contact_inquiry: ['name', 'email', 'phone', 'content'],
    home_banner: ['title', 'subtitle', 'description'],
    testimonial: ['name', 'position', 'company', 'content'],
    honor_award: ['title', 'year', 'issuer'],
    team_member: ['name', 'position', 'bio'],
    certification: ['name', 'issuer', 'year'],
    honor_title: ['type', 'title', 'client_name'],
    job_position: ['title', 'department', 'location'],
    navigation: ['name', 'page_id', 'order'],
    statistics: ['number', 'label', 'icon_name'],
    why_choose_us: ['title', 'description', 'icon_name'],
    milestone: ['year', 'title', 'description'],
    case_category: ['name', 'icon_name', 'order']
  };
  return defaultFields[dataSourceName] || ['title', 'description'];
}
export default function AdminDataSourceManager() {
  const {
    toast
  } = useToast();
  const [selectedSource, setSelectedSource] = useState('website_config');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const sourceConfig = DATA_SOURCE_CONFIGS[selectedSource];
  const {
    loading,
    records,
    total,
    getList,
    create,
    update,
    delete: deleteItem
  } = useDataSource(selectedSource);
  useEffect(() => {
    loadData();
  }, [selectedSource, pageNumber]);
  const loadData = async () => {
    try {
      await getList({
        pageNumber,
        pageSize: 10
      });
    } catch (error) {
      toast({
        title: '加载失败',
        description: error.message,
        variant: 'destructive'
      });
    }
  };
  const handleCreate = () => {
    setEditingItem(null);
    setFormData({});
    setIsModalOpen(true);
  };
  const handleEdit = item => {
    setEditingItem(item);
    setFormData({
      ...item
    });
    setIsModalOpen(true);
  };
  const handleDelete = async item => {
    if (!confirm(`确定要删除这条记录吗？`)) return;
    try {
      await deleteItem(getFilterById(item._id));
      toast({
        title: '删除成功',
        description: '记录已删除'
      });
      loadData();
    } catch (error) {
      toast({
        title: '删除失败',
        description: error.message,
        variant: 'destructive'
      });
    }
  };
  const handleSave = async () => {
    try {
      if (editingItem) {
        await update(getFilterById(editingItem._id), formData);
        toast({
          title: '更新成功',
          description: '记录已更新'
        });
      } else {
        await create(formData);
        toast({
          title: '创建成功',
          description: '新记录已创建'
        });
      }
      setIsModalOpen(false);
      loadData();
    } catch (error) {
      toast({
        title: '操作失败',
        description: error.message,
        variant: 'destructive'
      });
    }
  };
  const filteredRecords = records.filter(record => JSON.stringify(record).toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar selectedSource={selectedSource} onSelect={setSelectedSource} />
        
        <main className="flex-1 p-6">
          <Header title={sourceConfig.title} icon={sourceConfig.icon} color={sourceConfig.color} onRefresh={loadData} onCreate={handleCreate} />
          
          <Toolbar searchTerm={searchTerm} onSearchChange={setSearchTerm} total={total} currentCount={records.length} />
          
          <DataTable records={filteredRecords} loading={loading} onEdit={handleEdit} onDelete={handleDelete} dataSourceName={selectedSource} />
          
          <Pagination currentPage={pageNumber} total={total} pageSize={10} onPageChange={setPageNumber} />
        </main>
      </div>
      
      {isModalOpen && <DataFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} formData={formData} onFormChange={setFormData} onSave={handleSave} loading={loading} isEdit={!!editingItem} dataSourceName={selectedSource} />}
    </div>;
}