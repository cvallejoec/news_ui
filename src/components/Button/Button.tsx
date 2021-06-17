import React, { FC, ReactElement } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import './button.css';

interface ButtonProps {
  url?: string;
  icon?: ReactElement<SvgIconProps>;
}

export const Button: FC<ButtonProps> = ({ children, url, icon }) => {
  return url ? (
    <a
      className="button button--main"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      {icon}
    </a>
  ) : (
    <button>{children}</button>
  );
};
