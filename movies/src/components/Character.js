import React, { useEffect } from 'react';

function Character(props) {
	const { id } = props.match.params;
	console.log(id);

	useEffect(() => {});
	return <div></div>;
}

export default Character;
