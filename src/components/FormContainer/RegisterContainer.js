import React from 'react';
import RegisterComponent from '../FormComponent/RegisterComponent'
import axios from 'axios'
import qs from 'qs';

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
			formError : '',
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

	async handleValidateInput(e) {
		e.preventDefault();
	 	
	 	let url = API + '/api/signup'; 
		
		let formData = qs.stringify({
			name : this.state.name,
			email : this.state.email,
			password : this.state.password,
			gender : this.state.gender,
			position : this.state.position, 
			knowledge : this.state.knowledge, 
		});

 		let config = {
 			headers : {
 				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
 			}
 		} 

 		axios.post(url, formData, config)
 			.then((response) => { 
 				return response;
 			})
 			.catch((error) => {
 				console.log(JSON.stringify(error))
 			})
 			.then((data) => { 
 				data = data.data;  

 				if (data.status === 'error') {
 					this.setState({formError : data.errors});
 				}
 				console.log(this.state.formError);
  		});

	}

	/*componentDidMount() {
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

			// console.log(this.state.products);
		})
	}*/		


	render() {
		return (
			<div className=''>
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