import { useState, useEffect } from 'react';
import axios from 'axios';

import { config } from '../config';
import { News } from '../types/new.type';

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
