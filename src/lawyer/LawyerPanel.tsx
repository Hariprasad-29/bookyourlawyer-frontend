import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Badge, Container } from "@material-ui/core";
import LawyerHeader from "./LawyerHeader";


const drawerWidth = 240;

interface Props {
  children: React.ReactElement;
  title: string;
}

export function LawyerPanel(props: Props) {
  const classes = useStyles();

  return (
    <Container style={{ padding: 0 }}>
      <div className={classes.root}>
        <CssBaseline />
        <LawyerHeader title={props.title} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {props.children}
        </main>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3),
      },
    },
  })
);
