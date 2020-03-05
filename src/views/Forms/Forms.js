/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";
import { Form } from "react-bootstrap";
import Validate from "../../utils/Validator";
import { NAME_RULE } from "../../utils/rule";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ccPayment: "",
      ccName: "",
      ccNumber: "",
      ccExpiration: "",
      code: "",
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      password: "",

      nameError: false,
      emailError: false,
      mobileError: false,
      passwordError: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  submitFormHandler = event => {
    event.preventDefault();

    this.setState({
      nameError: !Validate(this.state.first_name, NAME_RULE)
    });
  };

  render() {
    const path = [
      {
        title: "Dashboard",
        url: "/dashboard"
      },
      {
        title: "Form",
        url: "/form"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Form"} path={path} />
        <div className="right-panel">
          <div class="row">
            <div class="col-lg-6">
              <div class="card">
                <div class="card-header">
                  <strong class="card-title">Credit Card</strong>
                </div>
                <div class="card-body">
                  <div id="pay-invoice">
                    <div class="card-body">
                      <div class="card-title">
                        <h3 class="text-center">Pay Invoice</h3>
                      </div>
                      <hr />
                      <form name="form" onSubmit={this.handleSubmit}>
                        <div class="form-group text-center">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="text-muted fa fa-cc-visa fa-2x"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-cc-mastercard fa-2x"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-cc-amex fa-2x"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-cc-discover fa-2x"></i>
                            </li>
                          </ul>
                        </div>
                        <TextInput
                          name="ccPayment"
                          value={this.state.ccPayment}
                          label="Payment amount"
                          onChange={this.handleChange}
                          required={true}
                          error={false}
                          errorText="please Enter Card Name"
                        />

                        <TextInput
                          name="ccName"
                          value={this.state.ccName}
                          label="Card number"
                          onChange={this.handleChange}
                        />

                        <TextInput
                          name="ccNumber"
                          value={this.state.ccNumber}
                          label="Name on card"
                          onChange={this.handleChange}
                        />
                        <div class="row">
                          <div class="col-6">
                            <TextInput
                              name="ccExpiration"
                              value={this.state.ccExpiration}
                              label="Expiration"
                              placeholder="MM / YY"
                              maxLength={5}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div class="col-6">
                            <TextInput
                              name="code"
                              inputType="number"
                              value={this.state.code}
                              label="Expiration"
                              placeholder="Security code"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <Button
                          className="button-success button-lg"
                          type="submit"
                        >
                          Pay
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-header">
                  <strong class="card-title">Credit Card</strong>
                </div>
                <div class="card-body">
                  <div id="pay-invoice">
                    <div class="card-body">
                      <div class="card-title">
                        <h3 class="text-center">Register</h3>
                      </div>
                      <hr />
                      <form name="form" onSubmit={this.handleSubmit}>
                        <TextInput
                          name="ccPayment"
                          value={this.state.ccPayment}
                          label="Payment amount"
                          onChange={this.handleChange}
                          required={true}
                          error={false}
                          errorText="please Enter Card Name"
                        />

                        <TextInput
                          name="ccName"
                          value={this.state.ccName}
                          label="Card number"
                          onChange={this.handleChange}
                        />

                        <TextInput
                          name="ccNumber"
                          value={this.state.ccNumber}
                          label="Name on card"
                          onChange={this.handleChange}
                        />
                        <div class="row">
                          <div class="col-6">
                            <TextInput
                              name="ccExpiration"
                              value={this.state.ccExpiration}
                              label="Expiration"
                              placeholder="MM / YY"
                              maxLength={5}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div class="col-6">
                            <TextInput
                              name="code"
                              inputType="number"
                              value={this.state.code}
                              label="Expiration"
                              placeholder="Security code"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <Button
                          className="button-success button-lg"
                          type="submit"
                        >
                          Pay
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <strong class="card-title">Register</strong>
                </div>
                <div class="card-body">
                  <Form onSubmit={this.submitFormHandler}>
                    <TextInput
                      name="first_name"
                      value={this.state.first_name}
                      label="First Name"
                      onChange={this.handleChange}
                      error={this.state.nameError}
                      errorText="please Enter Valid Name"
                    />

                    <TextInput
                      name="last_name"
                      value={this.state.last_name}
                      label="Last Name"
                      onChange={this.handleChange}
                    />
                    <TextInput
                      name="email"
                      inputType="email"
                      value={this.state.email}
                      label="Email Address"
                      onChange={this.handleChange}
                    />
                    <TextInput
                      name="mobile"
                      value={this.state.mobile}
                      label="Mobile Number"
                      onChange={this.handleChange}
                    />

                    <TextInput
                      name="password"
                      inputType="password"
                      value={this.state.password}
                      label="Password"
                      onChange={this.handleChange}
                    />

                    <Button type="submit">Register</Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forms;
