import React, { Component } from 'react';

class Todo extends Component {
	state = {
		data: [],
		completed: false,
		date: new Date()
	}

	render() {
		
		
		return (
			<div>
				<p>halo world</p>
				<input type="text" />
			</div>	
		)
	}
	
}

export default Todo;	