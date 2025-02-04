import React, { Component } from 'react';
import './Register.css';
import ReactDOM from 'react-dom';
import Login from '../Login/Login';

class Register extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(){
    if(this.refs.companycode.value.toUpperCase() === "SELAMTA01" && this.refs.firstname.value.length > 0 && this.refs.lastname.value.length > 0){
      this.submitToDB();
    } else {
      return this.errorInSubmit();
    }
  }

  submitToDB(){
    // here is where the AJAX request containing the employee first and last names will be sent to the DB,
    // and it will alert the user their EMPLOYEEID
    alert("PLEASE WRITE THE FOLLOWING INFORMATION DOWN: your EMPLOYEEID is  ");
    this.sendtoLogin();
  }

  errorInSubmit(){
    alert("There was an Error submitting employee information. Please ensure that the employee first and last names are not empty and comprised of only letters. Data was not submitted.");
  }

  sendtoLogin(){
    ReactDOM.render(<Login />, document.getElementById('root'));
  }

  render(){
    return(
      <div className="Register">
        <h1>Register Selamta Employee</h1>
        Enter your first name:
        <input type="text" ref="firstname" />
        <p>Enter your last name:
        <input type="text" ref="lastname" />
        </p>
        <p>Enter Company Code:
          <input type="text" ref="companycode" />
        </p>
        <button className="submit-registration-button" onClick={this.handleSubmit}>
        submit
        </button>
      </div>
    )
  }
}

export default Register;
