import React, { PropTypes } from 'react';
import './style.css';

class ReactNavbar extends React.Component {

	static propTypes = {
		root: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		this.state = {
			stack: [{
				component: this.props.root
			}]
		};
	}

	getCurrent() {
		return this.state.stack[this.state.stack.length - 1];
	}

	pop() {
		if (this.state.stack.length !== 1) {
			this.state.stack.pop();
			this.setState({
				stack: this.state.stack
			});
		}
	}

	push(component) {
		this.state.stack.push({component});
		this.setState({
			stack: this.state.stack
		});
	}

	renderLeftItem() {
		return this.getCurrent().leftItem || (<button>{'<'}</button>);
	}

	renderMiddleItem() {
		return this.getCurrent().middleItem || (<span>title</span>);
	}

	renderRightItem() {
		return this.getCurrent().rightItem || (<button>{'#'}</button>);
	}

	leftClicked() {
		this.pop();
	}

	renderComponent() {
		const Component = this.getCurrent().component;
		return (<Component ReactNavbar={this} />);
	}

	render() {
		return (
			<div>
				<div className="reactNavbar-container">
					<div className="reactNavbar-left" onClick={this.leftClicked.bind(this)}>
						{this.renderLeftItem()}
					</div>
					<div className="reactNavbar-middle">
						{this.renderMiddleItem()}
					</div>
					<div className="reactNavbar-right">
						{this.renderRightItem()}
					</div>
				</div>
				{this.renderComponent()}
			</div>
		);
	}
}

export default ReactNavbar
