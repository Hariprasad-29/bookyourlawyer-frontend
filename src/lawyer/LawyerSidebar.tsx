import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import {
  Badge,
  createStyles,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import ChromeReaderModeOutlinedIcon from "@material-ui/icons/ChromeReaderModeOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React, { useEffect, useState } from "react";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  })
);

interface SideBarItemProps {
  text: string;
  icon: React.ReactElement;
  link: string;
  alert?: boolean;
}

function SideBarItem(props: SideBarItemProps) {

    const history = useHistory();

  return (
    <div>
      <ListItem
        onClick={() => {
            history.push(props.link)
        }}
        button
        key={props.text}
      >
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </div>
  );
}

export function LawyerSideBar() {
  const classes = useStyles();
  return (
    <div>
    <h2>Book Your Laywer</h2>
    <Divider />
    <SideBarItem link={"/lawyer/home"} icon={<HomeIcon />} text="Home" />
      <List>
        <SideBarItem link={"/lawyer/profile"} icon={<AccountBoxOutlinedIcon />} text="Profile" />
        <SideBarItem link={"/lawyer/clientrequests"} icon={<GroupAddOutlinedIcon />} text="Client requests" />
        <SideBarItem icon={<VerifiedUserOutlinedIcon />} text="Approved Clients" link={"/lawyer/approvedclients"} />
        <SideBarItem icon={<ChromeReaderModeOutlinedIcon />} text="Transcation History" link={"/lawyer/transactionhistory"} />
      </List>
      <Divider />
      <List>
        <SideBarItem icon={<ExitToAppIcon />} text="logout" link="/login" />
      </List>
    </div>
  );
}
