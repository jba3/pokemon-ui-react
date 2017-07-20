import React from 'react'
import Menu from './layout/menu.jsx'

import './App.styl'


export default function App(props) {
	console.log('app > render()')

	return (
		<div>
			<Menu />
			{
				props.children
			}
		</div>
	)
}
