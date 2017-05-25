import React, { Component } from 'react';
import uuid from 'uuid';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoAPI from '../api/TodoAPI';

class TodoApp extends Component {
	state = {
		showCompleted: false,
		searchText: "",
		todos: TodoAPI.getTodos()
	}

	handleAddTodo = (text) => {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});
	}

	handleToggle = (id) => {
		// iterate through the todos list to see any change need to be made
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		})

		this.setState({todos: updatedTodos});
	}

	handleSearch = (showCompleted, searchText) => {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	}

	componentDidUpdate() {
		TodoAPI.setTodos(this.state.todos);
	}

	render() {
		const { todos } = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} onToggle={this.handleToggle} />
				<AddTodo handleAddTodo={this.handleAddTodo} />
			</div>
		)
	}
}

export default TodoApp;