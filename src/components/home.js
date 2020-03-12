import React from 'react';
import MovieLayout from './MovieLayout';

const Home = props => {
	const Amovie = movie => {
		return (
			<div className='col-md-4 col-sm-6'>
				<h1>title</h1>
				<p className='h-25 p-5 bg-danger'>image</p>
			</div>
		);
	};

	return <div className='row'></div>;
};

export default Home;
