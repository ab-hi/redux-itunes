import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


function* searchItunesApiGenerator(action){
	try{
		const tracks = yield call(searchItunesApi, action.payload);
		yield put({type: "TRACK_SEARCH_SUCCEEDED", tracks: tracks});
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
	fetch(`https://itunes.apple.com/search?term=${query}`, {'Access-Control-Allow-Origin': '*'})
		.then(data => data.json())
			.then(data => {
				// console.log('api fetched', data)
				return data.results
			})
}


export default mySaga
