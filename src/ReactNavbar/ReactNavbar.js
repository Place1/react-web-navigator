import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';

class ReactNavbar extends React.Component {

	static propTypes = {
		root: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		this.state = {
			stack: [{
				component: this.props.root,
				animation: ''
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
				stack: this.state.stack,
				animation: 'pop'
			});
		}
	}

	push(component) {
		this.state.stack.push({component});
		this.setState({
			stack: this.state.stack,
			animation: 'push'
		});
	}

	renderLeftItem() {
		return this.getCurrent().leftItem || (<button onClick={this.leftClicked.bind(this)}>{'<'}</button>);
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
		return (<Component key={this.state.stack.length-1} ReactNavbar={this} />);
	}

	render() {
		return (
			<div className="reactNavbar">
				<div className="reactNavbar-container">
					<div className="reactNavbar-left">
						{this.renderLeftItem()}
					</div>
					<div className="reactNavbar-middle">
						{this.renderMiddleItem()}
					</div>
					<div className="reactNavbar-right">
						{this.renderRightItem()}
					</div>
				</div>
				<ReactCSSTransitionGroup
					transitionName={`reactNavbar-transition-${this.state.animation}`}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					{this.renderComponent()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default ReactNavbar
