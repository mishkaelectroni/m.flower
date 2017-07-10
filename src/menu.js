import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

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
					
					{this.props.items.map((item, index) => 
						
						<a href={item.link} key={index}>{item.label}</a>
						
					)}

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

