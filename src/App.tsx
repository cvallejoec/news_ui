import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { config } from './config';
import { useSidebar } from './hooks/useSidebar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ElComercio } from './pages/ElComercio/ElComercio';
import { LaHora } from './pages/LaHora/LaHora';
import { ElUniverso } from './pages/ElUniverso/ElUniverso';
import { ElTelegrafo } from './pages/ElTelegrafo/ElTelegrafo';

const drawerWidth = config.styles.drawer.width;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      marginTop: 64,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

function App() {
  const classes = useStyles();
  const { sidebar } = useSidebar();

  return (
    <Router>
      <Sidebar />
      <Switch>
        <div
          className={clsx(classes.content, {
            [classes.contentShift]: sidebar.isOpen,
          })}
        >
          <Route exact path="/" component={ElComercio} />
          <Route exact path="/el-comercio" component={ElComercio} />
          <Route exact path="/la-hora" component={LaHora} />
          <Route exact path="/el-universo" component={ElUniverso} />
          <Route exact path="/el-telegrafo" component={ElTelegrafo} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
