import React, { FC, ReactElement } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import './button.css';

interface ButtonProps {
  link: string;
  icon?: ReactElement<SvgIconProps>;
}

export const Button: FC<ButtonProps> = ({ children, link, icon }) => {
  return (
    <a className="button-main" href={link} target="_blank" rel="noreferrer">
      {children}
      {icon}
    </a>
  );
};
