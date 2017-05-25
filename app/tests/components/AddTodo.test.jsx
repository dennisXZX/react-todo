
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import AddTodo from '../../components/AddTodo';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should call handleAddTodo prop with valid data', () => {
		const todoText = 'Check mail';
		const spy = expect.createSpy();
		const addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy} />);
		const $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);
	});

	it('should not call handleAddTodo prop with invalid data', () => {
		const todoText = '';
		const spy = expect.createSpy();
		const addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy} />);
		const $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});	
});