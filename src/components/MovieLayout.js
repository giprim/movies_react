import React, { useEffect, useState } from 'react';
import { SearchContext } from './Search';
import { Link } from 'react-router-dom';

function MovieLayout(props) {
	const {
		searchResult,
		variable,
		handleSearchInput,
		handleSearchSubmit
	} = React.useContext(SearchContext);

	const [isThereMovie, setIsThereMovie] = useState(false);

	// result destructured
	const [title, setTitle] = useState([]);
	const [character, setCharacter] = useState([]);
	const [company, setCompany] = useState([]);

	useEffect(() => {
		let resultNotEmpty = Object.keys(searchResult).length === 0;
		if (!resultNotEmpty) {
			const { companies, names, titles } = searchResult;
			setTitle(titles);
			setCharacter(names);
			setCompany(companies);
			setIsThereMovie(true);
		}
	}, [searchResult]);

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
			{isThereMovie ? (
				<div className='row py-5'>
					{/* title section */}
					<section className='col-md-4'>
						<h2 className='pb-2 text-center h2-title'>Title</h2>
						<div className=' py-3 shadow-sm'>
							{title.map(title => displayTitle(title))}
						</div>
					</section>
					{/* character section */}
					<section className='col-md-4'>
						<h2 className='pb-2 text-center h2-character'>Character</h2>
						<div className=' py-3 shadow-sm'>
							{character.map(character => displayCharacter(character))}
						</div>
					</section>

					{/* company section */}
					<section className='col-md-4'>
						<h2 className='pb-2 text-center h2-company'>Companies</h2>
						<div className=' py-3 shadow-sm'>
							{company.map(company => displayCompany(company))}
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
