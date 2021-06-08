import React, { useState } from "react";
import { Box, Tabs, Tab } from "@material-ui/core";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
          <Box>
              <div>{children}</div>
          </Box>
          
      )}
    </div>
  );
}

interface TabItems {
  tabTitle?: string;
  component: React.ReactElement;
  icon?: React.ReactElement;
}

interface TabNavProps {
  tabs: TabItems[];
  variant?: "standard" | "scrollable" | "fullWidth";
}

export function TabNav(props: TabNavProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          centered
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs"
          variant={props.variant}
        >
          {props.tabs.map((tab, index) => {
            return <Tab icon={tab.icon} key={index} label={tab?.tabTitle} />;
          })}
        </Tabs>
      {props.tabs.map((tab, index) => {
        return (
          <TabPanel value={tabIndex} index={index}  >
            {tab.component}
          </TabPanel>
        );
      })}
    </>
  );
}
