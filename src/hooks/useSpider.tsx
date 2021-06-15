import { useState, useEffect } from 'react';
import axios from 'axios';

import { config } from '../config';

export const useSpider = (spiderName: string) => {
  const { backend } = config;
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: false,
  });
  const url = `${backend.url_start}${spiderName}${backend.url_end}`;

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setState({
          data: data.items,
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
