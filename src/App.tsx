import "./App.css";
import ClientLandingPage from "./client/ClientLandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import LawyerLandingPage from "./lawyer/LawyerLandingPage";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} />
        <Route path="/client/home" component={ClientLandingPage} />
        <Route path="/lawyer/home" component={LawyerLandingPage} />
      </Switch>
    </div>
  );
}

export default App;
