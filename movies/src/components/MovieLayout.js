import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { SearchContext } from '../App';

function MovieLayout({ history }) {
	const { searchResults } = React.useContext(SearchContext);

	useEffect(() => {}, [searchResults]);

	const displayTitle = title => {
		return (
			<Link to={`/title/${title.id}`} key={title.id} className='row py-3 title'>
				<div className='col-5'>
					<img src={title.image} className='img-fluid' title='the image' />
				</div>
				<div className='col-7'>
					<h4>{title.title}</h4>
				</div>
			</Link>
		);
	};

	const displayCharacter = character => {
		return (
			<Link
				to={`/character/${character.id}`}
				key={character.id}
				className='row py-3 character'>
				<div className='col-5'>
					<img src={character.image} className='img-fluid' title='the image' />
				</div>
				<div className='col-7'>
					<h4>{character.title} </h4>
				</div>
			</Link>
		);
	};

	const displayCompany = company => {
		return (
			<Link
				to={`/company/${company.id}`}
				key={company.id}
				className='row py-3 company'>
				<div className='col-12'>
					<h4>{company.title}</h4>
				</div>
			</Link>
		);
	};

	return (
		<>
			<Navbar history={history} />

			{Object.keys(searchResults).length ? (
				<div className='row py-5'>
					<section className='col-md-4'>
						<h2 className='pb-2 text-center h2-title'>Title</h2>
						<div className=' py-3 shadow-sm'>
							{/* <Title title={title} /> */}
							{searchResults.titles.map(title => displayTitle(title))}
						</div>
					</section>
					{/* character section */}
					<section className='col-md-4'>
						<h2 className='pb-2 text-center h2-character'>Character</h2>
						<div className=' py-3 shadow-sm'>
							{searchResults.names.map(character =>
								displayCharacter(character)
							)}
						</div>
					</section>
					{/* company section */}
					<section className='col-md-4'>
						<h2 className='pb-2 text-center h2-company'>Companies</h2>
						<div className=' py-3 shadow-sm'>
							{searchResults.companies.map(company => displayCompany(company))}
						</div>
					</section>
				</div>
			) : (
				<div className='spinPlaceholder p-5'>
					<div className='m-auto'>
						<div className='text-center'>
							<h4 className='pt-5 pb-3' style={{ color: '#ccc' }}>
								make a search...
							</h4>
							<div className='spinner-grow text-muted p-5'></div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default MovieLayout;
