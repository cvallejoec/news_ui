import React, { ReactElement, FC, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { NewsProvider } from '../../types/new.type';
import { TabTitle } from './components/TabTitle';
import { useSelectedNews } from '../../hooks/useSelectedNews';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

export type TabProps = {
  label: string;
  children: ReactElement;
};

export interface TabsProps {
  newProvider: NewsProvider;
  tabs: TabProps[];
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '85vw',
    minHeight: '100vh',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabsContainer: {
    width: '100%',
  },
}));

export const TabsC: FC<TabsProps> = ({ newProvider, tabs }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const { getSelectedNewsNumber } = useSelectedNews();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            // centered
          >
            {tabs.map((tab, index) => (
              <Tab
                label={
                  <TabTitle
                    title={tab.label}
                    quantity={getSelectedNewsNumber(newProvider, tab.label)}
                  />
                }
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {tabs.map((tab, index) => (
            <TabPanel value={value} index={index} dir={theme.direction}>
              {tab.children}
            </TabPanel>
          ))}
        </SwipeableViews>
      </div>
    </div>
  );
};
