import React, { Component } from 'react';


export default class Child extends Component {
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
      this.state.user.push(this.state.objectData);
      this.setState({
        user: this.state.user
      }, () => {
        console.log("array", this.state.user)
        this.state.name = "";
        this.state.email = "";
        this.state.mobile = "";
        this.state.objectData = {};
        this.setState({
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
          objectData: this.state.objectData,
        })
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

