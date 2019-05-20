const handleSearch = (query) => {
	return({
		type: 'TRACK_SEARCH_REQUESTED',
		payload: query
	})
}

const onGenreChange = (filter) => {
	return({
		type: 'FILTER_GENRE',
		payload : filter
	})
}

const onArtistChange = (filter) => {
	return({
		type: 'FILTER_ARTIST',
		payload : filter
	})
}

export {handleSearch, onGenreChange, onArtistChange}