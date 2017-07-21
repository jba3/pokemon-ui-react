import React from 'react'
import Reflux from 'reflux'

import AbilitiesActions from './actions.js'
import AbilitiesListStore from './store.js'


export default class Abilities extends Reflux.Component {
	constructor(props) {
		super(props)

		this.store = AbilitiesListStore
	}

	componentDidMount() {
		console.log('abilities list ready');

		AbilitiesActions.getAbilities()
	}

	render() {
		const mappedAbilities = (this.state.abilities !== [])
			? this.state.abilities.map(theAbility =>
				<div>
					{ theAbility.identifier }
				</div>
			)
			: null

		return (
			<div>
				<h2>{ 'Abilities list' }</h2>

				{ mappedAbilities }
			</div>
		)
	}
}
