import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button,  Typography,
  Link, } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import { useHistory } from "react-router-dom";
import { saveUserAccount } from "./../storage/storage";
import { gql, useMutation } from "@apollo/client";
import ParticleBackground from "../particle-js/ParticleBackground";

const  REGISTER = gql`
mutation register(
  $email: String!
  $password: String!
  $category: String!
  $phone_number: Float!
  $name: String!
)
{
  register(input: {email: $email, password: $password, category: $category, phone_number: $phone_number, name: $name}) {
    token
    user {
      id
      email
      type
      name
      phone_number
    }
  }
}
`;

const Signup = () => {
  const paperStyle = {
    padding: 20,
    maxHeight: 800,
    width: 340,
    marginBottom: 50,
    margin: "50px auto",
    borderRadius: "20px",
  };

  const history = useHistory();

  const headerStyle = { margin: 5 };

  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const marginTop = { marginTop: 5 };

  const marginSpace = {
    margin: "10px auto",
  };

  const marginSpace2 = {
    margin: "5px auto",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [phone_number, setPhoneNumber] = useState();
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [terms_checked, setTermsChecked] = useState(false);


  const [register, {data, error, loading}] = useMutation(REGISTER, {
    variables: {
      name,
      email,
      category,
      phone_number,
      password
    }
  })

  function confirmRegister() {
    console.log("comes inside function");
    if(password === confirm_password) {
      register()
      .then((result) => {
        saveUserAccount(result?.data.register);
        if(category === "LAWYER") {
          history.push("/lawyer/home");
        }
        else{ 
          history.push("/client/home");
        }
      })
    }
  }


  return (
    <>
    <div className="main2">
      <div className="particles">
      <h1 style={{color: "#ffffff"}}>BOOK YOUR LAWYER</h1>  
        <ParticleBackground/>
      </div>

           <div className="register">
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
              register();
            }}
          >
            <TextField
              onChange={(event) => {
                setName(event.target.value);
              }}
              name="name"
              value={name}
              style={marginSpace}
              fullWidth
              label="Name"
              placeholder="Enter your Name"
            />
            <TextField
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              name="email"
              value={email}
              style={marginSpace}
              fullWidth
              label="Email"
              placeholder="Enter your Email"
            />
            <FormControl component="fieldset" style={marginTop}>
              <FormLabel component="legend">Category</FormLabel>
              <RadioGroup
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
                aria-label="category"
                name="category"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="LAWYER"
                  control={<Radio />}
                  label="Lawyer"
                />
                <FormControlLabel
                  value="CLIENT"
                  control={<Radio />}
                  label="Client"  
                />
              </RadioGroup>
            </FormControl>
            <TextField
              onChange={(event) => {
                setPhoneNumber(parseFloat(event.target.value));
              }}
              name="phoneno"
              value={phone_number}
              style={marginSpace2}
              fullWidth
              label="Phone Number"
              placeholder="Enter your Phone Number"
            />
            <TextField
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              name="password"
              value={password}
              style={marginSpace2}
              fullWidth
              type="password"
              label="Password"
              placeholder="Enter your Password"
            />
            <TextField
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              name="confirmpass"
              value={confirm_password}
              style={marginSpace2}
              fullWidth
              type="password"
              label="Confirm Password"
              placeholder="Re-enter your Password"
            />
            <FormControlLabel
              control={<Checkbox checked={terms_checked} name="checkedA" onChange={(event) => {
                setTermsChecked(!terms_checked)
              }} />}
              label="I accept the terms and conditions."
            />
           <div style={{
             display: "flex",
             flexDirection: "column",
           }} >
           <Button
              style={{ marginTop: "5px" }}
              type="submit"
              variant="contained"
              color="primary"
              onClick={confirmRegister}
            >
              Sign up
            </Button>
            <Button
                type="button"
                color="defailt"
                variant="contained"
                style={{marginTop: 20,}}
                fullWidth
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
           </div>
          </form>
          <Typography style={marginSpace}>
            {" "}
            Already have an account ? <Link onClick={() => history.push("/login")}>Login</Link>
          </Typography>
        </Paper>
      </Grid>
         </div>
    </div>

    </>
  );
};

export default Signup;

