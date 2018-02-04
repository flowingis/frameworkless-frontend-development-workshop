import observable from './observable'
import render from './render'

const INITIAL_STATE = {
  players: [],
  teams: [],
  matches: []
}

const state = observable({
  target: INITIAL_STATE,
  listener: state => window.requestAnimationFrame(() => render(state))
})

window.requestAnimationFrame(() => render(state))
