import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Collapse from '@material-ui/core/Collapse';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FindInPageIcon from '@material-ui/icons/FindInPage';

import { ActionType } from '../../common/SidebarProvider';
import { config } from '../../config';
import { useSidebar } from '../../hooks/useSidebar';
import { Downloader } from '../Downloader/Downloader';

const drawerWidth = config.styles.drawer.width;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: 'var(--bg)',
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export const Sidebar = () => {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [openCollapse, setOpenCollapse] = useState(false);
  const { sidebar, dispatch } = useSidebar();

  const handleDrawerOpen = () => {
    dispatch({ type: ActionType.open });
  };

  const handleDrawerClose = () => {
    dispatch({ type: ActionType.close });
  };

  function handleOpenSettings() {
    setOpenCollapse(!openCollapse);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: sidebar.isOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, sidebar.isOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {getPageTitle(location.pathname)}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={sidebar.isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          Noticias
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <>
                <ChevronLeftIcon />
              </>
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Downloader />
        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleOpenSettings}>
            <ListItemIcon>
              <FindInPageIcon style={{ color: 'var(--accent)' }} />
            </ListItemIcon>
            <ListItemText primary="Noticias" />
            {openCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                className={classes.nested}
                component={Link}
                to="/el-comercio"
              >
                <ListItemText primary="El Comercio" />
              </ListItem>
              <ListItem
                className={classes.nested}
                component={Link}
                to="/la-hora"
              >
                <ListItemText primary="La Hora" />
              </ListItem>
              <ListItem
                className={classes.nested}
                component={Link}
                to="/el-universo"
              >
                <ListItemText primary="El Universo" />
              </ListItem>
              <ListItem
                className={classes.nested}
                component={Link}
                to="/el-telegrafo"
              >
                <ListItemText primary="El Telégrafo" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
};

const getPageTitle = (path: string) => {
  switch (path) {
    case '/':
      return 'El Comercio';
    case '/el-comercio':
      return 'El Comercio';
    case '/la-hora':
      return 'La Hora';
    case '/el-universo':
      return 'El Universo';
    case '/el-telegrafo':
      return 'El Telegrafo';
    default:
      return '';
  }
};
