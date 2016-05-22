import React from 'react';
import ReactDOM from 'react-dom';
import ReactNavbar from './ReactNavbar';
import First from './First.js';
import Seccond from './Seccond.js';

class App extends React.Component {
	static propTypes = {

	}

	render() {
		return (
			<div className="main">
				<ReactNavbar root={First} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
