const handleSearch = (query) => {
	return({
		type: 'TRACK_SEARCH_REQUESTED',
		payload: query
	})
}

export {handleSearch}