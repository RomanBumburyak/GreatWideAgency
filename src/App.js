import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Customers from './components/Customers';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="App-logo"> </div>
         <NavBar/>

        <header className="App-header">


          <a
            className="App-link"
            href="https://intelliapp2.driverapponline.com/c/greatwidetm?r=website&uri_b=ia_greatwidetm_731524647"
            target="_blank"
            rel="noopener noreferrer"

          >
            Apply Today
          </a>


        </header>


        <div className="Main-Page">
          <h1>Mission Transportation </h1>
          <p>Top 3 Agent for GreatWide Transportation</p>
        </div>

        <Customers/>


      </div>
    );
  }
}

export default App;
