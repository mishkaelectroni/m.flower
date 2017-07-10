import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ''
		};
	}

	handleSubmit() {
	  console.log('form submitted and email value is', this.state.email);
	}

	handleEmailChange(event) {
	  console.log('handleEmailChange', this);
	  this.setState({email: event.target.value});
	}

	render() {

		return (
			<div className="form">
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="E-mail"
					value={this.state.email}
					onChange={this.handleEmailChange}
				/>	
				<button>Save</button>
			</form>
			</div>
		);
	}
}
export default Form;