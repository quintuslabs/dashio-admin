import React, { Component } from "react";
import "./StyleSheets/Breadcrumb.css";

const Breadcrumb = props => {
  return (
    <div class="breadcrumbs">
      <div class="breadcrumbs-inner">
        <div class="row m-0">
          <div class="col-sm-4">
            <div class="page-header float-left">
              <div class="page-title">
                <h1>{props.title}</h1>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="page-header float-right">
              <div class="page-title">
                <ol class="breadcrumb text-right">
                  {props.path.map((item, index) => (
                    <li key={index}>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
