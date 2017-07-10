import React, { Component } from 'react';

class Search extends Component {
	
	render() {
				
		return (
			<div className="search">
				 <a href={'#'}>
					<img src={require('./img/search.jpg')}/>
				</a>
			</div>
		);
	}
}
export default Search;