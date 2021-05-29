import React from "react";
import { Ghost, SpeechBubble } from "react-kawaii";
import UseWindowDimensions from "./windowDimensions";

import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#282c34",
  },
  container: {
    alignItems: "center",
  },
}));
function AppBarGhost() {
  const { width, height } = UseWindowDimensions();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="scrollable force tabs example"
        >
          <Tab
            label="Ghost One"
            icon={<Ghost size={40} mood="blissful" color="#A6E191" />}
            {...a11yProps(0)}
          />
          <Tab
            label="Ghost Two"
            icon={<Ghost size={40} mood="happy" color="	#83D1FB" />}
            {...a11yProps(1)}
          />
          <Tab
            label="Ghost Three"
            icon={<Ghost size={40} mood="shocked" color="#E0E4E8" />}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TabPanel value={value} index={0}>
          <SpeechBubble size={height / 5} mood="blissful" color="#61DDBC" />
          <Ghost size={height / 5} mood="blissful" color="#A6E191" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SpeechBubble size={height / 5} mood="happy" color="#FDA7DC" />
          <Ghost size={height / 5} mood="happy" color="	#83D1FB" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SpeechBubble size={height / 5} mood="shocked" color="#E0E4E8" />
          <Ghost size={height / 5} mood="shocked" color="#E0E4E8" />
        </TabPanel>
      </div>
    </div>
  );
}

export default AppBarGhost;
