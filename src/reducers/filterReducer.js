export default (state={}, action) => {
	switch(action.type){
		case 'FILTER_GENRE':
			console.log('filter reducer', action.payload)
			return state
		case 'FILTER_ARTIST':
			return state
		default:
			return state
	}
}
