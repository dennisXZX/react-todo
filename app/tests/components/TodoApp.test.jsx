import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from '../../components/TodoApp';

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add to do to the todos state on handleAddTodo', () => {
		const todoText = "test text";
		const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);

		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('should toggle completed value when handleToggle called', () => {
		const todoData = [{
			id: 11,
			text: "test",
			completed: false,
			createAt: 0,
			completedAt: undefined
		}];
		const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: todoData});

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(todoApp.state.todos[0].id);
		expect(todoApp.state.todos[0].completed).toBe(true);	
		expect(todoApp.state.todos[0].completedAt).toBeA('number');	
	});	

	it('should toggle todo from completed to incompleted', () => {
		const todoData = [{
			id: 11,
			text: "test",
			completed: true,
			createAt: 0,
			completedAt: 123
		}];
		const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: todoData});

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(todoApp.state.todos[0].id);
		expect(todoApp.state.todos[0].completed).toBe(false);	
		expect(todoApp.state.todos[0].completedAt).toNotExist();	
	});		
});