import React from 'react'

const RegisterComponent = (props) => { 
	return (
		<form onSubmit={props.handleSubmit}>
			<div className='form-group'>
				<label>Name {props.formData.name}</label>
				<input type='text' name='name' placeholder='Name' className='form-control' onChange={props.handleChange} />
				{ props.formData.name }
			</div>
			<div className='form-group'>
				<label>Email {props.formData.email}</label>
				<input type='text' name='email' placeholder='Email' className='form-control' onChange={props.handleChange} />
			</div>
			<div className='form-group'>
				<label>Password {props.formData.password}</label>
				<input type='password' name='password' placeholder='Password' className='form-control' onChange={props.handleChange} />
			</div>

			<div className='form-group'>
				<label>Position {props.formData.position}</label>
				<select value={props.formData.position} className='form-control' name='position' onChange={props.handleChange}>
					<option value=''>Select Position</option>
					<option value='software-developer'>Software Developer</option>
					<option value='carpainter'>Carpainter</option>
					<option value='barber'>Barber</option>
				</select>
			</div>

			<div className='form-group'>
				<label>Gender</label>
				<label className='checkbox'><input type='radio' checked={props.formData.gender === 'Male'} onChange={props.handleChange} name='gender'  value='Male'/> Male</label>
				<label className='checkbox'><input type='radio' checked={props.formData.gender === 'Female'} onChange={props.handleChange} name='gender'  value='Female'/> Female</label>

				{props.formData.gender}
			</div>

			<div className='form-group'>
				<label>Knowledge</label>
				<div className=''>

					<label className='checkbox'><input type='checkbox' onChange={props.handleChange} name='php' checked={props.formData.knowledge.php}/> PHP</label>
					<label className='checkbox'><input type='checkbox' onChange={props.handleChange} name='java' checked={props.formData.knowledge.java}/> Java</label>
					<label className='checkbox'><input type='checkbox' onChange={props.handleChange} name='javascript' checked={props.formData.knowledge.javascript}/> Javascript</label>
				</div>
			</div>


			<div className='form-group'>
				<input type='submit' className='btn btn-primary' />
			</div>
		</form>
	) 
}

export default RegisterComponent