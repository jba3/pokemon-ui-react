import React from 'react'
import Header from './layout/header.jsx'
import Menu from './layout/menu.jsx'

import './App.styl'


export default function App(props) {
	console.log('app > render()')

	return (
		<div>
			<Header />
			<Menu />
			{
				props.children
			}
		</div>
	)
}
