import $ from 'jquery';

export default {
	setTodos: function(todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function() {
		const stringTodos = localStorage.getItem('todos');
		let todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {

		}

		if ($.isArray(todos)) {
			return todos;
		} else {
			return [];
		}
	},
	filterTodos: function(todos, showCompleted, searchText) {
		let filteredTodos = todos;

		// Filter by showCompleted
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});

		// Filter by searchText
		filteredTodos = filteredTodos.filter((todo) => {
			if (todo.text.indexOf(searchText) !== -1) {
				return true;
			} else {
				return false;
			}
		})

		// Sort todos with non-completed first
		filteredTodos.sort((a, b) => {
			return a.completed < b.completed ? -1 : 1;
		});

		return filteredTodos;
	}

}