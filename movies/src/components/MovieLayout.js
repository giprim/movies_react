import React from 'react';
import { NewMovieContext } from '../App';

function MovieLayout(props) {
	const moviecontext = React.useContext(NewMovieContext);
	const [movie, setMovie] = React.useState(NewMovieContext);

	React.useEffect(() => {
		setMovie(moviecontext);
		console.log(moviecontext);
	}, [moviecontext]);

	console.log(movie);

	return (
		<div className='col-md-4 col-sm-6'>
			<div className='row'>
				<div className='col-12'>
					<img className='img-fluid' src={movie.poster} title={movie.title} />
				</div>
				<div className='col-12'>
					<h3>{movie.title}</h3>
				</div>
				<div className='col-12'>
					<p>{movie.plot}</p>
				</div>
			</div>
		</div>
	);
}

export default MovieLayout;
