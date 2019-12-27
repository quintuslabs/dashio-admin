import React, { Component } from "react";

class DashboardHeaderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg mb-4 col-sm-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib ">
                  <i
                    className="fa fa-credit-card-alt flat-color-2"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text">
                      <span className="count">3435</span>
                    </div>
                    <div className="stat-heading">Sales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg mb-4 col-sm-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib ">
                  <i
                    className="fa fa-shopping-cart flat-color-3"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text">
                      <span className="count">349</span>
                    </div>
                    <div className="stat-heading">Templates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg mb-4 col-sm-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib ">
                  <i
                    className="fa fa-users flat-color-4"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text">
                      <span className="count">2986</span>
                    </div>
                    <div className="stat-heading">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg mb-4 col-sm-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib flat-color-1">
                  <i
                    className="fa fa-money flat-color-1"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text">
                      $<span className="count">23569</span>
                    </div>
                    <div className="stat-heading">Revenue</div>
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

export default DashboardHeaderSection;
