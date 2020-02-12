import React from 'react';
import { NavLink } from 'react-router-dom';
import { handleSearchInput, handleSearchSubmit } from './Search';
function Navbar(props) {
	return (
		<nav className='navbar navbar-expand-md bg-dark navbar-dark'>
			<NavLink className='navbar-brand' to='/'>
				Navbar
			</NavLink>

			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#collapsibleNavbar'>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='collapsibleNavbar'>
				<ul className='navbar-nav'>
					<NavLink className='nav-item nav-link' to='/'>
						Link
					</NavLink>

					<NavLink className='nav-item nav-link' to='/'>
						Link
					</NavLink>

					<NavLink className='nav-item nav-link' to='/'>
						Link
					</NavLink>
				</ul>
			</div>
			<form className='form-inline' onSubmit={handleSearchSubmit}>
				<input
					onChange={handleSearchInput}
					className='form-control mr-sm-2'
					type='text'
					placeholder='Search'
				/>
				<button className='btn btn-success' type='submit'>
					Search
				</button>
			</form>
		</nav>
	);
}

export default Navbar;
