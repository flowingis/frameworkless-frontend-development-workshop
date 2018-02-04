export default ({target, listener}) => {
  let observable

  const set = (target, name, value) => {
    target[name] = value
    listener(observable)
    return true
  }

  const handler = {
    set
  }

  observable = new Proxy(target, handler)

  return observable
}
