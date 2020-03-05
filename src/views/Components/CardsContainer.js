/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import { Breadcrumb } from "../../components/BreadCrumb";
import {
  Card,
  CardHeader,
  CardFooter,
  ImageHeader,
  CardBody
} from "../../components/Card";
import user1 from "../../assets/images/avatars/0.jpg";
import user2 from "../../assets/images/avatars/1.jpg";
import user3 from "../../assets/images/avatars/2.jpg";

class CardsContainer extends Component {
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
        title: "Cards",
        url: "/components/card"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Cards"} path={path} />
        <div className="right-panel">
          <div className="row">
            <div className="col-md-4">
              <Card borderRadius="5px">
                <CardHeader backgroundColor="#00000008">
                  <strong className="card-title mb-3">Profile Card</strong>
                </CardHeader>
                <CardBody>
                  <div className="mx-auto d-block">
                    <img
                      className="rounded-circle mx-auto d-block"
                      style={{ maxWidth: "50%" }}
                      src={user1}
                      alt="Card image cap"
                    />
                    <h5 className="text-sm-center mt-2 mb-1">Steven Lee</h5>
                    <div className="location text-sm-center">
                      <i className="fa fa-map-marker"></i> California, United
                      States
                    </div>
                  </div>
                  <hr />
                  <div className="card-text text-sm-center">
                    <a href="#">
                      <i className="fa fa-facebook pr-1"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter pr-1"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin pr-1"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest pr-1"></i>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="col-md-4">
              <Card borderRadius="5px">
                <CardBody>
                  <div className="mx-auto d-block">
                    <img
                      className="rounded-circle mx-auto d-block"
                      style={{ maxWidth: "50%" }}
                      src={user2}
                      alt="Card image cap"
                    />
                    <h5 className="text-sm-center mt-2 mb-1">Steven Lee</h5>
                    <div className="location text-sm-center">
                      <i className="fa fa-map-marker"></i> California, United
                      States
                    </div>
                  </div>
                  <hr />
                  <div className="card-text text-sm-center">
                    <a href="#">
                      <i className="fa fa-facebook pr-1"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter pr-1"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin pr-1"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest pr-1"></i>
                    </a>
                  </div>
                </CardBody>
                <CardFooter backgroundColor="#f0f3f5">
                  <strong className="card-title mb-3">Profile Card</strong>
                </CardFooter>
              </Card>
            </div>

            <div className="col-md-4">
              <Card borderRadius="5px">
                <CardHeader>
                  <i className="fa fa-user"></i>
                  <strong className="card-title pl-2">Profile Card</strong>
                </CardHeader>
                <CardBody>
                  <div className="mx-auto d-block">
                    <img
                      style={{ maxWidth: "50%" }}
                      className="rounded-circle mx-auto d-block"
                      src={user3}
                      alt="Card image cap"
                    />
                    <h5 className="text-sm-center mt-2 mb-1">Steven Lee</h5>
                    <div className="location text-sm-center">
                      <i className="fa fa-map-marker"></i> California, United
                      States
                    </div>
                  </div>
                  <hr />
                  <div className="card-text text-sm-center">
                    <a href="#">
                      <i className="fa fa-facebook pr-1"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter pr-1"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin pr-1"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest pr-1"></i>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row">
            <div class="col-md-4">
              <Card className="card border border-primary">
                <CardHeader>
                  <strong class="card-title">Card Outline</strong>
                </CardHeader>
                <CardBody>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </div>

            <div class="col-md-4">
              <Card className="card border border-secondary">
                <CardHeader>
                  <strong class="card-title">Card Outline</strong>
                </CardHeader>
                <CardBody>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </div>

            <div class="col-md-4">
              <Card className="card border border-success">
                <CardHeader>
                  <strong class="card-title">Card Outline</strong>
                </CardHeader>
                <CardBody>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </div>

            <div class="col-md-4">
              <Card className="bg-warning">
                <CardBody className="bg-warning">
                  <blockquote class="blockquote mb-0 text-light">
                    <p class="text-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer class="blockquote-footer text-light">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </div>

            <div class="col-md-4">
              <Card>
                <CardBody className="bg-danger">
                  <blockquote class="blockquote mb-0">
                    <p class="text-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer class="blockquote-footer text-light">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </div>

            <div class="col-md-4">
              <Card>
                <CardBody className="bg-primary">
                  <blockquote class="blockquote mb-0 text-light">
                    <p class="text-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer class="blockquote-footer text-light">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </div>
            <div class="col-md-4">
              <Card className="bg-primary">
                <CardHeader className="bg-secondary">
                  <strong class="card-title text-light">Card Header</strong>
                </CardHeader>
                <CardBody className="text-white bg-primary">
                  <p class="card-text text-light">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </div>
            <div class="col-md-4">
              <Card className="bg-warning">
                <CardHeader className="bg-success">
                  <strong class="card-title text-light">Card Header</strong>
                </CardHeader>
                <CardBody className="text-white bg-warning">
                  <p class="card-text text-light">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </div>

            <div class="col-md-4">
              <Card className="bg-danger">
                <CardHeader className="bg-dark">
                  <strong class="card-title text-light">Card Header</strong>
                </CardHeader>
                <CardBody className="text-white bg-danger">
                  <p class="card-text text-light">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </div>

            <div class="col-md-4">
              <Card>
                <ImageHeader imageSrc="https://i.imgur.com/ue0AB6J.png"></ImageHeader>

                <CardBody>
                  <h4 class="card-title mb-3">Card Image Title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </div>
            <div class="col-md-4">
              <Card>
                <ImageHeader
                  class="card-img-top"
                  imageSrc="https://i.imgur.com/hrS2McC.png"
                  alt="Card image cap"
                />
                <CardBody>
                  <h4 class="card-title mb-3">Card Image Title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </div>
            <div class="col-md-4">
              <Card>
                <ImageHeader
                  class="card-img-top"
                  imageSrc="https://i.imgur.com/MUBS4Gh.png"
                  alt="Card image cap"
                />
                <CardBody>
                  <h4 class="card-title mb-3">Card Image Title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsContainer;
