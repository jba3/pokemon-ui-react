import Reflux from 'reflux'
import axios from 'axios'
import AbilitiesActions from './actions.js'


export default class AbilitiesListStore extends Reflux.Store {
	constructor() {
		super();

		this.state = { abilities: [] }
		this.listenables = AbilitiesActions
	}

	getAbilities() {
		axios.get('http://api.pokedex.local:4000/abilities')
			.then(response => {
				console.log('response data:', response.data);

				this.setState({ abilities: response.data })
			})
	}
}
