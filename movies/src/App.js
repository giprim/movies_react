import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieLayout from './components/MovieLayout';
// import SearchComponent from './components/Search';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Home from './components/home';
import Axios from 'axios';

export const SearchContext = createContext();

function App() {
	const [fetchedResult, setFetchedResult] = useState({});

	const searchFunction = (event, text, history) => {
		event.preventDefault();
		history.push('/search');
		console.log('text called');
		let search = {
			method: 'GET',
			url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${text}`,
			headers: {
				'content-type': 'application/octet-stream',
				'x-rapidapi-host':
					'imdb-internet-movie-database-unofficial.p.rapidapi.com',
				'x-rapidapi-key': '1928aa76c3msh12d0543b8640813p1b3c8cjsneb28e6b3b6ed'
			}
		};
		Axios(search)
			.then(res => {
				setFetchedResult(res.data);
				console.log(res.data);
			})

			.catch(err => console.error(err));
	};

	return (
		<Router>
			<SearchContext.Provider
				value={{
					searchResults: fetchedResult,
					searchFunction: searchFunction
				}}>
				<Switch>
					{/* <SearchComponent > */}
					<div className='container'>
						<Route path='/' exact component={Home} />
						<Route path='/search' exact component={MovieLayout} />
						<Route path='/title/:id' component={Title} />
					</div>
					{/* </SearchComponent> */}
				</Switch>
			</SearchContext.Provider>
		</Router>
	);
}

export default App;
