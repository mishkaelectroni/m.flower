import React, { Component } from 'react';

class Basket extends Component {
	
	render() {
				
		return (
			<div className="Basket">
				 <a href={'#'}>
					<img src={require('./img/basket.png')}/>
				</a>
			</div>
		);
	}
}
export default Basket;