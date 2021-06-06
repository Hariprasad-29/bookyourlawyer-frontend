import "./App.css";
import ClientLandingPage from "./client/ClientLandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import LawyerHeader from "./lawyer/LawyerLandingPage";
import LawyerProfile from "./lawyer/Profile";
import LawyerApprovedClients from "./lawyer/ApprovedClients";
import LawyerClientRequests from "./lawyer/ClientRequests";
import LawyerTransactionHistory from "./lawyer/TransactionHistory"
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
        <Route path="/lawyer/home" component={LawyerHeader} />
        <Route path="/lawyer/profile" component={LawyerProfile} />
        <Route path="/lawyer/approvedclients" component={LawyerApprovedClients} />
        <Route path="/lawyer/clientrequests" component={LawyerClientRequests} />
        <Route path="/lawyer/transactionhistory" component={LawyerTransactionHistory} />
      </Switch>
    </div>
  );
}

export default App;
