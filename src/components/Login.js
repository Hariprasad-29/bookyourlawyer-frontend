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
import { useHistory } from "react-router-dom";

function Login() {
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

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
     console.log(email, password);
  }

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
          name="email"
          label="Email"
          variant="outlined"
          placeholder="Enter Email"
          fullWidth
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          style={marginSpace}
          name="password"
          label="Password"
          placeholder="Enter password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button
          type="button"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={login}
        >
          Sign in
        </Button>
        <Typography style={marginSpace}>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography style={marginSpace}>
          {" "}
          Do you have an account ? <Link onClick={() => history.push("/register")}>Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
