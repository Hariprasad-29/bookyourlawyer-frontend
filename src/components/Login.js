import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import HttpsRoundedIcon from "@material-ui/icons/HttpsRounded";

const Login = () => {
  const marginSpace = {
    margin: "15px auto",
  };

  const paperStyle = {
    padding: 20,
    height: "75vh",
    width: 340,
    margin: "50px auto",
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const btnstyle = { margin: "8px 0" };

  const [state, setstate] = useState({
    username: "",
    password: "",
  });

  const HandleChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid>
      <Paper elevation={17} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <HttpsRoundedIcon />
          </Avatar>
          <h1>LOGIN</h1>
        </Grid>
        <br />
        <TextField
          style={marginSpace}
          name="username"
          label="Username"
          variant="outlined"
          placeholder="Enter username"
          fullWidth
          value={state.username}
          onChange={HandleChange}
        />
        <TextField
          style={marginSpace}
          name="password"
          label="Password"
          placeholder="Enter password"
          variant="outlined"
          fullWidth
          type="password"
          onChange={HandleChange}
        />
        <Button
          type="button"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={() => {
            console.log(state)
            setstate()
          }}
        >
          Sign in
        </Button>
        <Typography style={marginSpace}>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography style={marginSpace}>
          {" "}
          Do you have an account ? <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
