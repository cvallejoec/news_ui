import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Sidebar } from './components/Sidebar/Sidebar';
import { ElComercio } from './pages/ElComercio/ElComercio';
import { ElTelegrafo } from './pages/ElTelegrafo/ElTelegrafo';
import { ElUniverso } from './pages/ElUniverso/ElUniverso';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={ElComercio} />
        <Route exact path="/el-comercio" component={ElComercio} />
        <Route exact path="/el-telegrafo" component={ElTelegrafo} />
        <Route exact path="/el-universo" component={ElUniverso} />
      </Switch>
    </Router>
  );
}

export default App;
