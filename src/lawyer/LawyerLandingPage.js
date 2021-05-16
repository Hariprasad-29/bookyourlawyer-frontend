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
import Profile from "./Profile";
import ClientRequests from "./ClientRequests";
import ApprovedClients from "./ApprovedClients";
import TransactionHistory from "./TransactionHistory";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./Home";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AppBar from "@material-ui/core/AppBar";
import { Badge, Grid, IconButton, InputBase } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ForumSharpIcon from "@material-ui/icons/ForumSharp";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  appbar: {
    backgroundColor: "#fff",
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
      Text: "Home",
      icon: <HomeIcon />,
      path: "/Home",
    },
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
        <h3 style={{ marginBottom: "20.9px" }}>CONTENTS</h3>
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
      <AppBar position="absolute" className={classes.appbar}>
        <Toolbar>
          <Grid container>
            <Grid item sm={6}>
              <InputBase placeholder="Search…" />
            </Grid>

            <Grid item sm></Grid>

            <Grid item>
              <IconButton>
                <Badge badgeContent={1} color="primary">
                  <ForumSharpIcon />
                </Badge>
              </IconButton>

              <IconButton>
                <Badge badgeContent={1} color="primary">
                  <NotificationsActiveIcon />
                </Badge>
              </IconButton>

              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/Home" component={Home} />
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
