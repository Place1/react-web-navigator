import 'expose?jQuery!jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactNavbar from './ReactNavbar';
import First from './First.js';

class App extends React.Component {
	render() {
		return (
			<div className="main">
				<ReactNavbar
					title="first view"
					root={First}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
