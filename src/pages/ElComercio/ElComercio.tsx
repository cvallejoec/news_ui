import React from 'react';

import { config } from '../../config';
import { useSpider } from '../../hooks/useSpider';
import { Articles } from '../../components/Articles/Articles';
import { Loading } from '../../components/Loading/Loading';

export const ElComercio = () => {
  const { spiders } = config;
  const { data, loading } = useSpider(spiders.el_comercio);

  return (
    <div>
      {/* <h1>El Comercio</h1> */}
      {loading && <Loading />}
      {data.length > 0 && <Articles news={data} />}
    </div>
  );
};
