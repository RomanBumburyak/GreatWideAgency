import React, { Component } from 'react';
import './ContactRecruiter.css';


class ContactRecruiter extends Component {
        state = {
            name: '',
            age: 23
        }
        handleChange = (e) => {
            this.setState({
                name: e.target.value
            });
        }

        handleSubmit = (e) => {
            e.preventDefault();
            console.log('form submitted ', this.state.name)
        }
  
    render() {
    return (
      <div className="Contact-Recruiter-App">
          <h1>Great Wide Truckload Recruiters </h1>
          <h1>NOW HIRING OWNER OPERATORS AND DRIVERS </h1>
          
            <h2> Hello (Driver Name): {this.state.name}</h2>
        <div >
            <form className="Contact-Recruiter-Form" onSubmit={this.handleSubmit}>
             <label>
                  Full Legal Name:
              <input type="text" onChange={this.handleChange} />
             </label>
             <label>
                  City and State :
              <input type="text" onChange={this.handleChange} />
             </label>
             <label>
                  Date:
              <input type="text" onChange={this.handleChange} />
             </label>
             <label>
                  Available to Start :
              <input type="text" onChange={this.handleChange} />
             </label>
             
             <label>
               DL Number:
              <input type="text" onChange={this.handleChange} />
             </label>
             <label>
               Any past DUI's?
              <input type="text" onChange={this.handleChange} />
             </label>
             <label>
               Are you willing to undergo a back ground check?
              <input type="text" onChange={this.handleChange} />
             </label>
             <label>
               Are you willing to pass a Drug Test?
              <input type="text" onChange={this.handleChange} />
             </label>
             <div class="form-group">
            <label for="exampleFormControlFile1">Upload any additional paperwork here:</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
            <label for="exampleFormControlTextarea1">Type in anything else you would like to include</label>

            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <input type="submit" value="Submit" />
        </div>
            
           </form>
           
 

         </div>


      </div>
    );
  }
}

export default ContactRecruiter;
