import { NavigationContainer } from '@react-navigation/native'
import { useUser } from 'context/User'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { AuthRoutes } from './AuthRoutes'

export function Routes() {

  const { theme } = useUser()

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}