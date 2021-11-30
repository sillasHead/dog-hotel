import { User } from 'global/types/User'
import React, { createContext, ReactNode, useContext, useState } from 'react'

type Props = {
  children: ReactNode
}

type Context = {
  user: User | undefined
  setUser: (state: User | undefined) => void
}

const UserContext = createContext<Context>({ user: undefined, setUser: () => Function })

export function UserProvider({ children }: Props) {
  
  const [user, setUser] = useState<User>()
  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  const { user, setUser } = context
  return { user, setUser }
}