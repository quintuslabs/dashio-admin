import React, { Component } from "react";
import { Loading } from "../../components/Loader/";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";

class LoaderContainer extends Component {
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
        title: "Loader",
        url: "/components/loader"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Loader"} path={path} />
        <div className="right-panel">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Loader </h4>
              <div className="line"></div>
              <div className="container-fluid">
                <div class="container text-center">
                  <div class="row">
                    <div class="col-sm-3">
                      <Loading className="sp-circle"></Loading>
                      <h5>Circle</h5>
                    </div>
                    <div class="col-sm-3">
                      <Loading className="sp-3balls"></Loading>
                      <h5>3 Balls</h5>
                    </div>
                    <div class="col-sm-3">
                      <Loading className="sp-volume"></Loading>
                      <h5>Volume</h5>
                    </div>
                    <div class="col-sm-3">
                      <Loading className="sp-vortex"></Loading>
                      <h5>Vortex</h5>
                    </div>
                    <div class="col-sm-3">
                      <Loading className="sp-slices"></Loading>
                      <h5>Slices</h5>
                    </div>
                    <div class="col-sm-3">
                      <Loading className="sp-sphere"></Loading>
                      <h5>Sphere</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <Loading className="sp-bars"></Loading>
                      <h5>Bars</h5>
                    </div>
                    <div class="col-sm-3">
                      <Loading className="sp-clock"></Loading>
                      <h5>Clock</h5>
                    </div>
                    <div class="col-sm-3">
                      <Loading className="sp-wave"></Loading>
                      <h5>Wave</h5>
                    </div>
                    <div class="col-sm-3">
                      <Loading className="sp-texture"></Loading>
                      <h5>Texture</h5>
                    </div>
                    <div class="col-sm-3">
                      <Loading className="sp-loadbar"></Loading>
                      <h5>LoadBar</h5>
                    </div>
                    <div class="col-sm-3">
                      <Loading className="sp-hydrogen"></Loading>
                      <h5>Hydrogen</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoaderContainer;
