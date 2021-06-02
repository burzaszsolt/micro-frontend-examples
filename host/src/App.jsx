import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { App1 } from "./components/App1";
import { App2 } from "./components/App2";
import { App3 } from "./components/App3";
import { Slides } from "./components/Slides";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app1">App1</Link>
          </li>
          <li>
            <Link to="/app2">App2</Link>
          </li>
          <li>
            <Link to="/app3">App3</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/app1">
          <App1 />
        </Route>
        <Route path="/app2">
          <App2 />
        </Route>
        <Route path="/app3">
          <App3 />
        </Route>
        <Route path="/" exact>
          <Slides />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
