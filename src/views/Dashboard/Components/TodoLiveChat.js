/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";

class TodoLiveChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title box-title">To Do List</h4>
              <div className="card-content">
                <div className="todo-list">
                  <div className="tdl-holder">
                    <div className="tdl-content">
                      <ul>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <i className="check-box"></i>
                            <span>
                              Conveniently fabricate interactive technology for
                              ....
                            </span>
                            <a href="#" className="fa fa-times"></a>
                            <a href="#" className="fa fa-pencil"></a>
                            <a href="#" className="fa fa-check"></a>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <i className="check-box"></i>
                            <span>Creating component page</span>
                            <a href="#" className="fa fa-times"></a>
                            <a href="#" className="fa fa-pencil"></a>
                            <a href="#" className="fa fa-check"></a>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" checked />
                            <i className="check-box"></i>
                            <span>Follow back those who follow you</span>
                            <a href="#" className="fa fa-times"></a>
                            <a href="#" className="fa fa-pencil"></a>
                            <a href="#" className="fa fa-check"></a>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" checked />
                            <i className="check-box"></i>
                            <span>Design One page theme</span>
                            <a href="#" className="fa fa-times"></a>
                            <a href="#" className="fa fa-pencil"></a>
                            <a href="#" className="fa fa-check"></a>
                          </label>
                        </li>

                        <li>
                          <label>
                            <input type="checkbox" checked />
                            <i className="check-box"></i>
                            <span>Creating component page</span>
                            <a href="#" className="fa fa-times"></a>
                            <a href="#" className="fa fa-pencil"></a>
                            <a href="#" className="fa fa-check"></a>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title box-title">Live Chat</h4>
              <div className="card-content">
                <div className="messenger-box">
                  <ul>
                    <li>
                      <div className="msg-received msg-container">
                        <div className="avatar">
                          <img src="images/avatar/64-1.jpg" alt="" />
                          <div className="send-time">11.11 am</div>
                        </div>
                        <div className="msg-box">
                          <div className="inner-box">
                            <div className="name">John Doe</div>
                            <div className="meg">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Perspiciatis sunt placeat velit
                              ad reiciendis ipsam
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="msg-sent msg-container">
                        <div className="avatar">
                          <img src="images/avatar/64-2.jpg" alt="" />
                          <div className="send-time">11.11 am</div>
                        </div>
                        <div className="msg-box">
                          <div className="inner-box">
                            <div className="name">John Doe</div>
                            <div className="meg">Hay how are you doing?</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="send-mgs">
                    <div className="yourmsg">
                      <input className="form-control" type="text" />
                    </div>
                    <button className="btn msg-send-btn">
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
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

export default TodoLiveChat;
