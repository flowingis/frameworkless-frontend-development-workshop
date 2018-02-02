const CHECKTIME = 50

export const createRouter = scope => {
  let interval
  let lastFragment
  const routes = []

  const addRoute = (url, cb) => {
    routes.push({
      url,
      cb
    })
  }

  const tick = () => {
    const fragment = scope.location.pathname
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

  const navigate = path => scope.history.pushState(null, null, path)

  const init = () => {
    interval = setInterval(tick, CHECKTIME)
  }

  const dispose = () => {
    clearInterval(interval)
  }

  return {
    addRoute,
    init,
    navigate,
    dispose
  }
}

export default createRouter(window)
