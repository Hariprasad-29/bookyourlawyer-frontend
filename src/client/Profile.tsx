import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import { ClientPanel } from "./ClientPanel";


const Profile = () => {
  const paperStyle = {
    padding: 20,
    height: "85vh",
    width: 800,
    margin: "auto",
    backgroundColor: "#0000",
    borderRadius: 20,
  };

  const headerStyle = { margin: 5 };

  const avatarStyle = { backgroundColor: "black" };

  const marginTop = {};

  const marginSpace = {
    margin: "10px",
    width: 350,
  };

  const marginSpace2 = {
    margin: "10px",
    width: 350,
  };

  const grid = {
    color: "##212121",
  };

  const [profile, setProfile] = useState({
    namee: "",
    email: "",
    phoneno: "",
    district: "",
    state: "",
  });

  const [terms, setTerms] = useState(false);

  const HandleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <ClientPanel title="Profile" >
          <Grid style={grid}> 
      <Paper elevation={17} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountBoxOutlinedIcon />
          </Avatar>
          <h1 style={headerStyle}>PROFILE</h1>
        </Grid>
        <form
          autocomplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(profile);
            console.log(terms);
          }}
        >
          {/* <Grid container justify="center" alignItems="center"> */}
          <TextField
            onChange={HandleChange}
            name="namee"
            value={profile.namee}
            style={marginSpace}
            label="Name"
            placeholder="Enter your name"
          />
          <TextField
            onChange={HandleChange}
            name="email"
            value={profile.email}
            style={marginSpace}
            fullWidth
            label="Email"
            placeholder="Enter your email"
          />
          {/* </Grid> */}
          <br />
          <TextField
            onChange={HandleChange}
            name="phoneno"
            value={profile.phoneno}
            style={marginSpace2}
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <TextField
            onChange={HandleChange}
            name="district"
            value={profile.district}
            style={marginSpace2}
            fullWidth
            type="text"
            label="District"
            placeholder="Enter your District"
          />
          <TextField
            onChange={HandleChange}
            name="state"
            value={profile.state}
            style={marginSpace2}
            fullWidth
            type="text"
            label="State"
            placeholder="Enter your State"
          />
          <br />
          <br />
          <h4 style={{ margin: "30px 0px 0px -500px" }}>
            Terms and conditions:
          </h4>
          <p style={{ margin: "8px 0px 0px 0px", color: "#F15C37" }}>
            You're gonna have to accept the terms and conditions , sorry pal :(
          </p>
          <br />
          <FormControlLabel
            control={
              <Checkbox
                name="terms"
                checked={profile.terms}
                onChange={() => setTerms(!terms)}
              />
            }
            label="I accept the terms and conditions.   "
          />

          <br />
          <Button
            style={{ marginTop: "5px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </form>
      </Paper>
    </Grid>
    </ClientPanel>

  );
};

export default Profile;

