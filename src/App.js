import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Switch>
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

const browserHistory = createBrowserHistory();
