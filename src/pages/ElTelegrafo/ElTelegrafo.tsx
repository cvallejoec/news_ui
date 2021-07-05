import React from 'react';

import { config } from '../../config';
import { useSpider, getCategories } from '../../hooks/useSpider';
import { TabsC, TabProps } from '../../components/Tabs/Tabs';
import { Articles } from '../../components/Articles/Articles';
import { Loading } from '../../components/Loading/Loading';

export const ElTelegrafo = () => {
  const { spiders } = config;
  const { data: data_actualidad, loading: loading_actualidad } = useSpider(
    spiders.el_telegrafo_actualidad
  );
  const { data: data_empresariales, loading: loading_empresariales } =
    useSpider(spiders.el_telegrafo_empresariales);
  const { data: data_justicia, loading: loading_justicia } = useSpider(
    spiders.el_telegrafo_justicia
  );
  const { data: data_mundo, loading: loading_mundo } = useSpider(
    spiders.el_telegrafo_mundo
  );
  const { data: data_sociedad, loading: loading_sociedad } = useSpider(
    spiders.el_telegrafo_sociedad
  );

  const data = [
    ...data_actualidad,
    ...data_empresariales,
    ...data_justicia,
    ...data_mundo,
    ...data_sociedad,
  ];

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

  return loading_actualidad &&
    loading_empresariales &&
    loading_justicia &&
    loading_mundo &&
    loading_sociedad ? (
    <Loading />
  ) : (
    <TabsC tabs={tabs} />
  );
};
