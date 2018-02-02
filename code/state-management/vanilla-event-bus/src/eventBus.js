export default (initialState = {}) => {
  let connectors = []
  const subscribers = {}
  const state = initialState

  const freeze = state => Object.freeze(Object.assign({}, state))

  const invokeSubscriber = (stateKey, event, payload) => {
    const newStatePart = subscribers[stateKey](freeze(state[stateKey]), event, payload)
    if (!newStatePart) {
      throw new Error('subscribers should return a state portion')
    }
    state[stateKey] = newStatePart
  }

  const subscribe = (stateKey, subscriber) => {
    subscribers[stateKey] = subscriber
    invokeSubscriber(stateKey)
    return () => {
      delete subscribers[stateKey]
    }
  }

  const connect = cb => {
    connectors.push(cb)
    cb(freeze(state))

    return () => {
      connectors = connectors.filter(connector => connector !== cb)
    }
  }

  const publish = (event, payload) => {
    Object
    .keys(subscribers)
    .forEach(stateKey => invokeSubscriber(stateKey, event, payload))

    connectors.forEach(c => c(freeze(state)))
  }

  return {
    subscribe,
    publish,
    connect,
    getState: () => freeze(state)
  }
}
