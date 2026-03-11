// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Clock, User, FileText, Filter, Search, Trash2, Download, Eye } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

function LogDetailModal({
  log,
  onClose
}) {
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">操作日志详情</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium text-gray-500">操作时间</label>
              <p className="text-gray-900 mt-1">{log.timestamp}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">操作人</label>
              <p className="text-gray-900 mt-1">{log.user}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">操作类型</label>
              <p className="text-gray-900 mt-1">{getTypeName(log.type)}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">数据模型</label>
              <p className="text-gray-900 mt-1">{log.dataSource}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">IP地址</label>
              <p className="text-gray-900 mt-1 font-mono">{log.ip}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">User Agent</label>
              <p className="text-gray-900 mt-1 text-sm">{log.userAgent}</p>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">操作描述</label>
            <p className="text-gray-900 mt-1">{log.description}</p>
          </div>
          
          {log.dataBefore && <div className="mt-6">
              <label className="text-sm font-medium text-gray-500">变更前数据</label>
              <pre className="mt-2 p-4 bg-gray-50 rounded-lg text-sm overflow-x-auto">
                {JSON.stringify(log.dataBefore, null, 2)}
              </pre>
            </div>}
          
          {log.dataAfter && <div className="mt-6">
              <label className="text-sm font-medium text-gray-500">变更后数据</label>
              <pre className="mt-2 p-4 bg-gray-50 rounded-lg text-sm overflow-x-auto">
                {JSON.stringify(log.dataAfter, null, 2)}
              </pre>
            </div>}
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
          <Button onClick={onClose} variant="outline">
            关闭
          </Button>
        </div>
      </div>
    </div>;
}
function generateMockLogs() {
  const types = ['create', 'update', 'delete', 'login', 'system'];
  const dataSources = ['website_config', 'defense_service', 'success_case', 'company_info', 'contact_inquiry'];
  const users = ['管理员', '内容编辑', '系统管理员'];
  const descriptions = ['更新了网站配置信息', '新增了一条成功案例', '修改了服务描述内容', '删除了过期的团队成员', '查看了联系咨询记录', '登录了后台管理系统', '更新了首页轮播图', '修改了导航菜单顺序', '启用了新的服务分类', '系统自动备份数据'];
  return Array.from({
    length: 50
  }, (_, i) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - i * 15);
    return {
      id: `log_${i + 1}`,
      timestamp: date.toLocaleString('zh-CN'),
      user: users[i % users.length],
      type: types[i % types.length],
      dataSource: dataSources[i % dataSources.length],
      description: descriptions[i % descriptions.length],
      ip: `192.168.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 255)}`,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      dataBefore: i % 3 === 0 ? {
        oldValue: '旧数据'
      } : null,
      dataAfter: i % 3 === 0 ? {
        newValue: '新数据'
      } : null
    };
  });
}
function generateCSV(logs) {
  const headers = ['时间', '操作人', '操作类型', '数据模型', '操作描述', 'IP地址'];
  const rows = logs.map(log => [log.timestamp, log.user, getTypeName(log.type), log.dataSource, log.description, log.ip]);
  return [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
}
function getTypeColor(type) {
  const colors = {
    create: 'bg-green-100 text-green-800',
    update: 'bg-blue-100 text-blue-800',
    delete: 'bg-red-100 text-red-800',
    login: 'bg-purple-100 text-purple-800',
    system: 'bg-gray-100 text-gray-800'
  };
  return colors[type] || 'bg-gray-100 text-gray-800';
}
function getTypeName(type) {
  const names = {
    create: '新增',
    update: '更新',
    delete: '删除',
    login: '登录',
    system: '系统'
  };
  return names[type] || type;
}
export default function OperationLogManager() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedLog, setSelectedLog] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  useEffect(() => {
    loadLogs();
  }, []);
  const loadLogs = () => {
    setLoading(true);
    setTimeout(() => {
      const mockLogs = generateMockLogs();
      setLogs(mockLogs);
      setLoading(false);
    }, 500);
  };
  const filteredLogs = logs.filter(log => {
    const matchesSearch = JSON.stringify(log).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || log.type === filterType;
    return matchesSearch && matchesType;
  });
  const viewLogDetail = log => {
    setSelectedLog(log);
    setIsDetailModalOpen(true);
  };
  const exportLogs = () => {
    const csvContent = generateCSV(filteredLogs);
    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `operation_logs_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };
  const clearLogs = () => {
    if (confirm('确定要清空所有操作日志吗？此操作不可恢复。')) {
      setLogs([]);
    }
  };
  return <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#D4AF37]" />
              操作日志
            </h2>
            <p className="text-gray-500 mt-1">记录所有数据操作和系统变更</p>
          </div>
          
          <div className="flex gap-3">
            <Button onClick={exportLogs} variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              导出
            </Button>
            <Button onClick={clearLogs} variant="outline" className="text-red-600 hover:text-red-700 flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              清空
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="搜索操作记录..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select value={filterType} onChange={e => setFilterType(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50">
              <option value="all">全部类型</option>
              <option value="create">新增</option>
              <option value="update">更新</option>
              <option value="delete">删除</option>
              <option value="login">登录</option>
              <option value="system">系统</option>
            </select>
          </div>
        </div>
      </div>
      
      {loading ? <div className="p-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-gray-500">加载中...</p>
        </div> : <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  时间
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作人
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作类型
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  数据模型
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作描述
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IP地址
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLogs.map(log => <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{log.timestamp}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{log.user}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(log.type)}`}>
                      {getTypeName(log.type)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{log.dataSource}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900 max-w-xs truncate block">
                      {log.description}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500 font-mono">{log.ip}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => viewLogDetail(log)} className="text-blue-600 hover:text-blue-900 inline-flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      详情
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
          
          {filteredLogs.length === 0 && <div className="p-12 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">暂无日志</h3>
              <p className="text-gray-500">没有找到符合条件的操作记录</p>
            </div>}
        </div>}
      
      {isDetailModalOpen && selectedLog && <LogDetailModal log={selectedLog} onClose={() => setIsDetailModalOpen(false)} />}
    </div>;
}