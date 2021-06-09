import React from "react";
import { LawyerPanel } from "./LawyerPanel";
import { TabNav } from "./../components/TabNav";
import { Grid } from "@material-ui/core";
import ActiveCases from "./ActiveCases";
import CompletedCases from "./CompletedCases";

function Home() {
  function Tab(props: { title: string; icon?: React.ReactElement }) {
    return (
      <Grid container alignContent={"center"} justify={"center"} spacing={2}>
        <Grid item style={{ fontSize: 17 }}>
          {props.title}
        </Grid>{" "}
        <Grid item>{props.icon}</Grid>
      </Grid>
    );
  }

  return (
    <LawyerPanel title={"Home"}>
      <TabNav
        variant="fullWidth"
        tabs={[
          {
            component: (
              <ActiveCases />
            ),
            icon: <Tab title={"Active Cases"}  />,
          },
          {
            component: (  
              <CompletedCases />
            ),
            icon: <Tab title={"Completed Cases"} />,
          },
        ]}
      />
    </LawyerPanel>
  );
}

export default Home;
