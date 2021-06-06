import "./App.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import React from "react";

import Login from "./components/Login";
import Register from "./components/Register";

import ClientHome from "./client/Home";
import ClientProfile from "./client/Profile";
import ClientAddNewCase from "./client/AddNewCase";
import ClientCaseRequests from "./client/CaseRequests";
import ClientApprovedCase from "./client/ApprovedCase";
import ClientTransactionHistory from "./client/TransactionHistory";

import LawyerProfile from "./lawyer/Profile";
import LawyerHome from "./lawyer/Home";
import LawyerApprovedClients from "./lawyer/ApprovedClients";
import LawyerClientRequests from "./lawyer/ClientRequests";
import LawyerTransactionHistory from "./lawyer/TransactionHistory"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} />
        <Route path="/client/home" component={ClientHome} />
        <Route path="/client/profile" component={ClientProfile} />
        <Route path="/client/addnewcase" component={ClientAddNewCase} />
        <Route path="/client/caserequests" component={ClientCaseRequests} />
        <Route path="/client/approvedcase" component={ClientApprovedCase} />
        <Route path="/client/transactionhistory" component={ClientTransactionHistory} />
        <Route path="/lawyer/home" component={LawyerHome} />
        <Route path="/lawyer/profile" component={LawyerProfile} />
        <Route path="/lawyer/approvedclients" component={LawyerApprovedClients} />
        <Route path="/lawyer/clientrequests" component={LawyerClientRequests} />
        <Route path="/lawyer/transactionhistory" component={LawyerTransactionHistory} />
      </Switch>
    </div>
  );
}

export default App;
