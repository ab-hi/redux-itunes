export default (state={genres:[], artists:[]}, action) => {
	switch(action.type){
		case 'GENRE_LIST':
			return {...state, genres: action.genres}
		case 'ARTIST_LIST':
			return {...state, artists: action.artists}
		default:
			return state
	}
}
