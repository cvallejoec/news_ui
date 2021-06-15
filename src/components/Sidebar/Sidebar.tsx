import React, { useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  // SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import './sidebar.scss';
import { ReactComponent as BellIcon } from '../../assets/svgs/bell.svg';

export const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div id="header">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="logotext">
            <p>{menuCollapse ? 'N' : 'Noticias'}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {menuCollapse ? 'Abrir' : 'Cerrar'}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem
              active={true}
              icon={<BellIcon className="sidebar-icon" />}
            >
              Home
            </MenuItem>
            <MenuItem icon={<BellIcon className="sidebar-icon" />}>
              Category
            </MenuItem>
            <MenuItem icon={<BellIcon className="sidebar-icon" />}>
              Favourite
            </MenuItem>
            <MenuItem icon={<BellIcon className="sidebar-icon" />}>
              Author
            </MenuItem>
            {/* <SubMenu title="Components" icon={<BellIcon />}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu> */}
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu>
            <MenuItem icon={<BellIcon className="sidebar-icon" />}>
              Logout
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};
