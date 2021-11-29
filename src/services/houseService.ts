import { House } from 'global/types/House'
import { api } from 'utils/api'

export function getHouses() {
  return api.get('/houses')
}

export function postHouse(data: House) {
  return api.post('/houses', data)
}

export function setHouse(data: House) {
  return api.put(`/houses/${data.id}`, data)
}

export function deleteHouse(id: number) {
  return api.delete(`/houses/${id}`)
}