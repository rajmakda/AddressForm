import React, { Component } from 'react';
import './App.css';
import GBForm from './GBForm'
import USForm from './USForm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      country: ""
    }
    this.handleCountryChange = this.handleCountryChange.bind(this)
  }

  handleCountryChange = (e) => {
    this.setState({country: e.target.value})
  }

  renderForm() {
    let country = this.state.country
    if (country === "GB") {
    return <GBForm />;
    } else if (country === "US") {
      return <USForm />;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <form id="addressForm" action="#">
            <div className="form-group" style={{width: '25%'}}>
              <label htmlFor="selectCounry" style={{float:'left'}}>Please select your country</label>
              <select onChange={this.handleCountryChange} value={this.state.country} className="form-control">
                <option value="">None</option>
                <option value="GB">Great Britain</option>
                <option value="US">United States</option>
              </select>
            </div>
            <div className="form-group">
              <label>Please Enter Your Address</label>
              {this.renderForm()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
