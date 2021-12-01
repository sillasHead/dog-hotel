import { User } from 'global/types/User'
import React, { createContext, ReactNode, useContext, useState } from 'react'
import dark from 'global/themes/dark'
import { useColorScheme } from 'react-native'
import light from 'global/themes/light'

type Props = {
  children: ReactNode
}

type Context = {
  user: User | undefined
  setUser(state: User | undefined): void
  theme: typeof dark
  setTheme(state: typeof dark): void
}

const context = {
  user: undefined, 
  setUser: () => Function, 
  theme: dark, 
  setTheme: () => Function
}

const UserContext = createContext<Context>(context)

export function UserProvider({ children }: Props) {

  const deviceColorScheme = useColorScheme()
  const [user, setUser] = useState<User>()
  const [theme, setTheme] = useState(deviceColorScheme === 'light' ? light : dark)
  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme
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
  const { user, setUser, theme, setTheme } = context
  return { user, setUser, theme, setTheme }
}