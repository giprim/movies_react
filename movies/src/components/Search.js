import React, { useState, useEffect, createContext } from 'react';
import Axios from 'axios';

const SearchContext = createContext();

function Search(props) {
	const [inputValue, setInputValue] = useState('');
	const [searchResult, setSearchResult] = useState('');

	const handleSearchInput = e => {
		e.persist();
		let inputValue = e.targat.value;
		setInputValue(inputValue);
	};

	const handleSearchSubmit = e => {
		e.preventDefault();
		makeRequest(inputValue);
	};

	const makeRequest = searchFor => {
		let search = {
			method: 'GET',
			url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchFor}`,
			headers: {
				'content-type': 'application/octet-stream',
				'x-rapidapi-host':
					'imdb-internet-movie-database-unofficial.p.rapidapi.com',
				'x-rapidapi-key': '1928aa76c3msh12d0543b8640813p1b3c8cjsneb28e6b3b6ed'
			}
		};
		Axios(search)
			.then(res => setSearchResult(res.data))
			.catch(err => console.error(err));
	};
	return <SearchContext.Provider>{props.children}</SearchContext.Provider>;
}

export default Search;
