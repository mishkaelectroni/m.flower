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
		console.log('items', this.props.items);
		let menuText;
		if (this.state.isOpened) {
			menuText = <div className="menuLogo">
					<ul>
						<li>{this.props.items.map((item, index) =>
						  <a href={item.link} key={index}>{item.label}</a>
						)}</li>
						
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