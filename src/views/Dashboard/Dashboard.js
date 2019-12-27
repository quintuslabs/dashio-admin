import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-content-container px-4 container-fluid">
        <div className="page-header py-4 no-gutters row">
          <div className="text-sm-left mb-3 text-center text-md-left mb-sm-0 col-12 col-sm-4">
            <span className="text-uppercase page-subtitle">Dashboard</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg mb-4 col-sm-6 col-md-6">
            <div className="stats-small stats-small--1 card card-small">
              <div className="p-0 d-flex card-body">
                <div className="d-flex flex-column m-auto">
                  <div className="stats-small__data text-center">
                    <span className="stats-small__label text-uppercase">
                      Posts
                    </span>
                    <h6 className="stats-small__value count my-3">2,390</h6>
                  </div>
                  <div className="stats-small__data">
                    <span className="stats-small__percentage stats-small__percentage--increase">
                      4.7%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg mb-4 col-sm-6 col-md-6">
            <div className="stats-small stats-small--1 card card-small">
              <div className="p-0 d-flex card-body"></div>
            </div>
          </div>
          <div className="col-lg mb-4 col-sm-6 col-md-6">
            <div className="stats-small stats-small--1 card card-small">
              <div className="p-0 d-flex card-body"></div>
            </div>
          </div>
          <div className="col-lg mb-4 col-sm-6 col-md-6">
            <div className="stats-small stats-small--1 card card-small">
              <div className="p-0 d-flex card-body"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
