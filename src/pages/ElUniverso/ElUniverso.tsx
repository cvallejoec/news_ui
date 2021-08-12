import React from 'react';

import { config } from '../../config';
import { NewsProvider } from '../../types/new.type';
import { useSpider, getCategories } from '../../hooks/useSpider';
import { TabsC, TabProps } from '../../components/Tabs/Tabs';
import { Articles } from '../../components/Articles/Articles';
import { Loading } from '../../components/Loading/Loading';

export const ElUniverso = () => {
  const { spiders } = config;
  const { data, loading } = useSpider(spiders.el_universo);
  const categories = getCategories(data);

  const tabs: TabProps[] = categories.map((category) => {
    return {
      label: category,
      children: (
        <>
          {data.length > 0 && (
            <Articles
              news={data.filter((item) => item.category === category)}
              newProvider={NewsProvider.EL_UNIVERSO}
              newProviderCategory={category}
            />
          )}
        </>
      ),
    };
  });

  return loading ? (
    <Loading />
  ) : (
    <TabsC tabs={tabs} newProvider={NewsProvider.EL_UNIVERSO} />
  );
};
