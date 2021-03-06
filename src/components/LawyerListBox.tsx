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
    marginBottom: 20,
    flex: 1,
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
    name: string;
    rating: number;
    id: string;
    email: string;
    phone_no: number;
    city: string;
    case_type: string;
}

export default function LawyerListBox(props: Props) {
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
                <Avatar alt={props.name} />
              </div>
              <div>
                <Typography>
                  <h3>{props.name}</h3>
                </Typography>
              </div>
              <div className={classes.stars}>
                <Rating name="simple-controlled" value={props?.rating} readOnly />
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
                  <h4>Lawyer ID: #000{props.id} </h4>
                </Typography>
              </div>
              <div style={{
                  marginRight: 95,
                  marginTop: 45
              }}>
                  <Typography>
                      <h4>Email: {props.email} </h4>
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
            <div>
                <Typography>
                    <h4>Phone Number: {props.phone_no} </h4>
                </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
