import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "1000px",
    marginBottom: 20
  },
  textRating: {
    marginTop: -10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
  stars: {
    marginTop: 20,
    marginLeft: 10,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  contentBelow: {
    margin: "-10px 300px 0px 0px",
    display: "flex",
    flexDirection: "column",
  },
  contentCol: {
    display: "flex",
    flexDirection: "column",
  },
});

interface Props {
    client_name: string;
    id: string;
    description: string;
    city: string;
    case_type: string;
}

export default function ActiveCasesBox(props: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.content}>
          <div className={classes.contentCol}>
            <div className={classes.textRating}>
              <div
                style={{
                  marginTop: 15,
                  marginRight: 20,
                }}
              >
                <Avatar alt={props.client_name} />
              </div>
              <div>
                <Typography>
                  <h3>{props.client_name}</h3>
                </Typography>
              </div>
            </div>
            <div>
              <div>
                <Typography
                  style={{
                    marginTop: -15,
                    marginRight: 95,
                  }}
                >
                  <h4>Client ID: #000{props.id} </h4>
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.contentBelow}>
            <div>
              <Typography>
                <h4>Case Type: {props.case_type} </h4>
              </Typography>
            </div>
            <div>
              <Typography>
                <h4>City: {props.city} </h4>
              </Typography>
            </div>

          </div>

        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: 800,
            wordBreak: "break-all",

          }}
        >
          <div style={{
              display: "flex",
              justifyContent: "space-between",
              
          }}>
            <div style={{
                marginRight: 45,
                wordBreak: "keep-all",
          
            }}>
              <h3>Case Description:</h3>
            </div>
            <div style={{
                marginTop: 15
            }} >
              <Typography>
                {props.description}
              </Typography>
            </div>
          </div>
        </div>
        <div style={{marginRight: -100}}>
            <div style={{marginRight: "-250px"}}>
               <Button variant="contained" color="primary">Mark as done</Button>
              </div>
            </div>
      </CardContent>
    </Card>
  );
}
