/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */
import React, { Component } from "react";
import { Card, CardBody } from "../../components/Card";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";

class Widgets extends Component {
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
        title: "Widgets",
        url: "/widgets"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Widgets"} path={path} />
        <div className="right-panel">
          <div className="row">
            <div class="col-lg-3 col-md-6">
              <Card borderRadius="5px">
                <CardBody>
                  <div class="stat-widget-five">
                    <div class="stat-icon dib flat-color-1">
                      <i class="fa fa-money flat-color-1"></i>
                    </div>
                    <div class="stat-content">
                      <div class="text-left dib">
                        <div class="stat-text">
                          $<span class="count">23569</span>
                        </div>
                        <div class="stat-heading">Revenue</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div class="col-lg-3 col-md-6">
              <Card borderRadius="5px">
                <CardBody>
                  <div class="stat-widget-five">
                    <div class="stat-icon dib flat-color-1">
                      <i class="fa fa-shopping-cart flat-color-2"></i>
                    </div>
                    <div class="stat-content">
                      <div class="text-left dib">
                        <div class="stat-text">
                          $<span class="count">3435</span>
                        </div>
                        <div class="stat-heading">Sales</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div class="col-lg-3 col-md-6">
              <Card borderRadius="5px">
                <CardBody>
                  <div class="stat-widget-five">
                    <div class="stat-icon dib flat-color-1">
                      <i class="fa fa-users flat-color-3"></i>
                    </div>
                    <div class="stat-content">
                      <div class="text-left dib">
                        <div class="stat-text">
                          $<span class="count">3435</span>
                        </div>
                        <div class="stat-heading">Clients</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div class="col-lg-3 col-md-6">
              <Card borderRadius="5px">
                <CardBody>
                  <div class="stat-widget-five">
                    <div class="stat-icon dib flat-color-1">
                      <i class="fa fa-bandcamp flat-color-4"></i>
                    </div>
                    <div class="stat-content">
                      <div class="text-left dib">
                        <div class="stat-text">
                          $<span class="count">3435</span>
                        </div>
                        <div class="stat-heading">Sales</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div class="col-lg-3 col-md-6">
              <Card borderRadius="5px">
                <CardBody className="bg-flat-color-1">
                  <div class="card-left pt-1 float-left">
                    <h3 class="mb-0 fw-r white-color">
                      <span class="currency float-left  mr-1">$</span>
                      <span class="count">23569</span>
                    </h3>
                    <p class="text-light mt-1 m-0">Revenue</p>
                  </div>

                  <div class="card-right float-right text-right">
                    <i class="fa fa-shopping-cart fa-4x white-color "></i>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div class="col-lg-3 col-md-6">
              <Card borderRadius="5px">
                <CardBody className="bg-flat-color-1">
                  <div class="card-left pt-1 float-left">
                    <h3 class="mb-0 fw-r white-color">
                      <span class="currency float-left  mr-1">$</span>
                      <span class="count">23569</span>
                    </h3>
                    <p class="text-light mt-1 m-0">Revenue</p>
                  </div>

                  <div class="card-right float-right text-right">
                    <i class="fa fa-money fa-4x white-color "></i>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Widgets;
