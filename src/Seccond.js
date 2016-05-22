import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Seccond extends React.Component {

	static propTypes = {
		ReactNavbar: PropTypes.object.isRequired,
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Seccond
			</div>
		);
	}
}

export default Seccond
