const freeze = state => Object.freeze(Object.assign({}, state))

export default (base, getState) => {
  let changeListeners = []
  const invokeListeners = () => changeListeners.forEach(cb => cb(freeze(getState())))

  const addChangeListener = cb => {
    changeListeners.push(cb)
    cb(freeze(getState()))
    return () => {
      changeListeners = changeListeners.filter(element => element !== cb)
    }
  }

  const proxy = {
    addChangeListener
  }

  Object.keys(base).forEach(methodName => {
    proxy[methodName] = (...args) => {
      base[methodName](...args)
      invokeListeners()
    }
  })

  return proxy
}
