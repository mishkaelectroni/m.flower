import React, { Component } from 'react';

class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = { isOpened: false };
	}

	toggleState() {
		this.setState({ isOpened: !this.state.isOpened });
	}
	render() {
		console.log('isOpened', this.state.isOpened);
		let menuText;
		if (this.state.isOpened) {
			menuText = <div className="menuLogo">
					<ul>
						<li><a href="#">декоративно-цветущие</a></li>
						<li><a href="#">декоративно-лиственные</a></li>
						<li><a href="#">кактусы и суккуленты</a></li>
						<li><a href="#">орхидеи</a></li>
						<li><a href="#">горшки и кашпо</a></li>
					</ul>
			  </div>
		}
		return (
			<div onClick={this.toggleState.bind(this)} className="App-menu">
				 
				{ menuText }
			</div>
			);
	}
}
export default Menu;