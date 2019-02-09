import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';
import child2 from './child2';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colors: [],
      objectData: {},
      toggle: true,
      country: "India",
      count: 100
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
        <p>{this.state.country}</p>
        
        <button onClick={this.changeData.bind(this)}>Change it</button>
        <Child dataSend={this.state.country} sendDataToParent={this.receiveData.bind(this)} />
      </div>
    );
  }
}

