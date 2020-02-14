import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from './Navbar';

function Title(props) {
	const { history } = props;
	const { id } = props.match.params;
	const [fetched, setFetched] = useState({});
	let film = {
		method: 'GET',
		url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,
		headers: {
			'content-type': 'application/octet-stream',
			'x-rapidapi-host':
				'imdb-internet-movie-database-unofficial.p.rapidapi.com',
			'x-rapidapi-key': '1928aa76c3msh12d0543b8640813p1b3c8cjsneb28e6b3b6ed'
		}
	};

	useEffect(() => {
		Axios(film)
			.then(res => setFetched(res.data))
			.catch(err => console.error(err));
	}, []);

	const displayCast = cast => {
		const { actor, actor_id, character } = cast;
		return (
			<tr key={actor_id}>
				<td>{actor}</td>
				<td>{character}</td>
			</tr>
		);
	};

	const displayResult = movie => {
		const {
			id,
			length,
			plot,
			poster,
			rating,
			title,
			trailer,
			year,
			cast
		} = fetched;
		let theWidth = Math.round(rating) * 10;
		let progressWidth = { width: `${theWidth}%` };

		return (
			<div>
				<div className='row'>
					<div className='col-md-6'>
						{/* picture and title */}
						<div className='col-12'>
							<div className='shadow'>
								<img className='img-fluid' src={poster} title={title} />
								<h3 className='h3 p-4'>{title}</h3>
							</div>
						</div>

						{/* duration year and rating */}
						<div className='col-12 py-4'>
							<div className='row'>
								<div className='col-sm-7'>
									<div className='row'>
										<h5 className='col-6'> Year:</h5>
										<h5 className='col-6'> {year}</h5>
									</div>
									<div className='row'>
										<h5 className='col-6'> Duration:</h5>
										<h5 className='col-6'> {length}</h5>
									</div>
								</div>
								<div className='col-sm-5'>
									<div className='row'>
										<h5 className='col-6'> Rating</h5>
										<h5 className='col-6'> {rating}</h5>
									</div>
									<div className='row'>
										<div className='col-md-12'>
											<div className='progress'>
												<progress
													style={{ background: 'teal' }}
													className='progress-bar bg-danger'
													style={progressWidth}></progress>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* plot aka brief on the movie */}
						<div className='col-12'>
							<p className='h5 font-weight-light'>{plot}</p>
						</div>

						{/* trailer */}
						<div className='col-12 py-3'>
							{trailer && (
								<a
									className='btn btn-lg btn-outline-danger'
									target='_blank'
									href={trailer.link}>
									Watch trailer
								</a>
							)}
						</div>
					</div>

					{/* Casts */}
					<div className='col-md-6'>
						<h2 className='pb-2 text-center h2-cast'>Casts</h2>
						<table className='table table-striped'>
							<thead>
								<tr>
									<th>Actor</th>
									<th>Character</th>
								</tr>
							</thead>
							<tbody>{cast && cast.map(acast => displayCast(acast))}</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	};

	console.log(fetched);
	return (
		<>
			<Navbar history={history} />
			<div className='container py-5'>{displayResult(fetched)}</div>
		</>
	);
}

export default Title;
