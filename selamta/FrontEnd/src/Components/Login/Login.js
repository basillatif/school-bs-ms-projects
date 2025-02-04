import React, { Component } from 'react';
import './Login.css';
import Hub from '../Hub/Hub';
import ReactDOM from 'react-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.validateInput = this.validateInput.bind(this);
  }

  validateInput() {
    // this is where we make ajax request to db to see if employeeid is validateInput
    // if successful it will call takeToForm
    return this.takeToForm()
  }

  takeToForm() {
    ReactDOM.render(<Hub employeeID={this.refs.employeeID.value}/>, document.getElementById('root'));
  }

  render(){
    return(
      <div>
        <p> Enter Employee ID:</p>
        <input ref="employeeID"/>
        <button onClick={this.validateInput}>Login as Employee</button>
      </div>
    )
  }
}

export default Login;
