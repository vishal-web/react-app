import React from 'react';
import Register from './components/Register';
import './App.css'; 


class Api extends React.Component {
	constructor() {
		super()
		this.state = {
			loading : false,
			user : []
		}
	}

	componentDidMount() {
		let url = 'https://swapi.co/api/people/1';

		this.setState({loading:true})
		fetch(url)
			.then(response =>  response.json())
			.then(data => {
				this.setState({
					loading:false,
					user : data
				})
			}); 
	}

	render() {
		const text = this.state.loading ? 'loading...' : this.state.user.name;
		return (
			<div>
				<Register />
			</div>
		)
	}
}

export default Api;