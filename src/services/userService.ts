import { User } from 'global/types/User'
import { api } from 'utils/api'

export class UserService {
  static getUsers() {
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

  static postUser(user: User) {
    return api.post('/users', user)
  }

  static getUser(id: number) {
    return api.get(`/users/${id}`)
  }

  static putUser(user: User) {
    return api.put(`/users/${user.id}`, user)
  }
}