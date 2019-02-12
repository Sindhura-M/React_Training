import React, {Component} from 'react';
import Display from './Display.js';

export default class LifeCycle extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: "hi",
			array: ['a', 'b'],
			objDAta: {}
		}
	}

	componentWillMount(){
		//alert("componentWillMount")
	}

	componentDidMount(){
		//alert("componentDidMount")
		this.setState({
			name: "hello"
		}, () => {
			console.log("name changed from hi", this.state.name);
		})
	}

	render(){
		//alert("render")

		return(
			<div>
			LIfe cycle examples
			<Display name={this.state.name} user={this.state.array}  />
			</div>
		);
	}
}