import { useState, useEffect, useCallback, useRef } from 'react';

export function useDataSource(dataSourceName) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [records, setRecords] = useState([]);
  const [total, setTotal] = useState(0);
  const isMountedRef = useRef(true);
  
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const create = useCallback(async (data) => {
    if (!isMountedRef.current) return;
    
    setLoading(true);
    setError(null);
    try {
      const result = await $w.cloud.callDataSource({
        dataSourceName,
        methodName: 'wedaCreateV2',
        params: { data }
      });
      return result;
    } catch (e) {
      if (isMountedRef.current) {
        setError(e.message || '创建失败');
      }
      console.error('Create error:', e);
      throw e;
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [dataSourceName]);

  const update = useCallback(async (filter, data) => {
    if (!isMountedRef.current) return;
    
    setLoading(true);
    setError(null);
    try {
      const result = await $w.cloud.callDataSource({
        dataSourceName,
        methodName: 'wedaUpdateV2',
        params: { data, filter }
      });
      return result;
    } catch (e) {
      if (isMountedRef.current) {
        setError(e.message || '更新失败');
      }
      console.error('Update error:', e);
      throw e;
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [dataSourceName]);

  const deleteItem = useCallback(async (filter) => {
    if (!isMountedRef.current) return;
    
    setLoading(true);
    setError(null);
    try {
      const result = await $w.cloud.callDataSource({
        dataSourceName,
        methodName: 'wedaDeleteV2',
        params: { filter }
      });
      return result;
    } catch (e) {
      if (isMountedRef.current) {
        setError(e.message || '删除失败');
      }
      console.error('Delete error:', e);
      throw e;
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [dataSourceName]);

  const getOne = useCallback(async (filter) => {
    if (!isMountedRef.current) return;
    
    setLoading(true);
    setError(null);
    try {
      const result = await $w.cloud.callDataSource({
        dataSourceName,
        methodName: 'wedaGetItemV2',
        params: { 
          filter, 
          select: { $master: true } 
        }
      });
      
      if (isMountedRef.current) {
        setData(result);
      }
      return result;
    } catch (e) {
      if (isMountedRef.current) {
        setError(e.message || '查询失败');
      }
      console.error('Get one error:', e);
      throw e;
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [dataSourceName]);

  const getList = useCallback(async (options = {}) => {
    if (!isMountedRef.current) return;
    
    setLoading(true);
    setError(null);
    try {
      const params = {
        filter: { where: {} },
        select: { $master: true },
        getCount: true,
        pageSize: options.pageSize || 20,
        pageNumber: options.pageNumber || 1,
        orderBy: options.orderBy || [{ createdAt: 'desc' }]
      };
      
      if (options.filter) {
        params.filter = options.filter;
      }

      const result = await $w.cloud.callDataSource({
        dataSourceName,
        methodName: 'wedaGetRecordsV2',
        params
      });
      
      if (isMountedRef.current) {
        setRecords(result.records || []);
        setTotal(result.total || 0);
      }
      return result;
    } catch (e) {
      if (isMountedRef.current) {
        setError(e.message || '查询列表失败');
      }
      console.error('Get list error:', e);
      throw e;
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [dataSourceName]);

  return {
    loading,
    error,
    data,
    records,
    total,
    create,
    update,
    delete: deleteItem,
    getOne,
    getList,
    setData,
    setRecords
  };
}

export function getFilterById(id) {
  return {
    where: {
      $and: [{ _id: { $eq: id } }]
    }
  };
}

export function getFilterByStatus(status) {
  return {
    where: {
      $and: [{ status: { $eq: status } }]
    }
  };
}
