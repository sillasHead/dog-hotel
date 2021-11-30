import { House } from 'global/types/House'
import { api } from 'utils/api'

export class HouseService {
  static getAll() {
    return api.get('/Houses') 
  }

  static get(id: number) {
    return api.get(`/Houses/${id}`)
  }

  // static postHouse(House: House) {
  //   return api.post('/Houses', House)
  // } // TODO

  static put(House: House) {
    return api.put(`/Houses/${House.id}`, House)
  }
}