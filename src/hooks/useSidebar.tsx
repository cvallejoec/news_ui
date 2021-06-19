import { useContext } from 'react';

import { SidebarContext } from '../common/SidebarProvider';

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context)
    throw new Error('useSidebar must be inside a SidebarContext provider.');

  return context;
};
