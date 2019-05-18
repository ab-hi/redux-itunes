const handleSearch = (query) => {
	return({
		type: 'TRACK_SEARCH_REQUESTED',
		payload: query
	})
}

const onGenreChange = (filter, tracks) => {
	return({
		type: 'FILTER_GENRE',
		payload : {filter, tracks}
	})
}

export {handleSearch, onGenreChange}