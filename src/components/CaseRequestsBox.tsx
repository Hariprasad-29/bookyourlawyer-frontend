import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { NumberLiteralType } from "typescript";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "1000px",
    marginBottom: 20,
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
  name?: string;
  id?: string;
  description?: string;
  case_type?: string;
  amount?: number;
}

export default function CaseRequestsBox(props: Props) {
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
                {/* <h4>Case Type: {props.case_type} </h4> */}
                <h4>Amount: ₹{props.amount} </h4>
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
            }}
          >
            <div style={{ marginRight: "20px" }}>
              <Button variant="contained" color="primary">
                Notify Lawyer
              </Button>
            </div>
            <div>
              <Button variant="contained" color="default">
                Cancel
              </Button>
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
                marginRight: 30,
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
      </CardContent>
    </Card>
  );
}
