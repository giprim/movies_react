import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchContext } from './Search';
function Navbar(props) {
	const {
		searchResult,
		variable,
		handleSearchInput,
		handleSearchSubmit
	} = React.useContext(SearchContext);

	return (
		<nav className='navbar navbar-expand-md bg-light shadow navbar-light'>
			<NavLink className='navbar-brand' to='/'>
				<img src='/logo.png' className='img-fluid' width='50' />
				Movie<sub className='text-danger font-weight-bold'>info</sub>
			</NavLink>

			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#collapsibleNavbar'>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='collapsibleNavbar'>
				<ul className='navbar-nav m-auto'>
					{/* <NavLink className='nav-item nav-link' to='/'>
						Link
					</NavLink>
					<NavLink className='nav-item nav-link' to='/'>
						Link
					</NavLink>
					<NavLink className='nav-item nav-link' to='/'>
						Link
					</NavLink> */}
				</ul>
			</div>
			<form className='form-inline' onSubmit={handleSearchSubmit}>
				<input
					onChange={handleSearchInput}
					className='form-control form-control-lg mr-sm-2'
					type='text'
					placeholder='Search for movies'
				/>
				<button className='btn btn-outline-danger' type='submit'>
					Search
				</button>
			</form>
		</nav>
	);
}

export default Navbar;
