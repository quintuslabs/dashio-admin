import React, { Component } from "react";
import "./StyleSheets/DropDownSlide.css";

class DropDownSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOption: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.menuOption == "openDropDown") {
      this.setState({ menuOption: nextProps.menuOption });
    }
  }
  toggleMenu = () => {
    this.setState({ menuOption: "close" });
  };
  render() {
    return (
      <nav className={`drop-down ${this.state.menuOption}`}>
        <ul>
          <li>
            <a onClick={() => this.toggleMenu()} href="#">
              About
            </a>
          </li>
          <li>
            <a onClick={() => this.toggleMenu()} href="#">
              Blog
            </a>
          </li>
          <li>
            <a onClick={() => this.toggleMenu()} href="#">
              Help
            </a>
          </li>
          <li>
            <a onClick={() => this.toggleMenu()} href="#">
              Contact
            </a>
          </li>
        </ul>
        <a onClick={() => this.toggleMenu()}>
          {" "}
          <h3 className="nav02">x</h3>
        </a>
      </nav>
    );
  }
}

export default DropDownSlide;
