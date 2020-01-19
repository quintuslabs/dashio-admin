import React, { Component } from "react";
import "./StyleSheets/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-section" id="sticky">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="nav-title">Dashio-Admin</div>
            <div onClick={() => this.props.onToggleClick()}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-align-justify"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/about">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/index">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/page">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/component">
                    Page
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
