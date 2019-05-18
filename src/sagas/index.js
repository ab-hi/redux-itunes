import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


function* searchItunesApiGenerator(action){
	try{
		const tracks = yield call(searchItunesApi, action.payload);
		let genres = []
		let artists = []

		tracks.map(track => {
			if(genres.indexOf(track.primaryGenreName) === -1){
				genres.push(track.primaryGenreName)
			}
			if(artists.indexOf(track.artistName) == -1){
				artists.push(track.artistName)
			}
		})

		yield put({type: "TRACK_SEARCH_SUCCEEDED", tracks, genres, artists});
	}
	catch(e){
		yield put({type: "TRACK_SEARCH_FAILED", message: e.message});
	}
}

function* mySaga() {
  yield takeEvery("TRACK_SEARCH_REQUESTED", searchItunesApiGenerator);
}

function searchItunesApi(query){
	// console.log(query)
	return fetch(`https://itunes.apple.com/search?term=${query}`, {'Access-Control-Allow-Origin': '*'})
		.then(data => data.json())
			.then(data => {
				// console.log('api fetched', data)
				return data.results
			})
}


export default mySaga
