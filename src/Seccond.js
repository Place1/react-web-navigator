import React, { PropTypes } from 'react';
import './style.css'

class Seccond extends React.Component {

	static propTypes = {
		ReactNavbar: PropTypes.object,
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="screenTwo">
				<h2>Second</h2>
				<br/>
			</div>
		);
	}
}

export default Seccond
