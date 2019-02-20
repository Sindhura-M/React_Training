import React, {Component} from 'react';

export default class Display extends Component{
	constructor(props){
		super(props);
		this.state = {
			hobby: "hi"
		}
	}

	/*componentWillReceiveProps(newProps){
		console.log("componentWillReceiveProps", newProps);
	}*/

	shouldComponentUpdate(newProps, prevProps){
		return false;
	}


	componentWillUpdate(nextProps, nextState){
		console.log("componentWillUpdate", nextProps, nextState)
	}

	componentDidUpdate(prevProps, prevState){
		console.log("componentDidiUpdate", prevProps, prevState)
	}


	render(){
		//alert("render")

		return(
			<div>
			Display component
			<p>{this.props.name}</p>
			</div>
		);
	}
}