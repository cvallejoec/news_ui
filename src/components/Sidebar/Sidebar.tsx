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
import { Link, useLocation } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import './sidebar.scss';
import { Downloader } from '../Downloader/Downloader';

export const Sidebar = (props: any) => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const { pathname } = useLocation();

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
            {menuCollapse ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem
              active={pathname === '/' || pathname === '/el-comercio'}
              icon={<FindInPageIcon className="sidebar-icon" />}
            >
              El Comercio
              <Link to="/el-comercio" />
            </MenuItem>
            {/* <MenuItem
              icon={<FindInPageIcon className="sidebar-icon" />}
              active={pathname === '/el-universo'}
            >
              El Universo
              <Link to="/el-universo" />
            </MenuItem>
            <MenuItem
              icon={<FindInPageIcon className="sidebar-icon" />}
              active={pathname === '/el-telegrafo'}
            >
              El Telégrafo
              <Link to="/el-telegrafo" />
            </MenuItem> */}
            {/* <SubMenu title="Components" icon={<BellIcon />}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu> */}
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Downloader />
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};
