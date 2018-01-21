import axios from 'axios'

export default {
  get: (url, config) => axios.get(url, config).then(r => r.data),
  post: (url, data, config) => axios.post(url, data, config).then(r => r.data),
  put: (url, data, config) => axios.put(url, data, config).then(r => r.data),
  delete: (url, config) => axios.delete(url, config).then(r => r.data)
}
