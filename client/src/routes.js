import React from 'react';
import {BrowserRouter, HashRouter, Switch, Route} from 'react-router-dom';
import App from './App.js';
import Child from './Child.js';
import LifeCycle from './lifeCycle.js';

export default class Routes extends React.Component{
	render(){
		return(
			<HashRouter>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/home" component={App} />
					<Route exact path="/child-form" component={Child} />
					<Route exact path="/life-cycle" component={LifeCycle} />
				</Switch>
			</HashRouter>
		);
	}
}