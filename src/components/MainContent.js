import React from 'react';
import TodoItems from './TodoItems';


/*class FunctionalMainContent extends React.Component {
	
	constructor() {
		super();

		console.log(this.state);
	}

	handleChange() {
		console.log("Changed the checkbox state");
	}

	render() {
		return (
			<main className='container'>
				<ul className='list-group'>
				{
					this.state.todo.todoItems.map((todo, key) =>
						<TodoItems todo={todo}/>
					)
				}
				</ul>
			</main>
		)	
	}	
}*/


class MainContent  extends React.Component {
	
	constructor(props) {
		super(props) 

		this.state = {
			todos : props.todoItems
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {
		this.setState(prevState => {  
			const updatedTodo = prevState.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}

				return todo;
			})
			
			return {
				todo : updatedTodo
			}
		})
	}

	render() {
		return (
			<main className='container'>
				<ul className='list-group'>
					{
						this.props.todoItems.map((todo,key) => <TodoItems key={key} handleChange={this.handleChange} todo={todo}/>)
					}
				</ul>
			</main>
		)
	}
}
 


export default MainContent;



