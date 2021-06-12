import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './dropdown.css';
import { DropdownItem } from './components/DropdownItem/index';

import { ReactComponent as BellIcon } from '../../../../assets/svgs/bell.svg';

export const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(100);

  const calcHeight = (el: any) => {
    console.log('si entra aquí');
    const height = el.offsetHeight;
    console.log({ height });
    setMenuHeight(height);
  };

  return (
    // <div className="dropdown" style={{ height: menuHeight }}>
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<BellIcon />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<BellIcon />}
            rightIcon={<BellIcon />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<BellIcon />}
            goToMenu="main"
            setActiveMenu={setActiveMenu}
          >
            Regresar
          </DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};
