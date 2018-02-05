import { createStore, combineReducers } from 'redux'
import playersReducer from './reducers/players'
import teamsReducer from './reducers/teams'
import matchesReducer from './reducers/matches'
import render from './render'

const reducer = combineReducers({
  players: playersReducer,
  teams: teamsReducer,
  matches: matchesReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  window.requestAnimationFrame(() => render(store.dispatch, store.getState()))
})

window.requestAnimationFrame(() => render(store.dispatch, store.getState()))
