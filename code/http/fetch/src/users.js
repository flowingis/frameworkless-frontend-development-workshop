import http from './http'

const AUTH_HEADER = 'X-Authorization'
const PASSWORD = 'password'

const createAuthHeaders = () => new window.Headers({
  'Content-Type': 'application/json',
  [AUTH_HEADER]: PASSWORD
})

const list = () => http
    .get('api/users', {headers: createAuthHeaders()})
    .then(response => response.json())

const detail = guid => http
    .get(`api/users/${guid}`, {headers: createAuthHeaders()})
    .then(response => response.json())

const add = data => http
    .post('api/users', data, {headers: createAuthHeaders()})
    .then(response => response.json())

const update = (guid, data) => http
    .put(`api/users/${guid}`, data, {headers: createAuthHeaders()})
    .then(response => response.json())

const deleteItem = guid => http
    .delete(`api/users/${guid}`, {headers: createAuthHeaders()})
    .then(response => response.json())

export default {
  list,
  detail,
  add,
  update,
  delete: deleteItem
}
