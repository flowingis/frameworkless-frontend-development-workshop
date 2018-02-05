import actions from './actions'
import render from './render'

const executeRender = (state, actions) => window.requestAnimationFrame(() => render(state, actions))
actions.addChangeListener(state => executeRender(state, actions))
