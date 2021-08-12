import React, { FC } from 'react';

interface NotificationProps {
  quantity?: number;
}

export const Notification: FC<NotificationProps> = ({ quantity = 0 }) => {
  return quantity > 0 ? (
    <div
      style={{
        background: 'var(--accent)',
        color: 'white',
        borderRadius: '50%',
        fontSize: '0.75rem',
        width: '20px',
        height: '20px',
        marginLeft: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {quantity}
    </div>
  ) : (
    <></>
  );
};
