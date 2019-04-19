import React from 'react'

class Product extends React.Component {
	constructor(props) {
		super(props) 
	}

	render() {
		const isLoaded = this.props.isLoaded;

		console.log(this.props.isLoaded);

		if (!isLoaded) {
			return <div>Data Loading</div>
		} else {
			return (

				<div>Data Loaded</div>
			)
		}
	}
}

export default Product;