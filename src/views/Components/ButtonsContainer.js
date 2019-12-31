import React, { Component } from "react";
import { Button, HoverableButton } from "../../components/Button";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";

class ButtonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
                    type={"button"}
                    title={"Button Primary"}
                    className={"button button-primary button-sm"}
                  />

                  <Button
                    type={"button"}
                    title={"Button Secondary"}
                    className={"button button-secondary button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Success"}
                    className={"button button-success button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Warning"}
                    className={"button button-warning button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Danger"}
                    className={"button button-danger button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Info"}
                    className={"button button-info button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Light"}
                    className={"button button-light button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Dark"}
                    className={"button button-dark button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Link"}
                    className={"button button-link button-sm"}
                  />
                </div>

                <div className="row">
                  <Button
                    type={"button"}
                    title={"Button Primary"}
                    className={"button button-outline-primary button-sm"}
                  />

                  <Button
                    type={"button"}
                    title={"Button Secondary"}
                    className={"button button-outline-secondary button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Success"}
                    className={"button button-outline-success button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Warning"}
                    className={"button button-outline-warning button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Danger"}
                    className={"button button-outline-danger button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Info"}
                    className={"button button-outline-info button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Light"}
                    className={"button button-outline-light button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Dark"}
                    className={"button button-outline-dark button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Link"}
                    className={"button button-outline-link button-sm"}
                  />
                </div>

                <div className="row">
                  <Button
                    type={"button"}
                    title={"Button Primary"}
                    className={
                      "button button-outline-primary button-sm  button-circle"
                    }
                  />

                  <Button
                    type={"button"}
                    title={"Button Secondary"}
                    className={
                      "button button-outline-secondary button-sm  button-circle"
                    }
                  />
                  <Button
                    type={"button"}
                    title={"Button Success"}
                    className={
                      "button button-outline-success button-sm  button-circle"
                    }
                  />
                  <Button
                    type={"button"}
                    title={"Button Warning"}
                    className={
                      "button button-outline-warning button-sm  button-circle"
                    }
                  />
                  <Button
                    type={"button"}
                    title={"Button Danger"}
                    className={
                      "button button-outline-danger button-sm  button-circle"
                    }
                  />
                  <Button
                    type={"button"}
                    title={"Button Info"}
                    className={
                      "button button-outline-info button-sm  button-circle"
                    }
                  />
                  <Button
                    type={"button"}
                    title={"Button Light"}
                    className={
                      "button button-outline-light button-sm  button-circle"
                    }
                  />
                  <Button
                    type={"button"}
                    title={"Button Dark"}
                    className={
                      "button button-outline-dark button-sm  button-circle"
                    }
                  />
                  <Button
                    type={"button"}
                    title={"Button Link"}
                    className={
                      "button button-outline-link button-sm  button-circle"
                    }
                  />
                </div>
                <div className="row">
                  <Button
                    type={"button"}
                    title={"Button Primary"}
                    className={"button button-primary button-sm  button-circle"}
                  />

                  <Button
                    type={"button"}
                    title={"Button Secondary"}
                    className={
                      "button button-secondary button-sm  button-circle"
                    }
                  />
                  <Button
                    type={"button"}
                    title={"Button Success"}
                    className={"button button-success button-sm  button-circle"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Warning"}
                    className={"button button-warning button-sm  button-circle"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Danger"}
                    className={"button button-danger button-sm  button-circle"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Info"}
                    className={"button button-info button-sm  button-circle"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Light"}
                    className={"button button-light button-sm  button-circle"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Dark"}
                    className={"button button-dark button-sm  button-circle"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Link"}
                    className={"button button-link button-sm  button-circle"}
                  />
                </div>
                <div className="row">
                  <Button
                    type={"button"}
                    title={"Button Primary"}
                    icon={"fa fa-star"}
                    className={"button button-primary button-sm"}
                  />

                  <Button
                    type={"button"}
                    title={"Button Secondary"}
                    icon={"fa fa-lightbulb-o"}
                    className={"button button-secondary button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Success"}
                    icon={"fa fa-magic"}
                    className={"button button-success button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Warning"}
                    icon={"fa fa-rss"}
                    className={"button button-warning button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Danger"}
                    icon={"fa fa-map-marker"}
                    className={"button button-danger button-sm"}
                  />
                  <Button
                    type={"button"}
                    title={"Button Info"}
                    icon={"fa fa-link"}
                    className={"button button-info button-sm"}
                  />
                </div>
                <div className="row">
                  <HoverableButton />
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
