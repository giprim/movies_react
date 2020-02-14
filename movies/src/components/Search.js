import React, { useState, useContext } from 'react';
import { SearchContext } from '../App';

function Search({ history }) {
	const { searchFunction } = useContext(SearchContext);
	const [searchString, setSearchString] = useState('');

	return (
		<div>
			<form
				className='form-inline'
				onSubmit={e => searchFunction(e, searchString, history)}>
				<input
					value={searchString}
					onChange={e => setSearchString(e.target.value)}
					className='form-control form-control-lg mr-sm-2'
					type='text'
					placeholder='Search for movies'
				/>
				<button className='btn btn-outline-danger' type='submit'>
					Search
				</button>
			</form>
		</div>
	);
}

export default Search;
