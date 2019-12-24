import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StyleSheets/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(null);
  }
  onToggleClicked() {
    console.log("do stuff");
  }
  render() {
    return (
      <div className="header-section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              class="btn btn-info"
              onClick={() => this.onToggleClicked()}
            >
              <i class="fa fa-align-left"></i>
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-justify"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
