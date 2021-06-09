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
import GavelIcon from '@material-ui/icons/Gavel';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React, { useEffect, useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';


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

export function ClientSideBar() {
  const classes = useStyles();
  return (
    <div>
    <h2>Book Your Laywer</h2>
    <Divider />
    <SideBarItem link={"/client/home"} icon={<HomeIcon />} text="Home" />
      <List>
        <SideBarItem link={"/client/profile"} icon={<AccountBoxOutlinedIcon />} text="Profile" />
        <SideBarItem link={"/client/addnewcase"} icon={<GroupAddOutlinedIcon />} text="Add New Case" />
        <SideBarItem link={"/client/caserequests"} icon={<PlaylistAddCheckIcon />} text="Case Requests"  />
        <SideBarItem link={"/client/laywerlist"} icon={<GavelIcon />} text="Lawyers List"  />
        <SideBarItem link={"/client/approvedcase"} icon={<VerifiedUserOutlinedIcon />} text="Approved Case"  />
        <SideBarItem link={"/client/transactionhistory"} icon={<ChromeReaderModeOutlinedIcon />} text="Transaction History"  />
      </List>
      <Divider />
      <List>
        <SideBarItem icon={<ExitToAppIcon />} text="logout" link="/login" />
      </List>
    </div>
  );
}
