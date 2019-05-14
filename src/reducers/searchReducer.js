export default (state={loading: false, tracks:[]}, action) => {
	switch(action.type){
		case 'TRACK_SEARCH_REQUESTED':
			return {loading: true, tracks:[]}
		case 'TRACK_SEARCH_SUCCEEDED':
			console.log('TRACK_SEARCH_SUCCEEDED reducer', action)
			return {loading: false, tracks: action.tracks}
			
		case 'TRACK_SEARCH_FAILED':
			console.log('TRACK_SEARCH_FAILED', action)
			//return {...{}, tracks}
			return state
		default:
			return state
	}
	// return state
}
