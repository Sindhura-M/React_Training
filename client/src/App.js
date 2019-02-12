import React, { Component } from 'react';
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

