import React, { Component } from 'react';
import './Customers.css';


class Customers extends Component {
  render() {
    return (
      <div className="Customer-App">


        <div className="Main-Page-Customers">
          <h1>Great Wide Truckload management CUSTOMER.JS </h1>
          <p>Top 4 Agent for GreatWide Transportation</p>
        </div>

     
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Equiptment Types:</th>
      <th scope="col">Vans</th>
      <th scope="col">Reefers</th>
      <th scope="col">FlatBeds</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row"> Perks:</th>
      <td>75% Net Pay</td>
      <td>Agency Based</td>
      <td>Lease to purchase program</td>
      
    </tr>
    <tr>
      <th scope="row">Benefits:</th>
      <td>Weekly Settlements</td>
      <td>Weekly Pay</td>
      <td>Fuel Advances</td>
    </tr>
    <tr>
      <th scope="row">Operational Benefits:</th>
      <td>Dedicated dispatchers</td>
      <td>Preferable Lanes assist</td>
      <td>Our own customers</td>
    </tr>
    <tr>
      <th scope="row">Tech we use</th>
      <td>PeopleNET</td>
      <td>Navigation and Routing</td>
      <td>We focus on Fleet Performance</td>
    </tr>
  </tbody>
</table>



      </div>
    );
  }
}

export default Customers;
