import React from 'react';

import { config } from '../../config';
import { useSpider } from '../../hooks/useSpider';

export const ElComercio = () => {
  const { spiders } = config;
  const { data, loading } = useSpider(spiders.el_comercio);

  return (
    <div>
      <h1>El Comercio</h1>
      {loading && <p>Cargando...</p>}
      {data.length > 0 && data.map((item: any) => <h3>{item.title}</h3>)}
    </div>
  );
};
