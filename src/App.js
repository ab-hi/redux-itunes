import React from 'react';
import {Search, TrackList} from './components';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware()
 

let store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga)

function App() {
  return (
    <Provider store={store}>
      <Search />
      <TrackList />
    </Provider>
  );
}

export default App;
