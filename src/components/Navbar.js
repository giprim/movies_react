import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

const Navbar = ({ history }) => {
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
					 */}
				</ul>
			</div>
			<Search history={history} />
		</nav>
	);
};

export default Navbar;
