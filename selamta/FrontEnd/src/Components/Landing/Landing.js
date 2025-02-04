import React, { Component } from 'react';
import './Landing.css';
import Login from './../Login/Login'
import Register from './../Register/Register'
import ReactDOM from 'react-dom'


class Landing extends Component {

  constructor(props) {
    super(props)

    this.showLogin = this.showLogin.bind(this);
    this.showRegister = this.showRegister.bind(this);
  }

  showLogin() {
    ReactDOM.render(<Login />, document.getElementById('root'));
  }

  showRegister() {
    ReactDOM.render(<Register />, document.getElementById('root'));
  }

  render() {
    return(
      <div className="centeredANDmiddled">
        <button onClick={this.showLogin} className="landing-page-button-large">Log in as SELAMTA employee</button>
        <button onClick={this.showRegister} className="landing-page-button-large">Register new Employee</button>
      </div>
    )
  }
}

export default Landing;
