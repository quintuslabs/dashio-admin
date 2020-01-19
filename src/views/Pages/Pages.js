import React, { Component } from "react";
import "./Pages.css";
class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="container">
          <div class="error-wrapper">
            <div class="man-icon"></div>
            <h3 class="title">404</h3>
            <p class="info">Oh! Page not found</p>
            <button type="button" class="home-btn">
              HOME
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pages;
