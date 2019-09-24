import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Users from "./components/Users/Users";
import WelcomeModal from "./components/WelcomeModal/WelcomeModal";

import "./index.css";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/welcome">welcome</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
      <switch>
        <Route exact path="/" component={App} />
        <Route exact path="/welcome" component={WelcomeModal} />
        <Route exact path="/users" component={Users} />
      </switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
