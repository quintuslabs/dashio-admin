/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import { Button, HoverableButton } from "../../components/Button";
import { LoadingButton } from "../../components/LoadingButton";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";

class ButtonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status1: null,
      status2: null
    };
  }

  onHandleClicked = () => {
    console.log("clicked");
    this.setState({ status1: "loading" });

    const interval = setInterval(() => {
      this.setState({ status1: "success" });
    }, 3000);
  };
  onHandleErrorClicked = () => {
    console.log("clicked");
    this.setState({ status2: "loading" });

    const interval = setInterval(() => {
      this.setState({ status2: "error" });
    }, 3000);
  };

  render() {
    const path = [
      {
        title: "Dashboard",
        url: "/dashboard"
      },

      {
        title: "Components",
        url: "#"
      },
      {
        title: "buttons",
        url: "/components/buttons"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Buttons"} path={path} />
        <div className="right-panel">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Buttons </h4>
              <div className="line"></div>
              <div className="container-fluid">
                <div className="row">
                  <Button
                    type="button"
                    className="button button-primary button-sm"
                  >
                    Button Primary
                  </Button>

                  <Button
                    type="button"
                    className="button button-secondary button-sm"
                  >
                    Button Secondary
                  </Button>
                  <Button
                    type="button"
                    className="button button-success button-sm"
                  >
                    Button Success
                  </Button>
                  <Button
                    type="button"
                    className="button button-warning button-sm"
                  >
                    Button Warning
                  </Button>
                  <Button
                    type="button"
                    className="button button-danger button-sm"
                  >
                    Button Danger
                  </Button>
                  <Button
                    type="button"
                    className="button button-info button-sm"
                  >
                    Button Info
                  </Button>
                  <Button
                    type="button"
                    className="button button-light button-sm"
                  >
                    Button Light
                  </Button>
                  <Button
                    type="button"
                    className="button button-dark button-sm"
                  >
                    Button Dark
                  </Button>
                  <Button
                    type="button"
                    className="button button-link button-sm"
                  >
                    Button Link
                  </Button>
                </div>

                <div className="row">
                  <Button
                    type="button"
                    className="button button-outline-primary button-sm"
                  >
                    Button Primary
                  </Button>

                  <Button
                    type="button"
                    className="button button-outline-secondary button-sm"
                  >
                    Button Secondary
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-success button-sm"
                  >
                    Button Success
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-warning button-sm"
                  >
                    Button Warning
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-danger button-sm"
                  >
                    Button Danger
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-info button-sm"
                  >
                    Button Info
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-light button-sm"
                  >
                    Button Light
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-dark button-sm"
                  >
                    Button Dark
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-link button-sm"
                  >
                    Button Link
                  </Button>
                </div>

                <div className="row">
                  <Button
                    type="button"
                    className="button button-outline-primary button-sm  button-circle"
                  >
                    Button Primary
                  </Button>

                  <Button
                    type="button"
                    className="button button-outline-secondary button-sm  button-circle"
                  >
                    Button Secondary
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-success button-sm  button-circle"
                  >
                    Button Success
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-warning button-sm  button-circle"
                  >
                    Button Warning
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-danger button-sm  button-circle"
                  >
                    Button Danger
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-info button-sm  button-circle"
                  >
                    Button Info
                  </Button>
                  <Button
                    type="button"
                    className={
                      "button button-outline-light button-sm  button-circle"
                    }
                  >
                    Button Light
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-dark button-sm  button-circle"
                  >
                    Button Dark
                  </Button>
                  <Button
                    type="button"
                    className="button button-outline-link button-sm  button-circle"
                  >
                    Button Link
                  </Button>
                </div>
                <div className="row">
                  <Button
                    type="button"
                    className="button button-primary button-sm  button-circle"
                  >
                    Button Primary
                  </Button>

                  <Button
                    type="button"
                    className="button button-secondary button-sm  button-circle"
                  >
                    Button Secondary
                  </Button>
                  <Button
                    type="button"
                    className="button button-success button-sm  button-circle"
                  >
                    Button Success
                  </Button>
                  <Button
                    type="button"
                    className="button button-warning button-sm  button-circle"
                  >
                    Button Warning
                  </Button>
                  <Button
                    type="button"
                    className="button button-danger button-sm  button-circle"
                  >
                    Button Danger
                  </Button>
                  <Button
                    type="button"
                    className={"button button-info button-sm  button-circle"}
                  >
                    Button Info
                  </Button>
                  <Button
                    type="button"
                    className="button button-light button-sm  button-circle"
                  >
                    Button Light
                  </Button>
                  <Button
                    type="button"
                    className="button button-dark button-sm  button-circle"
                  >
                    Button Dark
                  </Button>
                  <Button
                    type="button"
                    title=""
                    className="button button-link button-sm  button-circle"
                  >
                    Button Link
                  </Button>
                </div>
                <div className="row">
                  <Button
                    type="button"
                    className="button button-primary button-sm"
                  >
                    <i className="fa fa-star"></i> Button Primary
                  </Button>

                  <Button
                    type="button"
                    className="button button-secondary button-sm"
                  >
                    <i className="fa fa-lightbulb-o"></i>Button Secondary
                  </Button>
                  <Button
                    type="button"
                    className="button button-success button-sm"
                  >
                    <i className="fa fa-magic"></i> Button Success
                  </Button>
                  <Button
                    type="button"
                    className="button button-warning button-sm"
                  >
                    {" "}
                    <i className="fa fa-map-marker"></i>Button Warning
                  </Button>
                  <Button
                    type="button"
                    className="button button-danger button-sm"
                  >
                    <i className="fa fa-map-marker"></i>Button Danger
                  </Button>
                  <Button
                    type="button"
                    className="button button-info button-sm"
                  >
                    Button Info
                  </Button>
                </div>
                <div className="row">
                  <LoadingButton
                    status={this.state.status1}
                    onClick={this.onHandleClicked}
                    className="btn-primary"
                  >
                    Click Me
                  </LoadingButton>
                  <LoadingButton
                    status={this.state.status2}
                    onClick={this.onHandleErrorClicked}
                    className="btn-secondary"
                  >
                    <i className="fa fa-map-marker"></i> Click Me
                  </LoadingButton>
                </div>

                <div className="row">
                  <HoverableButton>Hoverable Button</HoverableButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonsContainer;
