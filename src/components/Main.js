import React, { Component } from "react";
// import MainCards from './MainCards'

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="mainTop">
          <h1>Dashboard</h1>
          <div className="date">
            <input type="date"></input>
          </div>
        </div>

        <div className="salesCards">
          <div className="salesCard">
            <div className="card">
              <div className="cardLeft">
                <span class="material-icons-sharp">assessment</span>
                <h2>Total Sales</h2>
                <h1>$25.024</h1>
                <p>Last 24 Hours</p>
              </div>
              <div className="cardRight">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>82%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="salesCard">
            <div className="card">
              <div className="cardLeft">
                <div className="icon ">
                  <span class="material-icons-sharp expenses">leaderboard</span>
                </div>
                <h2>Total Expenses</h2>
                <h1>$12.128</h1>
                <p>Last 24 Hours</p>
              </div>
              <div className="cardRight">
                <svg>
                  <circle className="expenses" cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>62%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="salesCard">
            <div className="card">
              <div className="cardLeft">
                <div className="icon ">
                  <span class="material-icons-sharp income">query_stats</span>
                </div>
                <h2>Total Income</h2>
                <h1>$25.024</h1>
                <p>Last 24 Hours</p>
              </div>
              <div className="cardRight">
                <svg>
                  <circle className="income" cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>46%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="bottom">
        <h1>Recent Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HP Computer </td>
              <td>76982</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">Details</td>
            </tr>
            <tr>
              <td>Mini Drone</td>
              <td>76995</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">Details</td>
            </tr>
            <tr>
              <td>Mobile Phone</td>
              <td>76997</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">Details</td>
            </tr>
            <tr>
              <td>Bluetooth Mouse</td>
              <td>77028</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">Details</td>
            </tr>
          </tbody>
        </table>
        <a href="/#">Show All</a>
      </div>
      </div>
    );
  }
}
