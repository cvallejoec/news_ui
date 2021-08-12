import React, { FC } from 'react';

interface TabTitleProps {
  title: string;
  quantity?: number;
}

export const TabTitle: FC<TabTitleProps> = ({ title, quantity = 0 }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>{title}</span>
      {quantity > 0 && (
        <div
          style={{
            background: 'var(--accent)',
            color: 'white',
            borderRadius: '50%',
            fontSize: '0.75rem',
            width: '20px',
            height: '20px',
            marginLeft: '10px',
          }}
        >
          {quantity}
        </div>
      )}
    </div>
  );
};
