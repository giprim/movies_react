import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import MovieLayout from './components/MovieLayout';
import Navbar from './components/Navbar';

const NewMovieContext = React.createContext();
function App() {
	const [movie, setMovie] = useState({});

	let film = {
		method: 'GET',
		url:
			'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666',
		headers: {
			'content-type': 'application/octet-stream',
			'x-rapidapi-host':
				'imdb-internet-movie-database-unofficial.p.rapidapi.com',
			'x-rapidapi-key': '1928aa76c3msh12d0543b8640813p1b3c8cjsneb28e6b3b6ed'
		}
	};

	useEffect(() => {
		axios(film)
			.then(res => setMovie(res.data))
			.catch(err => console.error(err));
	}, []);

	return (
		<Router>
			<Switch>
				<NewMovieContext.Provider value={movie}>
					<Navbar />
					<div className='container py-5'>
						<div className='row'>
							<MovieLayout />
						</div>
					</div>
				</NewMovieContext.Provider>
			</Switch>
		</Router>
	);
}

export { NewMovieContext };
export default App;
