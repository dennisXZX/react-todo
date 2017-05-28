import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';

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
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		});
	}

	handleToggle = (id) => {
		// iterate through the todos list to see any change need to be made
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
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
		const { todos, showCompleted, searchText } = this.state;
		const filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<TodoSearch onSearch={this.handleSearch} />
							<TodoList todos={filterTodos} onToggle={this.handleToggle} />
							<AddTodo handleAddTodo={this.handleAddTodo} />							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default TodoApp;