const CHECKTIME = 50

export const createRouter = scope => {
  let interval
  let lastFragment
  const routes = []

  const getFragment = () => {
    const index = scope.location.href.lastIndexOf('#')
    if (index === -1) {
      return ''
    }

    return scope.location.href.substring(index + 1)
  }

  const addRoute = (url, cb) => {
    routes.push({
      url,
      cb
    })
  }

  const tick = () => {
    const fragment = getFragment()
    if (lastFragment === fragment) {
      return
    }

    lastFragment = fragment

    for (let index = 0; index < routes.length; index++) {
      const currentRoute = routes[index]
      if (typeof currentRoute.url === 'string') {
        if (currentRoute.url === fragment) {
          currentRoute.cb()
          return
        }
      } else {
        const match = fragment.match(currentRoute.url)
        if (match) {
          match.shift()
          currentRoute.cb(match)
          return
        }
      }
    }
  }

  const init = () => {
    const index = scope.location.href.lastIndexOf('#')
    if (index === -1) {
      scope.location.href += '#'
    }

    interval = setInterval(tick, CHECKTIME)
  }

  const dispose = () => {
    clearInterval(interval)
  }

  return {
    addRoute,
    init,
    dispose
  }
}

export default createRouter(window)
