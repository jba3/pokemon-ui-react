import React from 'react'
import { Link } from 'react-router'


export default function Menu() {
	return (
		<div>
			<Link to="/">Home</Link>
			{ ' | ' }
			<Link to="/pokemon">Pokemon</Link>
			{ ' | ' }
			<Link to="/abilities">Abilities</Link>
			{ ' | ' }
			<Link to="/moves">Moves</Link>
			{ ' | ' }
			<Link to="/items">Items</Link>
			<hr />
		</div>
	);
}
