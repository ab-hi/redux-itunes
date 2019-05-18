import {combineReducers} from 'redux'

import searchReducer from './searchReducer'
import filterReducer from './filterReducer'

export default combineReducers({
	tracks: searchReducer,
	filter: filterReducer
})
