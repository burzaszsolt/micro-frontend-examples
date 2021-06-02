import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { App1, App2, App3 } from "./components/Microfrontends";
import { Slides } from "./components/Slides/Slides";

const App = () => (
  <Router>
    <Header />
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
  </Router>
);

export default App;
