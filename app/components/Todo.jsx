import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component {
	render() {
		const { id, text, completed, createdAt, completedAt } = this.props;
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
			<div onClick={toogleTodo}>
				<input type="checkbox" defaultChecked={completed} />
				<p>{text}</p>
				<p>{renderDate()}</p>
			</div>
		)
	}
}

export default Todo;