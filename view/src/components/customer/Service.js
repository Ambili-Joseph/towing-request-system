import http from '../../http'

export default {
  get(id) {
    if (id) {
      return http.get(`/customers/${id}`)
    }
    else {
      return http.get('/customers' + location.search)
    }
  },
  create(data) {
    if (data) {
      return http.post('/customers', data)
    }
    else {
      return http.get('/customers/create')
    }
  },
  edit(id, data) {
    if (data) {
      return http.put(`/customers/${id}`, data)
    }
    else {
      return http.get(`/customers/${id}`)
    }
  },
  delete(id, data) {
    if (data) {
      return http.delete(`/customers/${id}`)
    }
    else {
      return http.get(`/customers/${id}`)
    }
  }
}