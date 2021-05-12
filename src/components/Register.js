import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

const Signup = () => {
  const paperStyle = {
    padding: 20,
    height: "75vh",
    width: 340,
    margin: "50px auto",
  };

  const headerStyle = { margin: 5 };

  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const marginTop = { marginTop: 5 };

  const marginSpace = {
    margin: "10px auto",
  };

  const marginSpace2 = {
    margin: "5px auto",
  };

  const [register, setRegsiter] = useState({
    namee: "",
    email: "",
    category: "",
    phoneno: "",
    password: "",
    confirmpass: "",
  });

  const HandleChange = (e) => {
    setRegsiter({ ...register, [e.target.name]: e.target.value });
  };

  return (
    <Grid>
      <Paper elevation={17} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
          <CreateRoundedIcon/>
          </Avatar>
          <h1 style={headerStyle}>REGISTER</h1>
        </Grid>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(register);
          }}
        >
          <TextField
            onChange={HandleChange}
            name="namee"
            value={register.namee}
            style={marginSpace}
            fullWidth
            label="Name"
            placeholder="Enter your name"
          />
          <TextField
            onChange={HandleChange}
            name="email"
            value={register.email}
            style={marginSpace}
            fullWidth
            label="Email"
            placeholder="Enter your email"
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Category</FormLabel>
            <RadioGroup
              onChange={HandleChange}
              aria-label="category"
              name="category"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="Lawyer"
                control={<Radio />}
                label="Lawyer"
              />
              <FormControlLabel
                value="Client"
                control={<Radio />}
                label="Client"  
              />
            </RadioGroup>
          </FormControl>
          <TextField
            onChange={HandleChange}
            name="phoneno"
            value={register.phoneno}
            style={marginSpace2}
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <TextField
            onChange={HandleChange}
            name="password"
            value={register.password}
            style={marginSpace2}
            fullWidth
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <TextField
            onChange={HandleChange}
            name="confirmpass"
            value={register.confirmpass}
            style={marginSpace2}
            fullWidth
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button
            style={{ marginTop: "5px" }}
            type="submit"
            variant="contained"
            color="primary"
            onSubmit={() => console.log(register)}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
