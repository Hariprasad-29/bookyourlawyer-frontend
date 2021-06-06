import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function AddNewCase() {
  const [newcase, setNewCase] = useState({
    casetitle: "",
    casecategory: "",
    casedescription: "",
  });

  const [terms, setTerms] = useState(false);

  const HandleChange = (e) => {
    setNewCase({ ...newcase, [e.target.name]: e.target.value });
  };

  const paperStyle = {
    padding: 20,
    height: "83vh",
    width: 800,
    margin: "30px 0px 40px 180px",
    backgroundColor: "#ECDCD8",
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

  return (
    <div>
      <h1 style={{ margin: "90px auto 10px 480px" }}>Add New Case</h1>
      <Grid style={grid}>
        <Paper elevation={17} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <NoteAddIcon />
            </Avatar>
            <h2 style={headerStyle}>ADD NEW CASE</h2>
          </Grid>
          <form
            autocomplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(newcase);
              console.log(terms);
            }}
          >
            <TextField
              onChange={HandleChange}
              name="casetitle"
              variant="outlined"
              value={newcase.casetitle}
              style={marginSpace}
              label="Case Title"
              placeholder="Enter Case Title"
            />
            <br />
            <FormControl component="fieldset" style={marginTop}>
              <FormLabel component="legend">Case Category</FormLabel>
              <RadioGroup
                onChange={HandleChange}
                aria-label="category"
                name="casecategory"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="Civil"
                  control={<Radio />}
                  label="Civil"
                />
                <FormControlLabel
                  value="Criminal"
                  control={<Radio />}
                  label="Criminal"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Case Description"
              multiline
              rows={6}
              placeholder="Enter Case Description"
              variant="outlined"
              onChange={HandleChange}
              name="casedescription"
              value={newcase.casedescription}
              style={marginSpace}
            />
            <br />
            <h4 style={{ margin: "30px 0px 0px -500px" }}>
              Terms and conditions:
            </h4>
            <p style={{ margin: "8px 0px 0px 0px", color: "#F15C37" }}>
              You're gonna have to accept the terms and conditions , sorry pal
              :(
            </p>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  name="terms"
                  checked={terms}
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
              Add Case
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default AddNewCase;
