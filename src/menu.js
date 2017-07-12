import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
			                     <li><Link to="/">главная</Link></li>
			                     <li><Link to="/decorCvet">декоративно-цветущие</Link></li>
			                     <li><Link to="/decorList">декоративно-лиственные</Link></li>
			                     <li><Link to="/kaktus">кактусы и суккуленты</Link></li>
			                     <li><Link to="/orhidei">орхидеи</Link></li>
			                     <li><Link to="/about">o нас</Link></li>
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

