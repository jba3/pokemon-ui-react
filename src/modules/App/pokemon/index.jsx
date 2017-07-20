import React from 'react'
import Reflux from 'reflux'
import { Button, Thumbnail } from 'react-bootstrap'
import _ from 'lodash'

import PokemonStore from './store.js'
import PokemonActions from './actions.js'


export default class Pokemon extends Reflux.Component {
	constructor(props) {
		super(props)

		this.store = PokemonStore
	}

	componentDidMount() {
		console.log('pokemon ready');

		PokemonActions.getPokemon()
	}

	render() {
		console.log('pokemon rendered', this.state);

		const mappedPokemon = (
			_.has(this.state, 'pokemon')
			&& _.size(this.state.pokemon) > 0
		)
			? this.state.pokemon.map(thePokemon =>
				<Thumbnail
					key={thePokemon.pokemonId}
					src={`/img/${thePokemon.pokedexNumber}.png`}
					alt={thePokemon.pokemonName}
				>
					<h3>{ thePokemon.pokedexNumber } { thePokemon.pokemonName }</h3>
					<p>Description</p>
					<p>
						<Button bsStyle="primary">Button</Button>&nbsp;
						<Button bsStyle="default">Button</Button>
					</p>
				</Thumbnail>
			)
			: 'Loading...'

		return (
			<div>
				{ mappedPokemon }
			</div>
		)
	}
}
