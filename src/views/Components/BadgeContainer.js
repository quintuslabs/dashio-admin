import React, { Component } from "react";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { Breadcrumb } from "../../components/BreadCrumb";

class BadgeContainer extends Component {
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
        title: "Badges",
        url: "/components/badge"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Badge"} path={path} />
        <div className="right-panel">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Badge </h4>
              <div className="line"></div>
              <div className="container-fluid">
                <div className="row">
                  <div style={{ padding: 10 }}>
                    <a href="#">
                      News <Badge class={"badge badge-primary"} value={"5"} />
                    </a>
                  </div>
                  <div style={{ padding: 10 }}>
                    <a href="#">
                      Comments{" "}
                      <Badge class={"badge badge-warning"} value={"10"} />
                    </a>
                  </div>
                  <div style={{ padding: 10 }}>
                    <a href="#">
                      Updates{" "}
                      <Badge class={"badge badge-success"} value={"2"} />
                    </a>
                  </div>
                </div>
                <div className="row">
                  <Badge class="badge badge-primary m-10" value={"Primary"} />
                  <Badge class="badge badge-secondary" value={"Secondary"} />
                  <Badge class="badge badge-success" value={"Success"} />
                  <Badge class="badge badge-danger" value={"Danger"} />
                  <Badge class="badge badge-warning" value={"Warning"} />
                  <Badge class="badge badge-info" value={"Info"} />
                  <Badge class="badge badge-light" value={"Light"} />
                  <Badge class="badge badge-dark" value={"Dark"} />
                </div>

                <div className="row" style={{ marginTop: 20 }}>
                  <Button
                    type="button"
                    className="btn btn-primary m-l-10 m-b-10"
                    title="Primary"
                  >
                    <span class="badge badge-light">7</span>
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-success m-l-10 m-b-10"
                    title="Success"
                  >
                    <span class="badge badge-light">7</span>
                  </Button>
                  <Button type="button" className="btn btn-info m-l-10 m-b-10">
                    Info <span class="badge badge-light">7</span>
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-warning m-l-10 m-b-10"
                  >
                    Warning <span class="badge badge-light">7</span>
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-danger m-l-10 m-b-10"
                  >
                    Danger <span class="badge badge-light">7</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeContainer;
