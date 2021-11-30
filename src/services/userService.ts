import { User } from 'global/types/User'
import { api } from 'utils/api'

export class UserService {
  static getAll() {
    return api.get('/users')    
  }

  static getLogin(email: string, password: string) {
    return api.get('/users', {
      params: {
        email: email,
        password: password,
      }
    })
  }

  static checkEmail(email: string) {
    return api.get('/users', {
      params: {
        email: email,
      }
    })
  }

  static post(user: User) {
    return api.post('/users', user)
  }

  static get(id: number) {
    return api.get(`/users/${id}`)
  }

  static put(user: User) {
    return api.put(`/users/${user.id}`, user)
  }

  static delete(id: number) {
    return api.delete(`/users/${id}`)
  }
}