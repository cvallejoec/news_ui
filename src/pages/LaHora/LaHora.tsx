import React from 'react';

import { config } from '../../config';
import { useSpider, getCategories } from '../../hooks/useSpider';
import { TabsC, TabProps } from '../../components/Tabs/Tabs';
import { Articles } from '../../components/Articles/Articles';
import { Loading } from '../../components/Loading/Loading';

export const LaHora = () => {
  const { spiders } = config;
  const { data, loading } = useSpider(spiders.la_hora);
  const categories = getCategories(data);

  const tabs: TabProps[] = categories.map((category) => {
    return {
      label: category,
      children: (
        <>
          {data.length > 0 && (
            <Articles
              news={data.filter((item) => item.category === category)}
            />
          )}
        </>
      ),
    };
  });

  return loading ? <Loading /> : <TabsC tabs={tabs} />;
};
