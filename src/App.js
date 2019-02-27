import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Customers from './components/Customers';
import NavBar from './components/NavBar';
import ContactRecruiter from './components/ContactRecruiter';
import Lanes from './components/Lanes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
         <div className="App-logo"> Agency Owner: Arthur Bumburyak
         
         </div>
        
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

        <Lanes/>
        
          {/* <h1>Mission Transportation </h1>
          <p>Top 25 Agent for GreatWide Transportation</p> */}
        

        <Customers/>
        <ContactRecruiter/>

      </div>
    );
  }
}

export default App;
