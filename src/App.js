import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";

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
            <Route exact path="/Dashboard" component={BaseLayout} />
            <Route exact path="/" component={BaseLayout} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

const browserHistory = createBrowserHistory();
