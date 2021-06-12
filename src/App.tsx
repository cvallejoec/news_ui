import React from 'react';

import { Navbar } from './components/Navbar/index';
import { NavItem } from './components/Navbar/components/NavItem/index';
import { DropdownMenu } from './components/Navbar/components/DropdownMenu/index';

import { ReactComponent as BellIcon } from './assets/svgs/bell.svg';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon="😀" />
        <NavItem icon="😀" />
        <NavItem icon={<BellIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
