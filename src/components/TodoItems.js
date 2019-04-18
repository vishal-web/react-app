import React from 'react';


const TodoItems = (props) => {
	const completedStyle = {
	  fontStyle: "italic",
	  color: "#cdcdcd",
	  textDecoration: "line-through"
	}

	return (

		<li className='list-group-item form-group' >
			<div className='checkbox'>
				<input type='checkbox' onChange={() => props.handleChange(props.todo.id)} name='check'  checked={props.todo.completed} />
				<label className=''  style={props.todo.completed ? completedStyle : null}> {props.todo.title} </label>
			</div>
		</li>
	)
}



export default TodoItems