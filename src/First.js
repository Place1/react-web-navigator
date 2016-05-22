import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Seccond from './Seccond';

class First extends React.Component {

	static propTypes = {
		ReactNavbar: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
	}

	btnClicked() {
		this.props.ReactNavbar.push(Seccond);
	}

	render() {
		return (
			<div>
				First
				<button onClick={this.btnClicked.bind(this)}>Go to seccond</button>
			</div>
		);
	}
}

export default First
