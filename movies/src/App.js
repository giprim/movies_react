import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import MovieLayout from './components/MovieLayout';
import SearchComponent, { SearchContext } from './components/Search';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {
	return (
		<Router>
			<Switch>
				<SearchComponent>
					<div className='container'>
						<Navbar />
						<Route path='/' exact component={MovieLayout} />
						<Route path='/title/:id' component={Title} />
					</div>
				</SearchComponent>
			</Switch>
		</Router>
	);
}

export default App;
