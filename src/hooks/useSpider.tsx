import { useState, useEffect } from 'react';
import axios from 'axios';

import { config } from '../config';
import { News, New } from '../types/new.type';

export type UseSpider = (spiderName: string) => {
  data: News;
  loading: boolean;
  error: boolean;
};

export const useSpider: UseSpider = (spiderName: string) => {
  const { backend } = config;
  const [state, setState] = useState({
    data: [] as News,
    loading: true,
    error: false,
  });
  const url = `${backend.url_start}${spiderName}${backend.url_end}`;

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        const retrievedNews = data.items as News;
        retrievedNews.sort((a, b) =>
          a.time < b.time ? 1 : b.time < a.time ? -1 : 0
        );
        setState({
          data: retrievedNews,
          loading: false,
          error: false,
        });
      })
      .catch((e) => {
        setState({
          data: [],
          loading: false,
          error: e,
        });
      });
  }, [url]);

  return state;
};

export const getCategories = (data: New[]): string[] => {
  let categories: string[] = [];
  data.map((item) => {
    if (item.category && !categories.includes(item.category)) {
      return categories.push(item.category);
    } else {
      return '';
    }
  });
  categories.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  return categories;
};
