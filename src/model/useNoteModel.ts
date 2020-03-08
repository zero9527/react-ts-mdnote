import { useState, useEffect, useRef } from 'react';
// import { useImmer } from 'use-immer';
import { createModel } from 'hox';
import { cacheUtil, CacheUtil } from '@/utils/cacheUtil';
import fileApi from '@/api/file';
import { dateFormate } from '@/utils';

export interface NoteItem {
  id: string;
  date: string;
  desc: string;
  data: any;
}
const maxAgeConfig = {
  '0': 0,
  '24h': 24 * 60 * 60 * 1000,
  '7day': 7 * 24 * 60 * 60 * 1000
};
type MaxAge = keyof typeof maxAgeConfig;

const NoteSkeleton: NoteItem[] = [{ id: '', date: '', desc: '', data: '' }];

// 管理 NoteList
const useNoteModel = () => {
  const [version, setVersion] = useState(`${Date.now()}`);
  const [loading, setLoading] = useState(false);
  const cache = useRef<CacheUtil>(
    cacheUtil({ cacheKey: 'note-list', version })
  );
  const [noteList, setNoteList] = useState<NoteItem[]>(
    cache.current.getData<NoteItem[]>() || NoteSkeleton
  );

  useEffect(() => {
    checkVersion();

    if (noteList[0]?.id === '') {
      setLoading(true);
      import('./data.js').then(({ default: data }) => {
        const templist: NoteItem[] = data;

        updateNoteList(filterData(templist));
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    // console.log('noteList: ', noteList);
    if (noteList) cache.current.setData<NoteItem[]>(noteList);
  }, [noteList]);

  // 过滤数据
  function filterData(arr: NoteItem[]) {
    const all = [...noteList, ...arr];
    const newArr: NoteItem[] = [];
    all.forEach(item => {
      if (item.id && !newArr.some(i => i.id === item.id)) {
        newArr.push(item);
      }
    });
    return newArr;
  }

  // 请求数据
  const fetchNoteById = async (id: string) => {
    // 默认显示为md文件
    // 这里文件名不能下划线'_'开头，不然本地可以获取到，但是github page上面会404
    const config = [
      'getDemo1Md',
      'getReactHookMd',
      'getPromiseMd',
      'getCalendarMd'
    ];
    if (!id) return;
    try {
      const res: any = await fileApi[config[id]]();
      return res;
    } catch (err) {
      console.error('fetch error: ', err);
    }
  };

  // 检查缓存版本
  const checkVersion = (maxAge: MaxAge = '24h') => {
    // 24小时清缓存
    if (Number(version) + maxAgeConfig[maxAge] <= Date.now()) {
      console.log('清缓存');
      setVersion(`${Date.now()}`);
      updateNoteList([]);
      cache.current.updateVersion(`${Date.now()}`);
    }
    const temp = cache.current.getData<NoteItem[]>();
    if (temp) updateNoteList(temp);
  };

  // 获取数据
  const getNoteById = (id: string) => {
    checkVersion();
    const item = noteList?.find(note => note.id === id);
    if (item) return item;
    return null;
  };

  // 更新某条数据
  const updateNoteById = (id: string, data: any) => {
    // 新增
    if (!id) id = `${Date.now()}`;

    setNoteList((list: NoteItem[]) => {
      const itemIndex = list.findIndex((note: NoteItem) => note.id === id);
      const date = dateFormate({ timeStamp: Date.now(), splitChar: '/' });

      if (itemIndex < 0)
        list.push({ id, data, date, desc: getTitleByData(data) });
      else list[itemIndex] = { id, data, date, desc: getTitleByData(data) };

      return sortList(list).map(i => i);
    });
  };

  // 更新数据
  const updateNoteList = (data: any) => {
    const sortArr = sortList(data);
    setNoteList(() => sortArr);
  };

  // 排序，时间降序
  const sortList = (arr: NoteItem[]): NoteItem[] => {
    if (arr.length <= 1) return arr;
    const mid: NoteItem = arr.shift()!;
    const left: NoteItem[] = [];
    const right: NoteItem[] = [];

    arr.forEach((item: NoteItem) => {
      const midTime = new Date(mid.date).getTime();
      const itemTime = new Date(item.date).getTime();
      if (itemTime <= midTime) left.push(item);
      else right.push(item);
    });

    return sortList(right)
      .concat(mid)
      .concat(sortList(left));
  };

  const getTitleByData = (data: string) => {
    if (!data.includes('\n')) return data;
    return data.substring(0, data.indexOf('\n'));
  };

  const getNoteList = () => {
    return noteList;
  };

  // 清缓存
  const clearCache = () => {
    cache.current.clear();
  };

  return {
    loading,
    noteList,
    getNoteList,
    getNoteById,
    updateNoteById,
    updateNoteList,
    fetchNoteById,
    clearCache
  };
};

export default createModel(useNoteModel);
