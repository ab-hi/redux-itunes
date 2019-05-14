export default (state={}, action) => {
	switch(action.type){
		case 'TRACK_SEARCH_SUCCEEDED':
			console.log('TRACK_SEARCH_SUCCEEDED reducer', action)
			// return [...[], tracks]
			return state
		case 'TRACK_SEARCH_FAILED':
			console.log('TRACK_SEARCH_FAILED', action)
			//return {...{}, tracks}
			return state
		default:
			return state
	}
	// return state
}
