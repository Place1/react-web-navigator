import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactNavbar from './ReactNavbar';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import First from './First.js';
import Seccond from './Seccond.js';

class App extends React.Component {
	static PropTypes = {
		children: PropTypes.node.isRequired,
	}

	render() {
		return (
			<div className="main">
				<ReactNavbar>
					{this.props.children}
				</ReactNavbar>
			</div>
		);
	}
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={First} />
			<Route path="seccond" component={Seccond} />
		</Route>
	</Router>
), document.getElementById('App'));
