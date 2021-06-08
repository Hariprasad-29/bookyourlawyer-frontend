import React from "react";
import ReactDOM from "react-dom";
import { graphqlClient } from "./graphql";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const client = graphqlClient();

ReactDOM.render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={3}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </SnackbarProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
