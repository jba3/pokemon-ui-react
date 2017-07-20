import Reflux from 'reflux'
import axios from 'axios'
import PokemonActions from './actions.js'


export default class PokemonStore extends Reflux.Store {
	constructor() {
		super();

		this.state = { pokemon: [] }
		this.listenables = PokemonActions
	}

	getPokemon() {
		axios.get('http://api.pokedex.local/pokemon')
			.then(response =>
				this.setState({ pokemon: response.data })
			)
	}
}
