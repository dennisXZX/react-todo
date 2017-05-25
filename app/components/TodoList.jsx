import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
	render() {
		const { todos } = this.props;		
		const renderTodos = () => {
			return (
				todos.map((todo) => <Todo key={todo.id} {...todo}
																	onToggle={this.props.onToggle} />)
			)
		};

		return (
			<div>
				{renderTodos()}
			</div>
		)
	}
}

export default TodoList;