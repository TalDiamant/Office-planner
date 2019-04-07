import React, { Component } from 'react';
import AddAppointment from './comp/AddAppointment';
import AllAppointments from './comp/AllAppointments';

 
class App extends Component {

state={
    allAppointments:[]
}


  render() {
    return (
      <div className="App">
      <AddAppointment    allgroups={this.state.allGroups} addAppFunc={this.AddAppToArr.bind(this)}  />
      <AllAppointments   allappointments={this.state.allAppointments}   />  
      </div>
    );
  }

  AddAppToArr(newApp) {
    let oldAppArray = this.state.allAppointments.slice();
    oldAppArray.push(newApp);
    this.setState({allAppointments: oldAppArray});
  }

}

export default App;
