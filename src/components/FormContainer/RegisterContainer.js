import React from 'react';
import RegisterComponent from '../FormComponent/RegisterComponent'

const PORT = 3001; 
const API = 'http://localhost:' + PORT;

class RegisterContainer extends React.Component {

	constructor() {
		super()

		this.state = {
			name : '',
			email : '',
			password : '',
			isChecked : false,
			gender : '',
			position : '',
			knowledge : {
				php : false,
				java : false,
				javascript : false,
			},
			products : [],
			isLoaded : false,
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {

		const target = event.target;
		const value = (target.type === 'checkbox') ? target.checked : target.value;
		const name = target.name;

		if (name === 'php' || name === 'java' || name === 'javascript') {

			// if you don't know spread syntax
			let knowledge = Object.assign({} , this.state.knowledge);
			knowledge[name] = target.checked
			this.setState({knowledge});
			
			/*
			With spread 
			this.setState(prevState => ({
				knowledge : {
					...prevState.knowledge,
					[name] : target.checked
				}
			}))*/
		} else {
			this.setState({
				[name] : value
			})
		}


		// without spread operator
		// let knowledge = Object.assign({} , this.state.knowledge);
		/*
		value = (event.target.type === 'radio' ) ? event.target.checked : event.target.value;
		const {name, value} = event.target;
		this.setState({
			[event.target.name] : event.target.value
		})*/

		/*
		Basic Implementation From Here
		this.setState({
			name : event.target.value
		})*/ 
	}


	handleSubmit(event) {
		this.handleValidateInput(event);
	}

	handleValidateInput(e) {
		e.preventDefault();
	
		let url = API + '/product/list'; 
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((products) => {
				// products = JSON.stringify(products); 
				if (products.status === 'success') {
					this.state.product = products.data;
				} 

				// console.log(JSON.stringify(products));
			})
	}

	componentDidMount() {
		let url = API + '/product/list'; 
		fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((result) => { 
			this.setState({
				isLoaded : true,
				products : result.data, 
			})

			console.log(this.state.products);
		})
	}		


	render() {
		return (
			<div className='container'>
				<RegisterComponent 
					handleSubmit={this.handleSubmit} 
					handleChange={this.handleChange} 
					formData={this.state}
				/>

			</div>
		)
	}
}

export default RegisterContainer