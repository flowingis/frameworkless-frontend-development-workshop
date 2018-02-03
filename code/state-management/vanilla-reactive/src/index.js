import model from './model'
import render from './render'

const executeRender = (state, model) => window.requestAnimationFrame(() => render(state, model))
model.addChangeListener(state => executeRender(state, model))
