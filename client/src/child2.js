import React,{ Component} from 'react';

export default class Child2 extends component{
	constructor(props){
		super(props);
		this.state = {
			name : 'Sindhura',
			email : 'abc@gmail.com',
			phone : '12345'
			objectSelf : {},
			user: []
		}
	}
} 
getName(e){
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
		phone: e.target.value
	})
}

submitMyForm(e){
	e.preventDefault();
	this.state.objectSelf['name'] : this.state.name;
	this.state.objectSelf['email'] : this.state.email;
	this.state.objectSelf['phone'] : this.state.phone;
	this.setState({ objectSelf : this.state.objectSelf
	},
		() => {console.log("objectSelf", this.state.objectSelf)
		this.state.user.push(this.state.objectSelf);
		this.setState({
			user: this.state.user
		},
		() => {console.log("user", this.state.user)
			this.state.name = "";
			this.state.name = "";
			this.state.name = "";
			this.state.onChange = {};
			this.setState({
				name: this.state.name,
				email: this.state.email,
				phone: this.state.phone,
				objectSelf: this.state.objectSelf
			})
		})
	})
}
render(){
	return(
		<div><h1>Child2</h1></div>
		<form onSubmit={this.submitMyForm.bind(this)}>
		<input type="text" onChange={this.getName.bind(this)} />
		<input type="text" onChange={this.getEmail.bind(this)} />
		<input type="text" onChange={this.getNumber.bind(this)} />
		<button type="Submit">Submit</button>
		)
}