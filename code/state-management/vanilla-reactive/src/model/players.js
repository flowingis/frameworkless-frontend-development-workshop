import observableFactory from '../observableFactory'

const createInitialState = () => ({
  list: []
})

export default (initialState) => {
  const state = initialState || createInitialState()

  const add = name => {
    state.list.push({name})
  }

  const base = {
    add
  }

  return observableFactory(base, () => state)
}
