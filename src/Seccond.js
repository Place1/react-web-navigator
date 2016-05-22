import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './style.css'

class Seccond extends React.Component {

	static propTypes = {
		ReactNavbar: PropTypes.object.isRequired,
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="screenTwo">
				Seccond
			</div>
		);
	}
}

export default Seccond
