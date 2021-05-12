import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import ChromeReaderModeOutlinedIcon from "@material-ui/icons/ChromeReaderModeOutlined";
import { Switch, Route, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Home from "./Home";
import ApprovedCase from "./ApprovedCase";
import CaseRequests from "./CaseRequests";
import Profile from "./Profile";
import AddNewCase from "./AddNewCase";
import TransactionHistory from "./TransactionHistory";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
  },

  drawerPaper: {
    width: drawerWidth,
  },
}));

function ClientLandingPage(props) {
  const history = useHistory();
  const classes = useStyles();

  const menuItems = [
    {
      Text: "Home",
      icon: <HomeIcon />,
      path: "/HomeClient",
    },
    {
      Text: "Profile",
      icon: <AccountBoxOutlinedIcon />,
      path: "/ProfileClient",
    },
    {
      Text: "Add New Case",
      icon: <AddToPhotosIcon />,
      path: "/AddNewCase",
    },
    {
      Text: "Case Requests",
      icon: <GroupAddOutlinedIcon />,
      path: "/CaseRequests",
    },
    {
      Text: "Approved Case",
      icon: <VerifiedUserOutlinedIcon />,
      path: "/ApprovedCase",
    },
    {
      Text: "Transaction History",
      icon: <ChromeReaderModeOutlinedIcon />,
      path: "/TransactionHistoryClient",
    },
    {
      Text: "Logout",
      icon: <ExitToAppIcon />,
      path: "/Register",
    },
  ];

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <h3 >CONTENTS</h3>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {menuItems.map((items) => (
            <ListItem
              button
              key={items.Text}
              onClick={() => history.push(items.path)}
            >
              <ListItemIcon>{items.icon}</ListItemIcon>
              <ListItemText primary={items.Text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <AppBar  color="primary">
        <Toolbar position="static">   </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/HomeClient" component={Home} />
        <Route exact path="/ProfileClient" component={Profile} />
        <Route exact path="/AddNewCase" component={AddNewCase} />
        <Route exact path="/CaseRequests" component={CaseRequests} />
        <Route exact path="/ApprovedCase" component={ApprovedCase} />
        <Route
          exact
          path="/TransactionHistoryClient"
          component={TransactionHistory}
        />
      </Switch>
    </div>
  );
}

export default ClientLandingPage;
