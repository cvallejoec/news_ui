import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { NewsProvider } from './common/NewsProvider';
import { SidebarProvider } from './common/SidebarProvider';

ReactDOM.render(
  <NewsProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </NewsProvider>,
  document.getElementById('root')
);
