import http from './http'

const AUTH_HEADER = 'X-Authorization'
const PASSWORD = 'password'

const createAuthHeaders = () => ({
  'Content-Type': 'application/json',
  [AUTH_HEADER]: PASSWORD
})

const list = () => http.get('api/users', {headers: createAuthHeaders()})

const detail = guid => http.get(`api/users/${guid}`, {headers: createAuthHeaders()})

const add = data => http.post('api/users', data, {headers: createAuthHeaders()})

const update = (guid, data) => http.put(`api/users/${guid}`, data, {headers: createAuthHeaders()})

const deleteItem = guid => http.delete(`api/users/${guid}`, {headers: createAuthHeaders()})

export default {
  list,
  detail,
  add,
  update,
  delete: deleteItem
}
