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
import { ClientPanel } from "./ClientPanel";
import { useSnackbar } from "notistack";

function AddNewCase() {
  const [newcase, setNewCase] = useState({
    casetitle: "Test Case tile",
    casecategory: "CRIMINAL",
    casedescription: "This is a test case description to enusure the working of the functionality",
    lawyerId: "#00021"
    
  });

  const { enqueueSnackbar } = useSnackbar();

  const [terms, setTerms] = useState(false);

  const HandleChange = (e) => {
    setNewCase({ ...newcase, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    enqueueSnackbar("Case added successfully!", {
      variant: "success"
    });
  }

  const paperStyle = {
    padding: 20,
    height: "83vh",
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

  return (
    <ClientPanel title="Add New Case">
          <div>
      <Grid style={grid}>
        <Paper elevation={17} style={paperStyle}>
          <Grid alignContent={"center"}>
            <br />
            <h2 style={headerStyle}>ADD NEW CASE</h2>
          </Grid>
          <form
            autoComplete="off"
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
            <TextField
              id="outlined-multiline-static"
              label="Lawyer ID"
              rows={6}
              placeholder="Enter lawyer ID"
              variant="outlined"
              onChange={HandleChange}
              name="lawyerid"
              value={newcase.lawyerId}
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
              onClick={handleSubmit}
            >
              Add Case
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
    </ClientPanel>

  );
}

export default AddNewCase;
