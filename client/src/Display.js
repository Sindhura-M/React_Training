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
		console.log("shouldComponentUpdate", newProps, prevProps);
		if(newProps.name !== prevProps.name){
			return true;
		}
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
			<p>hi diplay</p>
			</div>
		);
	}
}