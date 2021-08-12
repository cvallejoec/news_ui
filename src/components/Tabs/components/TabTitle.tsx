import React, { FC } from 'react';

import { Notification } from './Notification';

interface TabTitleProps {
  title: string;
  quantity?: number;
}

export const TabTitle: FC<TabTitleProps> = ({ title, quantity }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>{title}</span>
      <Notification quantity={quantity} />
    </div>
  );
};
