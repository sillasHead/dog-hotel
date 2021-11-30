import { House } from 'global/types/House'
import { api } from 'utils/api'

export class HouseService {
  static getHouses() {
    return api.get('/Houses') 
  }

  static postHouse(House: House) {
    return api.post('/Houses', House)
  }

  static getHouse(id: number) {
    return api.get(`/Houses/${id}`)
  }

  static putHouse(House: House) {
    return api.put(`/Houses/${House.id}`, House)
  }
}