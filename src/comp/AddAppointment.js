import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class AddAppointment extends Component {

  state = {
    allGroups:['Team A', 'Team B', 'Team C','Team D']
  }

  render() {
    return (

      <div className="add">

      <h1>Office schedule</h1>
        <Input onChange={this.handleChange.bind(this)} placeholder="Enter subject" name="name" />
        <Input onChange={this.handleChange.bind(this)} placeholder="Enter description" name="description" />
        <Input onChange={this.handleChange.bind(this)} placeholder="Enter date" name="date" type="date" />
        <Input onChange={this.handleChange.bind(this)} placeholder="Enter start time" name="start" type="time" />
        <Input onChange={this.handleChange.bind(this)} placeholder="Enter end time" name="end" type="time" />

        

        <select className="custom-select" onChange={this.handleChange.bind(this)} name="groupID"  >
          <option>select group</option>
          {this.state.allGroups.map(g => <option key={g} value={g} >{g} </option>)}
        </select>
        <br />

        <Button outline color="warning" onClick={this.passDataToApp.bind(this)} >Add meeting</Button>
        
      </div>
      

    );
  }


  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  passDataToApp() 
  {
      this.props.addAppFunc(this.state)
  }




  

   
  


}

export default AddAppointment;
