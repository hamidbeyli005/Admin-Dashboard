import React, { Component } from "react";

export default class Left extends Component {
  render() {
    return (
      <div className="containerLeft">
        <aside>
          <div className="top">
            <div className="logo">
              {/* <img src={require("../images/logoHamid.png")} alt="" /> */}
              <h1 className="name"><span className="danger ">.</span>Hamid<span className="danger ">beyli</span> </h1>
            </div>
            <div className="close" id="close-button">
              <span class="material-icons-sharp">close</span>
            </div>
          </div>

          <div className="sideBar">
            <a href="/#">
              <span class="material-icons-sharp">dashboard</span>
              <h3>Dashboard</h3>
            </a>
            <a href="/#" className="active">
              <span class="material-icons-sharp">person</span>
              <h3>Customers</h3>
            </a>
            <a href="/#">
              <span class="material-icons-sharp">grading</span>
              <h3>Orders</h3>
            </a>
            <a href="/#">
              <span class="material-icons-sharp">analytics</span>
              <h3>Analytics</h3>
            </a>
            <a href="/#">
              <span class="material-icons-sharp">mail_outline</span>
              <h3>Messages <span className="messageCount">23</span></h3>
            </a>
            <a href="/#">
              <span class="material-icons-sharp">inventory</span>
              <h3>Products</h3>
            </a>
            
            <a href="/#">
              <span class="material-icons-sharp">settings</span>
              <h3>Settings</h3>
            </a>
            <a href="/#">
              <span class="material-icons-sharp">add</span>
              <h3>Add Product</h3>
            </a>
            <a href="/#">
              <span class="material-icons-sharp">logout</span>
              <h3>Logout</h3>
            </a>
          </div>
        </aside>
      </div>
    );
  }
}
