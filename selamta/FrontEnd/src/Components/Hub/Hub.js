import React, { Component } from 'react';
import './Hub.css';
import IntakeForm from '../Form/IntakeForm';
import ProfileList from '../ProfileList/ProfileList';
import ReactDOM from 'react-dom';

class Hub extends Component{

  constructor(props){
    super(props)

    this.createProfile = this.createProfile.bind(this);
    this.viewProfiles = this.viewProfiles.bind(this);
  }

  createProfile(){
    return ReactDOM.render(<IntakeForm employeeID={this.props.employeeID}/>, document.getElementById('root'));
  }

  viewProfiles(){
    return ReactDOM.render(<ProfileList employeeID={this.props.employeeID}/>, document.getElementById('root'));
  }


  render(){
    return(
      <div className="Hub">
        <button onClick={this.createProfile}> Create Client Profile </button>
        <button onClick={this.viewProfiles}> View Client Profiles </button>
      </div>
    )
  }
}

export default Hub;
