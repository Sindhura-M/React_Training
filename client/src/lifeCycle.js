import React, {Component} from 'react';
import Display from './Display.js';
import axios from 'axios';

export default class LifeCycle extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: "",
			array: ['a', 'b'],
			objDAta: {},
			user: []
		}
	}

	componentWillMount(){
		//alert("componentWillMount")
	}

	getText(e){
		this.setState({
			name: e.target.value
		})
	}

	componentDidMount(){
		//alert("componentDidMount")
		this.setState({
			name: "hello"
		}, () => {
			axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
				console.log("response--->", response)
				this.setState({
					user: [...this.state.user, ...response.data]
				})
			})
		})
	}

	render(){
		//alert("render")

		return(
			<div>
			LIfe cycle examples
			<input type="text" onChange={this.getText.bind(this)} />
			<table className="table">
				<thead>
					<tr>
							<th>name</th>
							<th>email</th>
					</tr>
				</thead>
			<tbody>
						{(this.state.user.map((user, index) => {
							return(
								<tr>
								<td>{user.name}</td>
								<td>{user.email}</td>
								</tr>
							);
						}))}
				</tbody>
			</table>
			</div>
		);
	}
}