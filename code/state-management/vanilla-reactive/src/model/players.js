const freeze = state => Object.freeze(Object.assign({}, state))

const createInitialState = () => ({
  list: []
})

export default (initialState) => {
  const state = initialState || createInitialState()
  let changeListeners = []

  const invokeListeners = () => changeListeners.forEach(cb => cb(freeze(state)))

  const addChangeListener = cb => {
    changeListeners.push(cb)
    cb(freeze(state))
    return () => {
      changeListeners = changeListeners.filter(element => element !== cb)
    }
  }

  const add = name => {
    state.list.push({name})
    invokeListeners()
  }

  return {
    addChangeListener,
    add
  }
}
