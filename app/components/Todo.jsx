import React, { Component } from 'react';

class Todo extends Component {
	render() {
		const { id, text, completed } = this.props;

		const toogleTodo = () => {
			this.props.onToggle(id);
		}

		return (
			<div onClick={toogleTodo}>
				<input type="checkbox" defaultChecked={completed} />
				{text}
			</div>
		)
	}
}

export default Todo;