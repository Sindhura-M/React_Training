/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';
import child2 from './child2';
import jsonData from './sample.json';
import {Link} from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colors: [],
      objectData: {},
      toggle: true,
      country: "India",
      count: 100,
      userDetails: jsonData
    }
  }

  changeData(){
    console.log("triggered");
    this.setState({
      country: "US"
    })
  }

  receiveData(data){
    console.log("from child pincode value----->", data);
  }



  render() {
    return (
      <div className="App">
        <p>React js</p>
        {(this.state.userDetails.map((user, index) => {
          return(
              <div key={index}>
                  <p>{user.name}</p>
                  <p>{user.gender}</p>
                  <p>{user.hobby}</p>
              </div>
          );
        }))}
        <p>{this.state.country}</p>
        
        <button onClick={this.changeData.bind(this)}>Change it</button>
        <Link to="/child-form">
          <button>Goto child</button>
        </Link>
      </div>
    );
  }
}

*/


import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendUser} from './actions/index.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        pincode: 12345,
        name: "",
        email: "",
        mobile: "",
        objectData: {},
        user: []
    }
  }


  getData(e){
    this.setState({
      name: e.target.value
    })
  }

  getEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  getNumber(e){
    this.setState({
      mobile: e.target.value
    })
  }

  registerUser(e){
    e.preventDefault(); //stop the browser from refreshing
    this.state.objectData['name'] = this.state.name;
    this.state.objectData['email'] = this.state.email;
    this.state.objectData['mobile'] = this.state.mobile;
    this.setState({
      objectData: this.state.objectData
    }, () => {
      console.log("object", this.state.objectData)
      this.props.sendUser(this.state.objectData);
      this.setState({
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
          objectData: this.state.objectData,
        })
    })
  }

  /*sendParent(){
    this.props.sendDataToParent(this.state.pincode);
  }*/

  render() {
    return (
      <div className="App">
        <p>Child Component</p>
        <form onSubmit={this.registerUser.bind(this)}>
          <input type="text" value={this.state.name} onChange={this.getData.bind(this)} />
          <input type="email" value={this.state.email} onChange={this.getEmail.bind(this)} />
          <input type="number" value={this.state.mobile} onChange={this.getNumber.bind(this)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({sendUser: sendUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);