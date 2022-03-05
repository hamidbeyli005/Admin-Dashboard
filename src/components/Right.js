import React, { Component } from "react";

export default class Right extends Component {
  render() {
    return (
      <div className="right">
        
        <div className="rightTop">
          <button className="menuButton">
            <span class="material-icons-sharp">menu</span>
          </button>
          <div className="themeButton">
            <span class="material-icons-sharp active">light_mode</span>
            <span class="material-icons-sharp ">dark_mode</span>
          </div>
          <div className="profile">
            <div className="profie-info">
              <p>
                Hey,<b>Daniel</b>
              </p>
              <span className="text-muted ">Admin</span>
            </div>
            <div className="profile-photo">
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20191116/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_1992804.jpg"
              />
            </div>
          </div>
        </div>

        <h1>Recent Updates</h1>

        <div className="recent-card">
          <div className="card-item">
            <div className="profile-photo">
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20191116/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_1992804.jpg"
              />
            </div>
            <div className="recent-card-info">
              <p>
                <b>Mike Tyson</b> received hıs order <br></br>
                of Night from teach GPS drone.
              </p>
              <p className="text-muted">2 Minutes Ago</p>
            </div>
          </div>
          <div className="card-item">
            <div className="profile-photo">
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20191116/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_1992804.jpg"
              />
            </div>
            <div className="recent-card-info">
              <p>
                <b>Mandly Roy</b> decimed her order <br></br>
                of 2 DJI Aır 25.
              </p>
              <p className="text-muted">5 Minutes Ago</p>
            </div>
          </div>
          <div className="card-item">
            <div className="profile-photo">
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20191116/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_1992804.jpg"
              />
            </div>
            <div className="recent-card-info">
              <p>
                <b>Djana Ayl</b> received his order of <br></br> KF012 Drone.
              </p>
              <p className="text-muted">6 Minutes Ago</p>
            </div>
          </div>
        </div>

        <h1 className="sales">Sales Analytics</h1>
        
        <div className="analyticsCards">
          <div className="analyticsCard">
            <div className="cardIcon">
              <span class="material-icons-sharp">shopping_cart</span>
            </div>
            <div className="salesInfo">
              <h3>Online Orders</h3>
              <p className="text-muted">Last 24 Hours</p>
            </div>
            <b className="success">+20%</b>
            <b>3746</b>
          </div>
          <div className="analyticsCard">
            <div className="cardIcon">
              <span class="material-icons-sharp">shopping_bag</span>
            </div>
            <div className="salesInfo">
              <h3>Offline Orders</h3>
              <p className="text-muted">Last 24 Hours</p>
            </div>
            <b className="danger">-14%</b>
            <b>1257</b>
          </div>
          <div className="analyticsCard">
            <div className="cardIcon">
              <span class="material-icons-sharp">person</span>
            </div>
            <div className="salesInfo">
              <h3>New Customers</h3>
              <p className="text-muted">Last 24 Hours</p>
            </div>
            <b className="success">+34%</b>
            <b>782</b>
          </div>
        </div>
        
        <div className="addProduct">
          <span class="material-icons-sharp">add</span>
          <h3>Add Product</h3>
        </div>
        
      </div>
    );
  }
}
