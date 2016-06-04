import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.scss';

class ReactNavbar extends React.Component {

	static propTypes = {
		root: PropTypes.func.isRequired,
		title: PropTypes.string,
	}

	static Animations = {
		push: 'push',
		pop: 'pop',
	}

	constructor(props) {
		super(props);
		this.setInitialState(props);
		this.rightClicked = this.rightClicked.bind(this);
		this.leftClicked = this.leftClicked.bind(this);
	}

	getCurrent() {
		if (this.state.stack.length === 0) {
			return {};
		}
		return this.state.stack[this.state.stack.length - 1];
	}

	setInitialState(props) {
		const stack = [];
		if (props.root) {
			stack.push({
				component: props.root,
				title: props.title,
			});
		}
		this.state = {
			stack,
			animation: props.animation,
		};
	}

	push(component, title = '', animation = ReactNavbar.Animations.push) {
		this.state.stack.push({ component, title });
		this.setState({
			stack: this.state.stack,
			animation,
		});
	}

	pop(animation = ReactNavbar.Animations.pop) {
		if (this.state.stack.length > 1) {
			this.state.stack.pop();
			this.setState({
				stack: this.state.stack,
				animation,
			});
		}
	}

	leftClicked() {
		this.pop();
	}

	rightClicked() {
		// no default action
	}

	renderLeftItem() {
		return this.getCurrent().leftItem || (
			<button onClick={this.leftClicked}>{'<'}</button>
		);
	}

	renderMiddleItem() {
		return this.getCurrent().middleItem || (
			<span>{this.getCurrent().title}</span>
		);
	}

	renderRightItem() {
		return this.getCurrent().rightItem || (
			<button onClick={this.rightClicked}>{'#'}</button>
		);
	}

	renderComponent() {
		const current = this.getCurrent();
		const Component = current.component;
		if (!Component) {
			return null;
		}
		return (
			<Component
				ReactNavbar={this}
				key={this.state.stack.length}
				{...current.props}
			/>
		);
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

export default ReactNavbar;
