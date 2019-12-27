import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./StyleSheets/Sidebar.css";
function Sidebar(props) {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(props.location.pathname);
    console.log(active);
  });

  return (
    <div
      className="sidebar-container border-right main-sidebar"
      id="sticky-sidebar"
    >
      <nav id="sidebar" className={props.toggleClass}>
        <ul className="list-unstyled components">
          <li className={active === "/dashboard" ? "active" : null}>
            <a href="/">
              <div className="menu-icon">
                <i className="fa fa-home nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>

          <li className={active === "/components" ? "active" : null}>
            <a href="/components">
              <div className="menu-icon">
                <i className="fa fa-cogs nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Components</span>
            </a>
          </li>

          <li className={active === "/ui-elements" ? "active" : null}>
            <a href="/ui-elements">
              <div className="menu-icon">
                <i className="fa fa-book nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">UI Elements </span>
            </a>
          </li>

          <li className={active === "/widgets" ? "active" : null}>
            <a href="/widgets">
              <div className="menu-icon">
                <i className="fa fa-th-large nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Widgets</span>
            </a>
          </li>

          <li className={active === "/forms" ? "active" : null}>
            <a href="/forms">
              <div className="menu-icon">
                <i
                  className="fa fa-check-square-o nav_icon"
                  aria-hidden="true"
                ></i>
              </div>
              <span className="menu-title">Forms</span>
            </a>
          </li>

          <li className={active === "/tables" ? "active" : null}>
            <a href="/tables">
              <div className="menu-icon">
                <i className="fa fa-table nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Tables</span>
            </a>
          </li>

          <li className={active === "/pages" ? "active" : null}>
            <a href="/pages">
              <div className="menu-icon">
                <i
                  className="fa fa-file-text-o nav_icon"
                  aria-hidden="true"
                ></i>
              </div>
              <span className="menu-title">Pages</span>
            </a>
          </li>

          <li className={active === "/charts" ? "active" : null}>
            <a href="/charts">
              <div className="menu-icon">
                <i className="fa fa-bar-chart nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Charts</span>
            </a>
          </li>
        </ul>

        {/* <ul className="list-unstyled CTAs">
              <li>
                <a
                  href="https://bootstrapious.com/tutorial/files/sidebar.zip"
                  className="download"
                >
                  Download source
                </a>
              </li>
              <li>
                <a
                  href="https://bootstrapious.com/p/bootstrap-sidebar"
                  className="article"
                >
                  Back to article
                </a>
              </li>
      </ul> */}
      </nav>
    </div>
  );
}

export default withRouter(Sidebar);
