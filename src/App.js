import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactNavbar from './ReactNavbar';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import First from './First.js';
import Seccond from './Seccond.js';

class App extends React.Component {
	render() {
		return (
			<div className="main">
				<ReactNavbar
					title="first view"
					root={First}
					props={null}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
