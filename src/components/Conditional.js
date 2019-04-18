import React from 'react';

const Conditional = (props) => {
	if (props.isLoading === true) {
		return(
			<p>Loading Conditional Component ...... !</p>
		)
	} else {
		return(
			<p>Some cool new stuff loaded successfully...!</p>
		)
	}
}

export default Conditional