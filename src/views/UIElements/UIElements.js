/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import { HoverableCard } from "../../components/HoverableCard";
import { TransitionalCard } from "../../components/TransitionalCard";
import { ServiceCard } from "../../components/ServiceCard";
import { Toast } from "../../components/Toast";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";

class UIElements extends Component {
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
        title: "buttons",
        url: "/ui-elements"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"UI Element"} path={path} />
        <div className="right-panel">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Card Transition </h4>
              <div className="line"></div>
              <div className="container-fluid">
                <div className="row" style={{ marginBottom: 20 }}>
                  <HoverableCard onClick={() => alert("Thank s for click ")} />

                  <HoverableCard
                    title="Favourites"
                    body="Check all your favourites in one place."
                    icon={
                      <i className="fa fa-heart-o fa-3x" aria-hidden="true"></i>
                    }
                    onClick={() => alert("Hi I am Profile Card ")}
                  />

                  <HoverableCard
                    title="CONTACTS"
                    body="Add or change your contacts and links"
                    icon={
                      <i
                        className="fa fa-address-book fa-3x"
                        aria-hidden="true"
                      ></i>
                    }
                  />
                </div>
                <div className="row" style={{ marginBottom: 40 }}>
                  <div className="col-sm-3 col-sm-3">
                    <TransitionalCard
                      title="Test Title"
                      body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                      image="https://source.unsplash.com/1600x900/?nature,water"
                      onClick={() => alert("Hii I am Transitional card")}
                    />
                  </div>
                  <div className="col-sm-3 col-sm-3">
                    <TransitionalCard image="https://source.unsplash.com/1600x900/?nature" />
                  </div>
                  <div className="col-sm-3 col-sm-3">
                    <TransitionalCard image="https://source.unsplash.com/1600x900/?water" />
                  </div>
                  <div className="col-sm-3 col-sm-3">
                    <TransitionalCard />
                  </div>
                </div>

                <div className="row" style={{ marginBottom: 40 }}>
                  <div className="col-sm-3 col-sm-3">
                    <ServiceCard
                      title="Test Title"
                      icon={
                        <i
                          class="fa fa-google-wallet fa-3x"
                          aria-hidden="true"
                        ></i>
                      }
                      onClick={() => alert("Hii I am Transitional card")}
                      className="default"
                    />
                  </div>
                  <div className="col-sm-3 col-sm-3">
                    <ServiceCard
                      icon={
                        <img src="https://source.unsplash.com/900x900/?nature" />
                      }
                      className="success"
                    />
                  </div>
                  <div className="col-sm-3 col-sm-3">
                    <ServiceCard
                      icon={
                        <img src="https://source.unsplash.com/900x900/?water" />
                      }
                      className="danger"
                    />
                  </div>
                  <div className="col-sm-3 col-sm-3">
                    <ServiceCard className="info" />
                  </div>
                </div>
                <div className="row" style={{ marginBottom: 40 }}>
                  <Toast />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UIElements;
