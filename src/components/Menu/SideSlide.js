import React, { Component } from "react";
import "./StyleSheets/SideSlide.css";

class SideSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOption: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menuOption == "openSlide") {
      this.setState({ menuOption: nextProps.menuOption });
    }
  }
  toggleMenu = () => {
    this.setState({ menuOption: "close" });
  };
  render() {
    console.log(this.state.menuOption);
    return (
      <nav className={`side-slide ${this.state.menuOption}`}>
        <a onClick={() => this.toggleMenu()}>
          <h3 className="nav01">x</h3>
        </a>
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
      </nav>
    );
  }
}

export default SideSlide;
