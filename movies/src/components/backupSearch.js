// import React, { useState, useEffect, createContext } from 'react';
// import Axios from 'axios';

// const SearchContext = createContext();

// function SearchComponent(props) {
// 	const [inputValue, setInputValue] = useState('');
// 	const [searchResult, setSearchResult] = useState([]);

// const handleSearchInput = e => {
// 	e.persist();
// 	let inputValue = e.target.value;
// 	setInputValue(inputValue);
// };

// const handleSearchSubmit = e => {
// 	e.preventDefault();

// 	makeRequest(inputValue);
// };

// const makeRequest = searchFor => {
// 	let search = {
// 		method: 'GET',
// 		url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchFor}`,
// 		headers: {
// 			'content-type': 'application/octet-stream',
// 			'x-rapidapi-host':
// 				'imdb-internet-movie-database-unofficial.p.rapidapi.com',
// 			'x-rapidapi-key': '1928aa76c3msh12d0543b8640813p1b3c8cjsneb28e6b3b6ed'
// 		}
// 	};
// 	Axios(search)
// 		.then(res => setSearchResult(res.data))
// 		.catch(err => console.error(err));
// };

// 	let variable = 'passed data';

// 	return (
// 		<>
// 			<SearchContext.Provider
// 				value={{
// 					searchResult,
// 					variable,
// 					handleSearchSubmit,
// 					handleSearchInput
// 				}}>
// 				{props.children}
// 			</SearchContext.Provider>
// 		</>
// 	);
// }
// export { SearchContext };
// export default SearchComponent;
