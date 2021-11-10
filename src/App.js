import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import End from "./End";
import Main from "./Main";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game/:id">
            <Main />
          </Route>
          <Route>
            <End />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
