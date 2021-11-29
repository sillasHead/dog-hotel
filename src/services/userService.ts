import { User } from 'global/types/User'
import { api } from 'utils/api'

export function getUsers() {
  return api.get('/users')
}

export function postUser(data: User) {
  return api.post('/users', data)
}

export function setUser(data: User) {
  return api.put(`/users/${data.id}`, data)
}

export function deleteUser(id: number) {
  return api.delete(`/users/${id}`)
}