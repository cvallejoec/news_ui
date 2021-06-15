import React from 'react';

import { config } from '../../config';
import { useSpider } from '../../hooks/useSpider';
// import { Article } from '../../components/Article/Article';
import { Articles } from '../../components/Articles/Articles';

export const ElComercio = () => {
  const { spiders } = config;
  const { data, loading } = useSpider(spiders.el_comercio);

  return (
    <div>
      <h1>El Comercio</h1>
      {loading && <p>Cargando...</p>}
      {data.length > 0 && <Articles news={data} />}
    </div>
  );
};
