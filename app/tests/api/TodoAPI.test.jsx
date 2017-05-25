import expect from 'expect';

import TodoAPI from '../../api/TodoAPI';

describe('TodoAPI', () => {
	// clean up the localStorage before each test
	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			const todos = [{
				id: 23,
				test: 'test',
				completed: false
			}];

			TodoAPI.setTodos(todos);

			const actualTodos = JSON.parse(localStorage.getItem('todos'));

			// use toEqual to check if two objects contents are the same
			// use toBe to check if two objects refers to the same memory address
			expect(actualTodos).toEqual(todos);
		});

		it('should not set invalid todos array', () => {
			const badTodos = {
				id: 23,
				test: 'test',
				completed: false
			};

			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		});		
	});

	describe('getTodos', () => {
		it('should return empty array for bad localstorage data', () => {
			const actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual([]);
		});

		it('should return todo if valid array in localstorage', () => {
			const todos = [{
				id: 23,
				test: 'test',
				completed: false
			}];

			localStorage.setItem('todos', JSON.stringify(todos));

			const actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);
		});			
	});	
});