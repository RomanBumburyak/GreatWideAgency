import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {
  render() {
    return (

<div> 
      <h3 style={{backgroundColor:'aqua'}}>Web Application currently in Progress, (courtesy of 7oaks.io)</h3>

        <div className="Main-NavBar">
          <div className="Main-Page-NavBar">
            
            <a className="anchor-nav">Apply</a>
            <a className="anchor-nav">Services</a>
            <a className="anchor-nav">About Us</a>

          </div>
        </div>

       </div>




    );
  }
}

export default NavBar;
