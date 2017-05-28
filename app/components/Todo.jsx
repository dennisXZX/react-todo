import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component {
	render() {
		const { id, text, completed, createdAt, completedAt } = this.props;
		const todoClassName = completed ? 'todo todo-completed': 'todo';
		const renderDate = () => {
			let message = 'Created @ ';
			let timestamp = createdAt;

			if (completed) {
				message = "Completed @ ";
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY - h:mm a');
		};

		const toogleTodo = () => {
			this.props.onToggle(id);
		}

		return (
			<div className={todoClassName} onClick={toogleTodo}>
				<div>
					<input type="checkbox" defaultChecked={completed} />
				</div>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		)
	}
}

export default Todo;