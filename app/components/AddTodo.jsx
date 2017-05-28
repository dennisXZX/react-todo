import React, { Component } from 'react';

class AddTodo extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		// get the value from the input
		const todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value = '';
			this.props.handleAddTodo(todoText);
		} else {
			this.refs.todoText.focus();
		}
	}	
	
	render() {
		return (
			<div className="container__footer">
				<form onSubmit={this.handleSubmit}>
					<input ref="todoText" type='text' placeholder='What do you need to do?' />
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		)
	}
}

export default AddTodo;