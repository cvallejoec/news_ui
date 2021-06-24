import React from 'react';

import { config } from '../../config';
import { useSpider } from '../../hooks/useSpider';
import { TabsC, TabProps } from '../../components/Tabs/Tabs';
import { Articles } from '../../components/Articles/Articles';
import { Loading } from '../../components/Loading/Loading';

export const ElComercio = () => {
  const { spiders } = config;
  const { data, loading } = useSpider(spiders.el_comercio);

  const tabs: TabProps[] = [
    {
      label: 'Última Hora',
      children: (
        <>
          {loading && <Loading />}
          {data.length > 0 && <Articles news={data} />}
        </>
      ),
    },
    {
      label: 'Política',
      children: <h3>Política</h3>,
    },
    {
      label: 'Economía',
      children: <h3>Economía</h3>,
    },
  ];

  return <TabsC tabs={tabs} />;
};
