import State from './state'
import render from './render'

const state = new State()

window.requestAnimationFrame(() => render(state))
