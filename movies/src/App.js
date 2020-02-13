import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import MovieLayout from './components/MovieLayout';
import SearchComponent, { SearchContext } from './components/Search';
import Navbar from './components/Navbar';

function App() {
	// let film = {
	// 	method: 'GET',
	// 	url:
	// 		'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666',
	// 	headers: {
	// 		'content-type': 'application/octet-stream',
	// 		'x-rapidapi-host':
	// 			'imdb-internet-movie-database-unofficial.p.rapidapi.com',
	// 		'x-rapidapi-key': '1928aa76c3msh12d0543b8640813p1b3c8cjsneb28e6b3b6ed'
	// 	}
	// };

	// useEffect(() => {
	// 	axios(film)
	// 		.then(res => setMovie(res.data))
	// 		.catch(err => console.error(err));
	// }, []);

	return (
		<Router>
			<Switch>
				<SearchComponent>
					<div className='container'>
						<Navbar />

						<MovieLayout />
					</div>
				</SearchComponent>
			</Switch>
		</Router>
	);
}

export default App;
