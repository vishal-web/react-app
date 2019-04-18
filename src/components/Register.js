import React from 'react'

class Register extends React.Component {

	constructor() {
		super()

		this.state = {
			name : '',
			email : '',
			password : ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {

	}

	handleChange(event) {
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	render() {
		return (
			<div className='container'>
				<div className='col-md-offset-3 col-md-6'>
					<h3>User Registration</h3>
					<form onSubmit={this.handleSubmit}>
						<div className='form-group'>
							<label>Name {this.state.name}</label>
							<input type='text' name='name' placeholder='Name' className='form-control' onChange={this.handleChange} />
						</div>
						<div className='form-group'>
							<label>Email {this.state.email}</label>
							<input type='text' name='email' placeholder='Email' className='form-control' onChange={this.handleChange} />
						</div>
						<div className='form-group'>
							<label>Password {this.state.password}</label>
							<input type='password' name='password' placeholder='Password' className='form-control' onChange={this.handleChange} />
						</div>
						<div className='form-group'>
							<input type='submit' className='btn btn-primary' />
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Register