/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import "./StyleSheets/Footer.css";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="site-footer">
        <div className="footer-inner bg-white">
          <div className="row">
            <div className="col-sm-6">Copyright &copy; 2019 Dashio-Admin</div>
            <div className="col-sm-6 text-right">
              Designed by <a href="https://quintuslabs.com">Quintus Labs</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
