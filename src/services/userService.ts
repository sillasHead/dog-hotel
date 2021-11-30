import { User } from 'global/types/User'
import { api } from 'utils/api'

export class UserService {
  static getUsers(): Promise<User[]> {
    return api.get('/users')    
  }

  static postUser(user: User): Promise<User> {
    return api.post('/users', user)
  }

  static getUser(id: number): Promise<User> {
    return api.get(`/users/${id}`)
  }

  static putUser(user: User): Promise<User> {
    return api.put(`/users/${user.id}`, user)
  }
}