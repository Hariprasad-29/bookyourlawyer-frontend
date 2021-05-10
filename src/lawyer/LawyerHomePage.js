import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import ChromeReaderModeOutlinedIcon from "@material-ui/icons/ChromeReaderModeOutlined";
import Profile from "./Profile";
import ClientRequests from "./ClientRequests";
import ApprovedClients from "./ApprovedClients";
import TransactionHistory from "./TransactionHistory";
import { Switch, Route, useHistory } from "react-router-dom";

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

function LawyerHomePage(props) {
  const history = useHistory();
  const classes = useStyles();

  const menuItems = [
    {
      Text: "Profile",
      icon: <AccountBoxOutlinedIcon />,
      path: "/Profile",
    },
    {
      Text: "Client Requests",
      icon: <GroupAddOutlinedIcon />,
      path: "/ClientRequests",
    },
    {
      Text: "Approved Clients",
      icon: <VerifiedUserOutlinedIcon />,
      path: "/ApprovedClients",
    },
    {
      Text: "Transaction History",
      icon: <ChromeReaderModeOutlinedIcon />,
      path: "/TransactionHistory",
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
        <h3>CONTENTS</h3>
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
      </Drawer>
      <Switch>
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/ClientRequests" component={ClientRequests} />
        <Route exact path="/ApprovedClients" component={ApprovedClients} />
        <Route
          exact
          path="/TransactionHistory"
          component={TransactionHistory}
        />
      </Switch>
    </div>
  );
}

export default LawyerHomePage;
