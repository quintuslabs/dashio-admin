/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./StyleSheets/Sidebar.css";
function Sidebar(props) {
  const [active, setActive] = useState("");
  const [dropdownToggle, setDropDownToggle] = useState(false);
  useEffect(() => {
    setActive(props.location.pathname);
  }, [props.location.pathname, active]);

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

          <li
            className="menu-item-has-children dropdown"
            onClick={() => setDropDownToggle(!dropdownToggle)}
          >
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="menu-icon fa fa-cogs"></i>Components
            </a>
            <ul
              className={
                dropdownToggle
                  ? "sub-menu children dropdown-menu show"
                  : "sub-menu children dropdown-menu"
              }
            >
              <li
                className={active === "/components/buttons" ? "active" : null}
              >
                <a href="/components/buttons">
                  <div className="menu-icon">
                    <i className="fa fa-puzzle-piece"></i>
                  </div>
                  <span className="menu-title">Buttons</span>
                </a>
              </li>
              <li className={active === "/components/badge" ? "active" : null}>
                <a href="/components/badge">
                  <div className="menu-icon">
                    <i className="fa fa-id-badge"></i>
                  </div>
                  <span className="menu-title">Badges</span>
                </a>
              </li>
              <li className={active === "/components/card" ? "active" : null}>
                <a href="/components/card">
                  <div className="menu-icon">
                    <i className="fa fa-id-card-o"></i>
                  </div>
                  <span className="menu-title">Cards</span>
                </a>
              </li>

              <li className={active === "/components/alert" ? "active" : null}>
                <a href="/components/alert">
                  <div className="menu-icon">
                    <i className="fa fa-exclamation-triangle"></i>
                  </div>
                  <span className="menu-title">Alerts</span>
                </a>
              </li>
              <li
                className={
                  active === "/components/progressbar" ? "active" : null
                }
              >
                <a href="/components/progressbar">
                  <div className="menu-icon">
                    <i className="fa fa-spinner"></i>
                  </div>
                  <span className="menu-title">Progress Bars</span>
                </a>
              </li>
            </ul>
          </li>

          <li className={active === "/ui-elements" ? "active" : null}>
            <a href="/ui-elements">
              <div className="menu-icon">
                <i className="fa fa-book nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">UI Elements </span>
            </a>
          </li>

          {/* <li className={active === "/widgets" ? "active" : null}>
            <a href="/widgets">
              <div className="menu-icon">
                <i className="fa fa-th-large nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Widgets</span>
            </a>
          </li> */}

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
