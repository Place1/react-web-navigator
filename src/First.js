import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Seccond from './Seccond';
import './style.css'

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
			<div className="screen">
				First
				<button onClick={this.btnClicked.bind(this)}>Go to seccond</button>
			</div>
		);
	}
}

export default First
