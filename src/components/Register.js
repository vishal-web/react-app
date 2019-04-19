import React from 'react';
import RegisterContainer from './FormContainer/RegisterContainer';


class Register extends React.Component {

	constructor(props) {
		super(props)
	}

	render() { 
		return (
			<div className='container'>
				<div className='col-md-offset-4 col-md-6'>
					<h4>User Registration</h4>
					<RegisterContainer/>
					<Product 
						isLoaded={this.props.isLoaded} 
					/>
				</div>
			</div>
		)
	}
}

export default Register