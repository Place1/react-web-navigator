import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Seccond from './Seccond';
import './style.css'

class First extends React.Component {

	static propTypes = {
		ReactNavbar: PropTypes.object
	}

	constructor(props) {
		super(props);
	}

	btnClicked() {
		this.props.ReactNavbar.push(<Seccond />);
	}

	render() {
		return (
			<div className="screen">
				First
				<button onClick={this.btnClicked.bind(this)}>Go to seccond</button>
				<br/>
				<Link to="/seccond/">link to seccond</Link>
			</div>
		);
	}
}

export default First
