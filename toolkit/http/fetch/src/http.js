export default {
  get: (url, config) => window.fetch(url, config),
  post: (url, data, config) => {
    const c = Object.assign({}, config, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    return window.fetch(url, c)
  },
  put: (url, data, config) => {
    const c = Object.assign({}, config, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
    return window.fetch(url, c)
  },
  delete: (url, config) => {
    const c = Object.assign({}, config, {
      method: 'DELETE'
    })
    return window.fetch(url, c)
  }
}
