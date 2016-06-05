import React, { PropTypes } from 'react';
import Seccond from './Seccond';
import './style.css';
class First extends React.Component {

	static propTypes = {
		ReactNavbar: PropTypes.object,
	}

	constructor(props) {
		super(props);
		this.btnClicked = this.btnClicked.bind(this);
	}

	btnClicked() {
		this.props.ReactNavbar.push(Seccond, 'Second View');
	}

	render() {
		return (
			<div className="screen">
				<h2>First</h2>
				<br />
				<button
					className="btn btn-default"
					onClick={this.btnClicked}
				>
					Go to second
				</button>
			</div>
		);
	}
}

export default First;
