import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

let tracks;
function* searchItunesApiGenerator(action){
	try{
		tracks = yield call(searchItunesApi, action.payload);
		let genres = []
		let artists = []

		tracks.map(track => {
			if(genres.indexOf(track.primaryGenreName) === -1){
				genres.push(track.primaryGenreName)
			}
			if(artists.indexOf(track.artistName) === -1){
				artists.push(track.artistName)
			}
		})

		yield put({type: "TRACK_SEARCH_SUCCEEDED", tracks});
		yield put({type: 'GENRE_LIST', genres})
		yield put({type: 'ARTIST_LIST', artists})
	}
	catch(e){
		yield put({type: "TRACK_SEARCH_FAILED", message: e.message});
	}
}

function* mySaga() {
  yield takeEvery("TRACK_SEARCH_REQUESTED", searchItunesApiGenerator);
  yield takeLatest("FILTER_GENRE", filterTracksForGenre)
  yield takeLatest("FILTER_ARTIST", filterTracksForArtist)
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


function* filterTracksForGenre(action){
	try{
		if(action.payload === "showAll"){
			yield put({type: "TRACK_SEARCH_SUCCEEDED", tracks})
		}
		else{
			let filteredTracks = []
			filteredTracks = tracks.filter(track => track.primaryGenreName === action.payload)
			yield put({type: "TRACK_SEARCH_SUCCEEDED", tracks:filteredTracks})
		}
	}
	catch(e){	
		yield put({type: "TRACK_SEARCH_FAILED", message: e.message});
	}
}

function* filterTracksForArtist(action){
	try{
		if(action.payload === "showAll"){
			yield put({type: "TRACK_SEARCH_SUCCEEDED", tracks})
		}
		else{
			let filteredTracks = []
			filteredTracks = tracks.filter(track => track.artistName === action.payload);
			yield put({type: "TRACK_SEARCH_SUCCEEDED", tracks:filteredTracks})
		}
	}
	catch(e){	
		yield put({type: "TRACK_SEARCH_FAILED", message: e.message});
	}
}

export default mySaga
