import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import routes from "./routes";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router
          basename={process.env.REACT_APP_BASENAME || ""}
          history={browserHistory}
        >
          <div>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={props => {
                    return (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    );
                  }}
                />
              );
            })}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

const browserHistory = createBrowserHistory();
