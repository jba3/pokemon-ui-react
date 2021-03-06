import React from 'react'
import { hashHistory, Router, Route } from 'react-router'

import App from '../index.js';
import Pokemon from '../pokemon/index.jsx'
import Abilities from '../abilities/list/index.jsx'


export default function Routes() {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<Route path="/pokemon" component={Pokemon} />
				<Route path="/abilities" component={Abilities} />
			</Route>
		</Router>
	)
}
