import React, { useState } from 'react';

import './navItem.css';

export const NavItem = (props: any) => {
  const [isOpen, handleExpand] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => handleExpand(!isOpen)}>
        {props.icon}
      </a>
      {isOpen && props.children}
    </li>
  );
};
