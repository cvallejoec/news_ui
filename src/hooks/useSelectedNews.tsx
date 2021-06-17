import { useContext } from 'react';

import { NewsContext } from '../common/NewsProvider';

export const useSelectedNews = () => {
  const context = useContext(NewsContext);

  if (!context)
    throw new Error('useSelectedNews must be inside a NewsContext provider.');

  return context;
};
