import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ''
		};
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();	
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
					className="emailField"
				/>	
				<button className="submitBtn">Save</button>
			</form>
			</div>
		);
	}
}
export default Form;