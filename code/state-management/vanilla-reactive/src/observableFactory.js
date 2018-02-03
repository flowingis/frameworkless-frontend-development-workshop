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

  const createProxyObject = base => {
    const proxy = {}
    Object.keys(base).forEach(methodName => {
      const value = base[methodName]
      if (typeof value === 'function') {
        proxy[methodName] = (...args) => {
          base[methodName](...args)
          invokeListeners()
        }
        return
      }

      if (typeof value === 'object') {
        proxy[methodName] = createProxyObject(value)
      }
    })
    return proxy
  }

  const proxy = createProxyObject(base)

  proxy.addChangeListener = addChangeListener

  return proxy
}
